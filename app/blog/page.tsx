import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import getPosts from '@/app/_lib/getPosts'

export const metadata: Metadata = {
	title: 'About | Appolly',
	description: 'Page with users posts',
}

export default async function Blog() {
	const postsData = getPosts()
	const posts: Post[] = await postsData
	const recentPosts: Post[] = posts.slice(-4)

	return (
		<div>
			<main>
				<Suspense
					fallback={<h2 className="text-white text-6xl">Loading posts...</h2>}
				>
					{posts.map((post: Post) => {
						return (
							<section key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<Link href={`/blog/post/${post.id}`}>read more</Link>
							</section>
						)
					})}
				</Suspense>
				<div>
					{recentPosts.map((post: Post) => {
						return (
							<section
								key={post.id}
								className="text-white"
							>
								<h2>{post.title}</h2>
							</section>
						)
					})}
				</div>
			</main>
		</div>
	)
}
