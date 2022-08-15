<template>
	<u-tabbar v-model="index" @change="myChange()" :fixed="true" :placeholder="true"
		:safeAreaInsetBottom="true">
		<u-tabbar-item :name='0' text="首页" icon="home" @click="click(0)"></u-tabbar-item>
		<u-tabbar-item :name='1' text="校园墙" icon="moments" @click="click(1)"></u-tabbar-item>
		<u-tabbar-item :name='2' text="消息" icon="chat" @click="click(2)"></u-tabbar-item>
		<u-tabbar-item :name='3' text="我的" icon="account" @click="click(3)"></u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default {
		name: 'Tabbar',
		data() {
			return {
				index: 0
			}
		},
		methods: {
			myChange(name) {
				if (this.index == name) {
					console.log("index：" + this.index)
					console.log("name：" + name)
					console.log('if')
				} else {
					console.log("index：" + this.index)
					console.log("name：" + name)
					console.log('else')
				}
			},
			click(index) {
				this.index = index
			},
			test() {
				console.log('test')
			}
		}
	}
</script>

<style lang="scss">
</style>
