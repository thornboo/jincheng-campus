<route lang="json5" type="page">
{
	style: { navigationBarTitleText: '失物招领发布' },
}
</route>

<template>
	<view>
		<wd-form ref="form" :model="model">
			<wd-cell-group border title="失主个人信息">
				<wd-input
					v-model="model.value1"
					:rules="[{ required: true, message: '请输入姓名' }]"
					clearable
					label="姓名"
					label-width="100px"
					placeholder="请输入姓名"
					prop="value1"
				/>
				<wd-input
					v-model="model.value2"
					:rules="[{ required: true, message: '班级' }]"
					clearable
					label="班级"
					label-width="100px"
					placeholder="请输入班级"
					prop="value2"
				/>
				<wd-input
					v-model="model.value3"
					:rules="[{ required: true, message: '学院' }]"
					clearable
					label="学院"
					label-width="100px"
					placeholder="请输入学院"
					prop="value3"
				/>
				<wd-input
					v-model="model.value2"
					:rules="[{ required: true, message: '联系方式' }]"
					clearable
					label="联系方式"
					label-width="100px"
					placeholder="请输入联系方式"
					prop="value2"
				/>
			</wd-cell-group>
			<wd-cell-group border title="丢失物品信息">
				<wd-input
					v-model="model.value4"
					:rules="[{ required: true, message: '物品描述' }]"
					clearable
					label="物品详细描述"
					label-width="100px"
					placeholder="如刻字、贴纸、价值、损坏的部分等"
					prop="value4"
				/>
				<wd-cell prop="fileList" title="物品图片" title-width="100px">
					<wd-upload
						:action="imagesUpload"
						:file-list="model.fileList"
						@change="handleFileChange"
					></wd-upload>
				</wd-cell>
			</wd-cell-group>
			<wd-cell-group border title="丢失时间地点">
				<wd-input
					v-model="model.value5"
					:rules="[{ required: true, message: '丢失时间' }]"
					clearable
					label="丢失时间"
					label-width="100px"
					placeholder="如上午、下午、具体日期"
					prop="value5"
				/>
				<wd-input
					v-model="model.value5"
					:rules="[{ required: true, message: '丢失地点' }]"
					clearable
					label="丢失地点"
					label-width="100px"
					placeholder="如教室、操场、食堂"
					prop="value5"
				/>
			</wd-cell-group>
			<view class="footer">
				<wd-button block size="large" type="primary" @click="handleSubmit">提交</wd-button>
			</view>
		</wd-form>
	</view>
</template>

<script lang="ts" setup>
	import { useToast } from 'wot-design-uni'

	// 通过解构赋值，将 success 方法重命名为 showSuccess
	const { success: showSuccess, error: showError } = useToast()

	const model = reactive<{
		value1: string
		value2: string
		value3: string
		value4: string
		value5: string
		value6: string
		fileList: Record<string, string>[]
	}>({
		value1: '',
		value2: '',
		value3: '',
		value4: '',
		value5: '',
		value6: '',
		fileList: [],
	})

	const form = ref()

	const imagesUpload = ref<string>('/api/upload')

	function handleFileChange({ fileList }) {
		model.fileList = fileList
	}

	// 表单提交事件
	function handleSubmit() {
		form.value
			.validate()
			.then(({ valid }) => {
				if (valid) {
					showSuccess({
						msg: '发布成功！',
					})
				}
				// TODO：根据接口的200相应后再进行跳转，否则提示发布错误！
				setTimeout(() => {
					uni.navigateBack({
						delta: 1,
					})
				}, 2000)
			})
			.catch((error: any) => {
				showError({
					msg: '网络请求超时！',
				})
				console.log(error)
			})
	}
</script>

<style lang="scss" scoped>
	.footer {
		padding: 12px;
	}
</style>
