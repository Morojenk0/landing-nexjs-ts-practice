export default async function PostItem({ promise }) {
	const post = await promise
	return (
		<div>
			<section>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</section>
		</div>
	)
}
