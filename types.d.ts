type Post = {
	userId: number
	id: number
	name: string
	title: string
	body: string
	postTime: string
}
type User = {
	id: number
	name: string
	username: string
	email: string
	adress: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: { lat: string; lng: string }
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}
type PostComment = {
	postId: number
	id: number
	name: string
	email: string
	body: string
}
