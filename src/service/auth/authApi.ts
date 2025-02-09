import { http } from '@/utils/http'

export interface User {
	id: string
	name: string
}

export const getUserInfo = (data: object) => {
	return http.get<User>('/auth/userInfo', { data })
}
