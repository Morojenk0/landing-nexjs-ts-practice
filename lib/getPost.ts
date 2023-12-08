import formattedDate from './getFormattedDate'

export default async function getPost(postId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)

	if (!res.ok) undefined

	const rawData: Post = await res.json()
	rawData.postTime = formattedDate()

	return rawData
}
