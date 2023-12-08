import formattedDate from './getFormattedDate'

export default async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!res.ok) undefined

	const rawData: Post[] = await res.json()
	const data = rawData.map((obj: Post) => {
		return {
			...obj,
			postTime: formattedDate(),
		}
	})
	return data
}
