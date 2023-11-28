import { promises as fs } from 'fs'

export default async function getData() {
	const file = await fs.readFile(process.cwd() + '/app/api/data.json', 'utf-8')
	const data = JSON.parse(file)

	return data
}
