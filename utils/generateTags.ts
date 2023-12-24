export default function generateTags(): string {
	const tags: string[] = ['ecommers app', 'Music app', 'bank app', 'social app']

	const tagsNumber: number = Math.floor(Math.random() * 4)
	return tags[tagsNumber]
}
