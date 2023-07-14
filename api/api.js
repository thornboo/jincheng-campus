import axios from 'axios'

// 创建实例
const instance = axios.create({
	// 请求服务器地址
	baseURL: "https://mock.apifox.cn/m1/3007884-0-default",
	// 请求超时时间
	timeout: 10000,
	// 每次请求携带cookie
	withCredentials: true
});

// 导出实例
export default instance