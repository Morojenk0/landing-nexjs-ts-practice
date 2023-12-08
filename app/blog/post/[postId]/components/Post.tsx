import getUser from '@/app/_lib/getUser'

export default async function PostItem({
	postData,
	commentsData,
	userData,
}: {
	postData: Promise<Post>
	commentsData: Promise<PostComment[]>
	userData: Promise<User>
}) {
	const post: Post = await postData
	const comments: PostComment[] = await commentsData
	const user: User = await userData

	return (
		<div>
			<section>
				<div className="flex flex-col">
					<div className="text-white">{post.postTime}</div>
					<div className="text-white">{user.name}</div>
					<div className="text-white">{comments.length} comments</div>
				</div>
				<h2></h2>
				<p>{post.body}</p>
			</section>
			{comments.map((comment: PostComment) => {
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
