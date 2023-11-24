// @ts-nocheck

import Navigation from '../components/Navigation'
import type { Metadata } from 'next'
import getData from '@/lib/data.js'
import Link from 'next/link'
export const metadata: Metadata = {
	title: 'About | Appolly',
}

export default async function page() {
	const db = getData()
	const data = await db

	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<h1 className="text-6xl text-white">its Blog Header Title!</h1>
			</header>
			<main>
				{data.blogs.map((blog) => {
					return (
						<section key={blog.id}>
							<h2>{blog.title}</h2>
							<p>{blog.text}</p>
							<Link
								href={`/blog/${blog.id}`}
								target="_blank"
							>
								read more
							</Link>
						</section>
					)
				})}
				<section>
					<h2></h2>
					<p></p>
				</section>
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
