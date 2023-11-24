import UserBlogs from './components/UserBlogs'
import getData from '@/lib/data.js'

export default async function Blogs() {
	const db = getData()
	const data = await db
	return (
		<div>
			<UserBlogs />
		</div>
	)
}
