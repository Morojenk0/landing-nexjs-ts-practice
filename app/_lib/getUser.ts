export default async function getUser(postId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${postId}`
	)

	if (!res.ok) undefined

	return res.json()
}
