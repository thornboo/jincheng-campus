<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '帖子详情',
  },
}
</route>

<template>
  <view class="page">
    <view v-if="post" class="post">
      <view class="header">
        <view class="avatar">{{ initials }}</view>
        <view class="who">
          <view class="author">{{ post.author }}</view>
          <view class="meta">{{ timeText }} · {{ categoryText }}</view>
        </view>
      </view>
      <view class="content">{{ post.content }}</view>
      <view v-if="post.images?.length" class="images">
        <image v-for="(src, idx) in post.images" :key="idx" class="img" :src="src" mode="aspectFill" @tap="preview(idx)" />
      </view>
      <view class="actions">
        <button class="action like" :class="{ active: post.liked }" @tap="toggleLike">❤ {{ post.likes }}</button>
        <button class="action">💬 {{ post.comments }}</button>
        <button class="action" @tap="doShare">🔗 {{ post.shares }}</button>
      </view>
    </view>

    <view class="comment-box">
      <textarea class="comment-input" v-model="comment" placeholder="说点什么吧..." />
      <button class="send" :disabled="!comment.trim()" @tap="sendComment">发送</button>
    </view>

    <z-paging ref="pagingRef" v-model="commentList" @query="queryComments" refresher-only="false">
      <view v-for="c in commentList" :key="c.id" class="comment-item">
        <view class="c-avatar">{{ c.author?.charAt(0)?.toUpperCase() }}</view>
        <view class="c-body">
          <view class="c-head">
            <text class="c-author">{{ c.author }}</text>
            <text class="c-time">{{ formatTime(c.createdAt) }}</text>
          </view>
          <view class="c-content">{{ c.content }}</view>
          <view v-if="c.replies?.length" class="c-replies">
            <view v-for="r in c.replies" :key="r.id" class="c-reply">
              <text class="c-author">{{ r.author }}:</text>
              <text>{{ r.content }}</text>
            </view>
          </view>
        </view>
      </view>
    </z-paging>
  </view>
  
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { getForumDetail, likeForumPost, getForumComments, createForumComment, type ForumPostItem, type ForumCommentItem } from '@/service/forum/forumApi'

const id = ref('')
const post = ref<ForumPostItem | null>(null)
const comment = ref('')
const commentList = ref<ForumCommentItem[]>([])
const pagingRef = ref()

onLoad(async (q) => {
  id.value = String(q?.id || '')
  if (!id.value) return
  await loadDetail()
})

async function loadDetail() {
  const { data } = await getForumDetail(id.value)
  post.value = data
}

const initials = computed(() => post.value?.author?.charAt(0)?.toUpperCase() || '同')
const timeText = computed(() => (post.value ? formatTime(post.value.createdAt) : ''))
const categoryText = computed(() => (post.value ? categoryMap[post.value.category] || post.value.category : ''))

const categoryMap: Record<string, string> = { all: '全部', confess: '表白墙', '吐槽': '吐槽', help: '求助', lost: '失物招领' }

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

async function toggleLike() {
  if (!post.value) return
  const prev = { liked: post.value.liked, likes: post.value.likes }
  post.value.liked = !post.value.liked
  post.value.likes += post.value.liked ? 1 : -1
  try {
    await likeForumPost(post.value.id)
  } catch (e) {
    Object.assign(post.value, prev)
  }
}

async function doShare() {
  // 使用列表页按钮实现分享计数，这里只触发系统分享
  // #ifdef H5
  try { await navigator?.share?.({ title: '分享帖子', text: post.value?.content?.slice(0, 30) }) } catch (e) {}
  // #endif
}

function preview(idx: number) { uni.previewImage({ current: idx, urls: post.value?.images || [] }) }

async function queryComments(pageNo: number, pageSize: number) {
  try {
    const { data } = await getForumComments(id.value, { page: pageNo, pageSize })
    // @ts-ignore
    pagingRef.value?.setLocalPaging(data.list || [], data.total || 0)
  } catch (e) {
    // @ts-ignore
    pagingRef.value?.complete(false)
  }
}

async function sendComment() {
  if (!comment.value.trim()) return
  try {
    await createForumComment(id.value, { content: comment.value.trim() })
    comment.value = ''
    pagingRef.value?.reload?.()
    // 也更新详情的统计
    if (post.value) post.value.comments += 1
  } catch (e) {}
}
</script>

<style lang="scss" scoped>
.page { padding: 10px; }
.post { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; padding: 10px; }
.header { display: flex; align-items: center; gap: 8px; }
.avatar { width: 34px; height: 34px; border-radius: 999px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #a78bfa, #60a5fa); color: #fff; font-weight: 700; font-size: 14px; }
.who { display: flex; flex-direction: column; gap: 2px; }
.author { font-weight: 600; font-size: 14px; }
.meta { font-size: 12px; color: #6b7280; }
.content { margin-top: 6px; white-space: pre-wrap; word-break: break-word; font-size: 14px; }
.images { margin-top: 6px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
.img { width: 100%; height: 94px; border-radius: 10px; overflow: hidden; }
.actions { display: flex; gap: 8px; margin-top: 8px; }
.action { border: 1px solid #e5e7eb; background: transparent; border-radius: 10px; padding: 4px 8px; font-size: 13px; }
.action.active { border-color: #ef4444; color: #ef4444; }

.comment-box { display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center; margin: 10px 0; }
.comment-input { height: 68px; border: 1px solid #e5e7eb; border-radius: 10px; padding: 8px; }
.send { height: 36px; padding: 0 12px; background: #2563eb; color: #fff; border-radius: 10px; }

.comment-item { display: grid; grid-template-columns: 34px 1fr; gap: 8px; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
.c-avatar { width: 34px; height: 34px; border-radius: 999px; display: flex; align-items: center; justify-content: center; background: #e5e7eb; font-weight: 700; font-size: 14px; }
.c-body { display: flex; flex-direction: column; gap: 4px; }
.c-head { display: flex; gap: 8px; font-size: 12px; color: #6b7280; }
.c-author { font-weight: 600; color: #111827; }
.c-replies { margin-top: 4px; padding-left: 8px; display: flex; flex-direction: column; gap: 4px; }
.c-reply { font-size: 12px; color: #374151; }
</style>


