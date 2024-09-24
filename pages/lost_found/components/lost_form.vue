<!--
 * @FileDescription: 失物招领发布表单
 * @Author: thornboo
 * @Date: 
 * @LastEditors: thornboo
 * @LastEditTime: 2023-5-10
-->
<template>
	<view class="context">
		<u-form labelPosition="left" :model="model" :rules="rules">
			<u-form-item prop="lostInfo.text" borderBottom>
				<u-textarea v-model="model.lostInfo.text" placeholder="请输入丢失物品的信息，包括丢失地点，丢失时间。" height="150px"
					maxlength="-1" border="none"></u-textarea>
			</u-form-item>

			<u-form-item>
				<view class="img-upload">
					<u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="img_up"
						:multiple="true" :maxCount="9"></u-upload>
				</view>
			</u-form-item>
		</u-form>
		<u-button type="error" text="重置" customStyle="width: 80px; float: left; margin-left: 30px" @click="reset">
		</u-button>
		<u-button type="primary" text="发布" customStyle="width: 80px; float: right; margin-right: 30px" @click="submit">
		</u-button>
	</view>
</template>

<script>
	export default {
		name: 'lost_form',
		data() {
			return {
				model: {
					lostInfo: {
						text: ''
					},
				},
				rules: {},
				fileList: []
			};
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://www.example.com/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			submit() {
				// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
				this.$refs.form1.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			reset() {
				const validateList = ['userInfo.name', 'userInfo.sex', 'radiovalue1', 'checkboxValue1', 'intro',
					'hotel', 'code', 'userInfo.birthday'
				]
				this.$refs.form1.resetFields()
				this.$refs.form1.clearValidate()
				setTimeout(() => {
					this.$refs.form1.clearValidate(validateList)
					// 或者使用 this.$refs.form1.clearValidate()
				}, 10)
			},
		}
	};
</script>

<style lang="scss">
	.context {}

	.img-upload {
		margin: 8px;
	}
</style>