export default async function getPost(postId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)

	if (!res.ok) undefined

	return res.json()
}
