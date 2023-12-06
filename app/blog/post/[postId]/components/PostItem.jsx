import getUser from '@/app/_lib/getUser'

export default async function PostItem({ promise, comments, user }) {
	const userData = await user

	const post = await promise

	const qwe = await comments

	const test = Array.from(qwe)
	const lenght = test.length

	const userId = getUser(post.userId)
	const userid1 = await userId
	return (
		<div>
			<section>
				<div className="flex flex-col">
					<div className="text-white">{post.postTime}</div>
					<div className="text-white">{userid1.name}</div>
					<div className="text-white">{lenght} comments</div>
				</div>
				<h2></h2>
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
