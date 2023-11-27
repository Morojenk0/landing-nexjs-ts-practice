// @ts-nocheck
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navigation from '../components/Navigation'
import Link from 'next/link'
import getPosts from '@/lib/getPosts.js'

export const metadata: Metadata = {
	title: 'About | Appolly',
}

export default async function Blog() {
	const postsData = getPosts()
	const posts = await postsData

	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<h1 className="text-6xl text-white">its Blog Header Title!</h1>
			</header>
			<main>
				<Suspense
					fallback={<h2 className="text-white text-6xl">Loading posts...</h2>}
				>
					{posts.map((post) => {
						return (
							<section key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.text}</p>
								<Link href={`/blog/post/${post.id}`}>read more</Link>
							</section>
						)
					})}
				</Suspense>
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
