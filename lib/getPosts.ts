import formattedDate from '@/utils/formattedDate'
import generateTags from '@/utils/generateTags'

export default async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!res.ok) undefined

	const rawData: Post[] = await res.json()
	const data = rawData.map((post: Post) => {
		return {
			...post,
			postTime: formattedDate(),
			tag: generateTags(),
		}
	})

	return data
}
