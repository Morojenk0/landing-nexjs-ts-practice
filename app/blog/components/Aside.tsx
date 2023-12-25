import RecentPosts from './RecentPosts'
import Search from './Search'
import Tags from './Tags'
import getPosts from '@/lib/getPosts'
import { Suspense } from 'react'
export default async function Aside() {
	const postsData: Promise<Post[]> = getPosts()
	const posts: Post[] = await postsData

	const recentPosts: Post[] = posts.slice(-5)

	const tags = posts.map((obj) => {
		const tags = [obj.tag]
		return tags
	})

	return (
		<aside className="hidden max-w-[23.125rem] xl:flex flex-col gap-y-[2.5rem]">
			<Suspense
				fallback={<h2 className="text-black text-6xl">Search is loading...</h2>}
			>
				<Search />
			</Suspense>

			<hr className="w-full h-[.1250rem] bg-gray" />
			<RecentPosts recentPosts={recentPosts} />
			<hr className="w-full h-[.1250rem] bg-gray" />
			<Tags />
		</aside>
	)
}
