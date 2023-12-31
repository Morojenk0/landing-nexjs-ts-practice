import formattedDate from '@/utils/formattedDate'

export default async function getPost(postId: string) {
	const res: Response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)
	if (!res.ok) undefined

	const rawData: Post = await res.json()
	rawData.postTime = formattedDate()

	return rawData
}
