import Request from '@/utils/request';

export default {
    // 轮播图图片信息
    getSwiperData(query) {
        return Request({
            url: '/swiper',
            method: 'get',
            params: query
        });
    },
    // 滚动通知栏信息
    getNoticeData(query) {
        return Request({
            url: '/notice',
            method: 'get',
            param: query
        });
    }
};

// 轮播图图片信息
export function getSwiperData(query) {
    return Request({
        url: '/swiper',
        method: 'get',
        params: query
    });
}

// 滚动通知栏信息
export function getNoticeData(query) {
    return Request({
        url: '/notice',
        method: 'get',
        param: query
    });
}
