<template>
    <view class="container">
        <u-icon :label="endorse" index="1" labelPos="right" labelSize="14" name="thumb-up"
                size="26px"
                @click="onClick(index)"></u-icon>
        <u-icon :label="comments" index="2" labelPos="right" labelSize="14" name="chat" size="26px"
                @click="onClick(index)"></u-icon>
        <u-icon :label="transpond" index="3" labelPos="right" labelSize="14" name="share-square"
                size="26px"
                @click="onClick(index)"></u-icon>
    </view>
</template>

<script>
export default {
    name: 'interact-bar',
    props: ['endorse', 'comments', 'transpond'],
    data() {
        return {};
    },
    methods: {
        onClick(index) {
            console.log(index);
            switch (index) {
                case 1:
                    console.log('1111');
                    break;
                case 2:
                    console.log('1111');
                    break;
                case 3:
                    console.log('1111');
                    break;
            }
        }
    }
};
</script>

<style lang="scss">
.container {
    display: flex;
    justify-content: space-evenly;
}
</style>
