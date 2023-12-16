import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import getPosts from '@/lib/getPosts'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'About | Appolly',
	description: 'Page with users posts',
}

export default async function Blog() {
	const posts: Post[] = await getPosts()
	const temp = posts.filter((obj) => obj.id < 5)

	return (
		<section className="">
			<div className="flex flex-col gap-y-[1.75rem] xl:gap-y-[3.75rem]">
				<Suspense
					fallback={<h2 className="text-black text-6xl">Loading posts...</h2>}
				>
					{temp.map((post: Post) => {
						return (
							<section
								className="max-w-[48.125rem]"
								key={post.id}
							>
								<Image
									className="w-auto h-auto rounded-[.625rem] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]"
									src="https://picsum.photos/770/300"
									alt="postImage"
									width={10000}
									height={10000}
								></Image>
								<h2
									className="mt-[1.5rem] text-black text-2xl md:text-4xl uppercase
								xl:mt-[3.12rem]"
								>
									{post.title}
								</h2>
								<p
									className="mt-[1.12rem] text-gray text-base
								xl:mt-[.5rem]"
								>
									{post.body}
								</p>
								<Link
									className="inline-block mt-[2.25rem] text-blue text-xl uppercase underline
								xl:mt-[2.5rem]"
									href={`/blog/post/${post.id}`}
								>
									read more
								</Link>
							</section>
						)
					})}
				</Suspense>
			</div>
		</section>
	)
}
