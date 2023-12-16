// @ts-nocheck
import Image from 'next/image'
import Link from 'next/link'

export default async function RecentPosts({ recentPosts }) {
	return (
		<section>
			<h2 className="text-black text-3xl uppercase">recent posts</h2>
			<div className="mt-[1rem] flex flex-col gap-y-[2.5rem]">
				{recentPosts.map((post: Post) => {
					return (
						<article
							key={post.id}
							className="text-white"
						>
							<Image
								className="w-auto h-auto rounded-[.625rem] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]"
								src="https://picsum.photos/370/180"
								alt="postImage"
								width={10000}
								height={10000}
							></Image>
							<h2 className="mt-[1.12rem] text-black text-xl uppercase">
								<Link
									className="hover:underline"
									href={`/blog/post/${post.id}`}
								>
									{post.title}
								</Link>
							</h2>
						</article>
					)
				})}
			</div>
		</section>
	)
}
