export default function formattedDate(): string {
	const minDate: Date = new Date('December 1, 2023 03:24:00')
	const maxDate: Date = new Date('December 31, 2023 03:24:00')

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	} as const

	const date: Date = new Date(
		minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())
	)
	return new Intl.DateTimeFormat('en-US', options).format(date)
}
