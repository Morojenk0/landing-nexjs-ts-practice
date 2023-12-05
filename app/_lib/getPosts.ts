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

function formattedDate() {
	const minDate = new Date('December 1, 2023 03:24:00')
	const maxDate = new Date('December 31, 2023 03:24:00')

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	} as const

	const date = new Date(
		minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())
		// 10 + ~10
	)
	return new Intl.DateTimeFormat('en-US', options).format(date)
}
