// @ts-nocheck

export default async function RecentPosts({ recentPosts }) {
	return (
		<section>
			{recentPosts.map((post: Post) => {
				return (
					<article
						key={post.id}
						className="text-white"
					>
						<h2>{post.title}</h2>
					</article>
				)
			})}
		</section>
	)
}
