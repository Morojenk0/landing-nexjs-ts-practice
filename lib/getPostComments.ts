export default async function getPostComments(postId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	)

	if (!res.ok) undefined

	return res.json()
}