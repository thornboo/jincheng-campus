<template>
    <view class="container">
        <u-avatar :src="src" fontSize="18" randomBgColor shape="circle" size="30rpx"
                  text="橙"></u-avatar>
    </view>
</template>

<script>
export default {
    name: 'avatar',
    data() {
        return {
            // 网络请求头像数据
            src: '@/static/images/headPortrait.jpg'
        };
    }
};
</script>

<style lang="scss">
.container {
}
</style>
