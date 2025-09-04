<route lang="json5" type="page">
{
	style: {
		navigationBarTitleText: '发布话题',
	},
}
</route>

<template>
	<view class="page">
		<view class="tip">请选择分类并发布你的内容</view>
		<picker :range="categoryOptions" range-key="label" :value="categoryIndex" @change="onCatChange">
			<view class="picker">{{ categoryOptions[categoryIndex].label }}</view>
		</picker>
		<textarea
			class="input"
			v-model="content"
			maxlength="280"
			placeholder="分享你的校园瞬间… (最多 280 字)"
		/>
		<view class="actions">
			<button class="secondary" disabled>添加图片</button>
			<text class="muted">{{ content.length }} / 280</text>
		</view>
		<button class="primary" :disabled="!canPublish" @tap="onPublish">发布</button>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { createForumPost } from '@/service/forum/forumApi'

	const categoryOptions = [
		{ label: '表白墙', value: 'confess' },
		{ label: '吐槽', value: '吐槽' },
		{ label: '求助', value: 'help' },
		{ label: '失物招领', value: 'lost' },
	]
	const categoryIndex = ref(0)
	const content = ref('')
	const canPublish = computed(() => content.value.trim().length > 0)

	onLoad((query) => {
		const c = String(query?.category || '')
		const i = Math.max(
			0,
			categoryOptions.findIndex((o) => o.value === c)
		)
		categoryIndex.value = i
	})

	function onCatChange(e: any) {
		categoryIndex.value = Number(e.detail.value)
	}

	async function onPublish() {
		if (!canPublish.value) return
		const cat = categoryOptions[categoryIndex.value].value as any
		try {
			await createForumPost({ content: content.value.trim(), category: cat })
			uni.showToast({ icon: 'success', title: '已发布' })
			setTimeout(() => {
				// 返回列表并提示刷新
				uni.setStorageSync('forum_refresh', '1')
				uni.navigateBack()
			}, 400)
		} catch (e) {}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding: 12px;
	}
	.tip {
		color: #6b7280;
		margin-bottom: 8px;
	}
	.picker {
		height: 40px;
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		background: #fff;
	}
	.input {
		width: 100%;
		min-height: 140px;
		margin-top: 10px;
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		padding: 10px;
	}
	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0;
	}
	.secondary {
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		padding: 6px 12px;
	}
	.muted {
		color: #6b7280;
	}
	.primary {
		width: 100%;
		background: #2563eb;
		color: #fff;
		border-radius: 10px;
		padding: 10px 0;
	}
</style>
