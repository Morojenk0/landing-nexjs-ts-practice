import type { Metadata } from 'next'
import { Suspense } from 'react'
import getPosts from '@/lib/getPosts'
import Pagination from './components/Pagination'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'About | Appolly',
	description: 'Page with users posts',
}
export default async function Blog({
	searchParams,
}: {
	searchParams?: { query?: string; page?: string }
}) {
	const postsData: Promise<Post[]> = getPosts()
	const posts: Post[] = await postsData

	const query = searchParams?.query || ''
	const currentPage = Number(searchParams?.page) || 1

	function searchFilter(array: Post[]): Post[] {
		return array.filter(
			(post: Post) =>
				post.title.includes(query) ||
				post.body.includes(query) ||
				post.postTime.includes(query) ||
				post.tag.includes(query)
		)
	}

	function paginatePosts(array: Post[]) {
		const postsPerPage = Math.ceil(posts.length / 10)
		const indexOfFirstPost = currentPage * postsPerPage - postsPerPage
		const indexOfLastPost = indexOfFirstPost + postsPerPage
		return array.slice(indexOfFirstPost, indexOfLastPost)
	}

	const currentPosts: Post[] = paginatePosts(posts)
	const filteredPosts: Post[] = paginatePosts(searchFilter(posts))
	console.log(filteredPosts)

	return (
		<section>
			<div className="flex flex-col gap-y-[1.75rem] xl:gap-y-[3.75rem]">
				<Suspense
					fallback={<h2 className="text-black text-6xl">Loading posts...</h2>}
				>
					{filteredPosts.map((post: Post) => {
						return (
							<section
								className="max-w-[48.125rem] "
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
			<Pagination posts={posts} />
		</section>
	)
}
