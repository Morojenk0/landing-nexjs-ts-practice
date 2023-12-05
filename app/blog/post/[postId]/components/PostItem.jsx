export default async function PostItem({ promise, comments, user }) {
	const userData = await user

	const post = await promise
	const qwe = await comments

	const test = Array.from(qwe)
	const lenght = test.length
	return (
		<div>
			<section>
				<div className="flex flex-row">
					<div></div>
					<div>{userData.name}</div>
					<div className="text-white">{lenght} comments</div>
				</div>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</section>
			{qwe.map((comment) => {
				return (
					<section key={comment.id}>
						<h2 className="text-white">{comment.name}</h2>
						<p>{comment.body}</p>
					</section>
				)
			})}
		</div>
	)
}
