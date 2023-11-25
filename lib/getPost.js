export default async function getPost(postId) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)

	if (!res.ok) undefined

	return res.json()
}
