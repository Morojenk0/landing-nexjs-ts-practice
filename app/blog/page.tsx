// @ts-nocheck
import Navigation from '../components/Navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import getPosts from '@/lib/getPosts.js'
import { Suspense } from 'react'
export const metadata: Metadata = {
	title: 'About | Appolly',
}

export default async function Blog() {
	const postsData = getPosts()

	const posts = await postsData
	const filteredPosts = posts.filter((post, index) => index < 20)

	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<h1 className="text-6xl text-white">its Blog Header Title!</h1>
			</header>
			<main>
				{filteredPosts.map((post) => {
					return (
						<section key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.text}</p>
							<Link href={`/blog/post/${post.id}`}>read more</Link>
						</section>
					)
				})}
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
