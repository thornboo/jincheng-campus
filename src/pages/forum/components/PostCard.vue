<template>
	<view class="card">
		<view class="card-header">
			<view class="avatar">{{ initials }}</view>
			<view class="who">
				<view class="author">{{ item.author }}</view>
				<view class="meta">{{ timeText }} · {{ categoryText }}</view>
			</view>
		</view>
		<view class="card-content" @tap="goDetail">{{ item.content }}</view>
		<view v-if="item.images?.length" class="images">
			<image
				v-for="(src, idx) in item.images"
				:key="idx"
				class="img"
				:src="src"
				mode="aspectFill"
				@tap="onPreview(idx)"
			/>
		</view>
		<view v-if="item.tags?.length" class="tags">
			<text v-for="(t, i) in item.tags" :key="i" class="tag">#{{ t }}</text>
		</view>
		<view class="actions">
			<button class="action like" :class="{ active: item.liked }" @tap="emitLike">
				<text>❤</text>
				<text class="num">{{ item.likes }}</text>
			</button>
			<button class="action" @tap="goDetail"><text>💬</text><text>{{ item.comments }}</text></button>
			<button class="action" @tap="onShare"><text>🔗</text><text>{{ item.shares }}</text></button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import type { ForumPostItem } from '@/service/forum/forumApi'
import { shareForumPost } from '@/service/forum/forumApi'

const props = defineProps<{ item: ForumPostItem }>()
const emits = defineEmits<{
	(e: 'like', id: string): void
}>()

const initials = computed(() => props.item.author?.charAt(0)?.toUpperCase() || '同')
const timeText = computed(() => formatTime(props.item.createdAt))
const categoryText = computed(() => categoryMap[props.item.category] || props.item.category)

const categoryMap: Record<string, string> = {
	all: '全部',
	confess: '表白墙',
	'吐槽': '吐槽',
	help: '求助',
	lost: '失物招领',
}

function formatTime(ts: number) {
	const diff = Math.floor((Date.now() - ts) / 1000)
	if (diff < 60) return `${diff}s 前`
	if (diff < 3600) return `${Math.floor(diff / 60)}m 前`
	if (diff < 86400) return `${Math.floor(diff / 3600)}h 前`
	const d = new Date(ts)
	const mm = String(d.getMonth() + 1).padStart(2, '0')
	const dd = String(d.getDate()).padStart(2, '0')
	const hh = String(d.getHours()).padStart(2, '0')
	const mi = String(d.getMinutes()).padStart(2, '0')
	return `${mm}-${dd} ${hh}:${mi}`
}

function onPreview(idx: number) {
	uni.previewImage({
		current: idx,
		urls: props.item.images,
		indicator: 'default',
	})
}

function emitLike() {
	emits('like', props.item.id)
}

function goDetail() {
	uni.navigateTo({ url: `/pages/forum/detail?id=${props.item.id}` })
}

async function onShare() {
	try {
		await shareForumPost(props.item.id)
		uni.showShareImageMenu?.({})
		uni.showToast({ icon: 'none', title: '已分享' })
	} catch (e) {}
}
</script>

<style lang="scss" scoped>
.card {
	border: 1px solid #e5e7eb;
	border-radius: 12px;
	background: #ffffff;
	padding: 10px;
}
.card-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
}
.avatar {
	width: 34px;
	height: 34px;
	border-radius: 999px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(135deg, #a78bfa, #60a5fa);
	color: #fff;
	font-weight: 700;
	font-size: 14px;
}
.who { display: flex; flex-direction: column; gap: 2px; }
.author { font-weight: 600; font-size: 14px; }
.meta { font-size: 12px; color: #6b7280; }
.card-content { margin-top: 6px; white-space: pre-wrap; word-break: break-word; font-size: 14px; }
.images { margin-top: 6px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
.img { width: 100%; height: 94px; border-radius: 10px; overflow: hidden; }
.tags { margin-top: 6px; display: flex; flex-wrap: wrap; gap: 6px; }
.tag { font-size: 12px; padding: 2px 8px; border-radius: 999px; border: 1px solid #e5e7eb; color: #6b7280; }
.actions { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
.action { border: 1px solid #e5e7eb; background: transparent; border-radius: 10px; padding: 4px 8px; font-size: 13px; }
.action.active { border-color: #ef4444; color: #ef4444; }
</style>


