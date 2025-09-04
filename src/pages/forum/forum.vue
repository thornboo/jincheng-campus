<route lang="json5" type="page">
{
	style: {
		navigationBarTitleText: '校园墙',
	},
}
</route>

<template>
	<view class="page">
		<view class="header">
			<view class="title">校园墙</view>
			<view class="toolbar">
				<input class="search" type="text" v-model.trim="search" placeholder="搜索内容或作者…" />
				<picker :range="sortOptions" range-key="label" :value="sortIndex" @change="onSortChange">
					<view class="sort">{{ sortOptions[sortIndex].label }}</view>
				</picker>
			</view>
		</view>

		<scroll-view class="tabs" scroll-x :enable-flex="true" :scroll-with-animation="true">
			<view class="tabs-inner">
				<view class="tab" :class="{ active: category==='all' }" @tap="switchCategory('all')">全部</view>
				<view class="tab" :class="{ active: category==='confess' }" @tap="switchCategory('confess')">表白墙</view>
				<view class="tab" :class="{ active: category==='吐槽' }" @tap="switchCategory('吐槽')">吐槽</view>
				<view class="tab" :class="{ active: category==='help' }" @tap="switchCategory('help')">求助</view>
				<view class="tab" :class="{ active: category==='lost' }" @tap="switchCategory('lost')">失物招领</view>
			</view>
		</scroll-view>

		<z-paging ref="pagingRef" v-model="list" @query="queryList" refresher-only="false">
			<template #top>
				<view style="height: 6px" />
			</template>
			<post-card v-for="item in list" :key="item.id" :item="item" @like="onLike" />
		</z-paging>

		<button class="fab" @tap="goComposer">✍️</button>
	</view>
</template>

<script lang="ts" setup>
import PostCard from './components/PostCard.vue'
import { getForumList, type ForumPostItem, likeForumPost } from '@/service/forum/forumApi'
import { onShow } from '@dcloudio/uni-app'

const pagingRef = ref()
const list = ref<ForumPostItem[]>([])

const category = ref<'all' | 'confess' | '吐槽' | 'help' | 'lost'>('all')
const search = ref('')
const sortOptions = [
	{ label: '最新', value: 'latest' },
	{ label: '最热', value: 'hot' },
]
const sortIndex = ref(0)
const sortValue = computed(() => sortOptions[sortIndex.value].value)
let searchTimer: any = 0


function switchCategory(c: any) {
	category.value = c
	reload()
}
function onSortChange(e: any) {
	sortIndex.value = Number(e.detail.value)
	reload()
}

function reload() {
	// 触发 z-paging 重新加载
	pagingRef.value?.reload()
}

async function queryList(pageNo: number, pageSize: number) {
	try {
		const { data } = await getForumList({
			page: pageNo,
			pageSize,
			category: category.value,
			search: search.value,
			sort: sortValue.value as any,
		})
		// z-paging 期望 setLocalPaging
		// @ts-ignore
		pagingRef.value?.setLocalPaging(data.list || [], data.total || 0)
	} catch (e) {
		// @ts-ignore
		pagingRef.value?.complete(false)
	}
}

async function onLike(id: string) {
	const idx = list.value.findIndex((p) => p.id === id)
	if (idx < 0) return
	const item = list.value[idx]
	const prev = { liked: item.liked, likes: item.likes }
	// 前端乐观更新
	item.liked = !item.liked
	item.likes += item.liked ? 1 : -1
	try {
		await likeForumPost(id)
	} catch (e) {
		Object.assign(item, prev)
	}
}

function goComposer() {
	const c = category.value
	uni.navigateTo({ url: `/pages/forum/compose?category=${c}` })
}

onShow(() => {
	try {
		const flag = uni.getStorageSync('forum_refresh')
		if (flag) {
			uni.removeStorageSync('forum_refresh')
			reload()
		}
	} catch (e) {}
})

watch(
	() => search.value,
	() => {
		clearTimeout(searchTimer)
		searchTimer = setTimeout(() => reload(), 220)
	},
)
</script>

<style lang="scss" scoped>
.page { padding: 8px 12px 56px; }
.header { position: sticky; top: 0; z-index: 5; background: #f8f8f8; padding: 6px 0; }
.title { font-size: 16px; font-weight: 600; padding: 2px 0 6px; }
.toolbar { display: grid; grid-template-columns: 1fr auto; gap: 6px; align-items: center; }
.search { height: 32px; padding: 0 10px; border: 1px solid #e5e7eb; border-radius: 10px; background: #fff; font-size: 14px; }
.sort { height: 32px; padding: 0 10px; border: 1px solid #e5e7eb; border-radius: 10px; display: flex; align-items: center; background: #fff; font-size: 13px; }

.tabs { padding: 6px 0 10px; white-space: nowrap; }
.tabs-inner { display: flex; flex-direction: row; gap: 6px; }
.tab { display: inline-flex; padding: 4px 10px; border: 1px solid #e5e7eb; border-radius: 999px; background: #fff; font-size: 13px; }
.tab.active { background: #2563eb; color: #fff; border-color: #2563eb; }

.muted { color: #6b7280; }

.fab { position: fixed; right: 14px; bottom: 14px; height: 44px; width: 44px; border-radius: 12px; background: #2563eb; color: #fff; font-size: 20px; line-height: 44px; text-align: center; }
</style>
