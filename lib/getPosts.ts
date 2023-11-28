export default async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!res.ok) undefined

	return res.json()
}
