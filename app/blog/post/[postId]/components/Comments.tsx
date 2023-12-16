export default async function Comments({
	commentsData,
}: {
	commentsData: Promise<PostComment[]>
}) {
	const comments: PostComment[] = await commentsData

	return (
		<div>
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
