import Request from '@/utils/request'

// 加载轮播图
export function getSwiperData(query) {
	return Request({
		url: '/swiper',
		method: 'get',
		params: query
	})
}