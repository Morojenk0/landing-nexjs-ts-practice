export default async function getPostComments(postId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	)

	if (!res.ok) undefined

	const rawData: PostComment[] = await res.json()
	const data = rawData.map((post: PostComment) => {
		return {
			...post,
			likes: Math.floor(Math.random() * 6),
		}
	})

	return data
}
