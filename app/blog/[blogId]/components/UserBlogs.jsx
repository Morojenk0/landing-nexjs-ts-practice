import getData from '@/lib/data.js'

export default async function UserBlogs() {
	const db = getData()
	const data = await db

	const content = data.blogs.map((blog) => {
		return (
			<section key={blog.id}>
				<h2>{blog.title}</h2>
				<p>{blog.text}</p>
			</section>
		)
	})

	return content
}
