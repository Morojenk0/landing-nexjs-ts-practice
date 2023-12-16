// @ts-nocheck

import RecentPosts from './RecentPosts'
import Search from './Search'
import Tags from './Tags'
import getPosts from '@/lib/getPosts'

export default async function Aside() {
	const posts = await getPosts()

	const recentPosts = posts.slice(-5)
	return (
		<aside className="hidden max-w-[23.125rem] xl:flex flex-col gap-y-[2.5rem]">
			<Search />
			<hr className="w-full h-[.1250rem] bg-gray" />
			<RecentPosts recentPosts={recentPosts} />
			<hr className="w-full h-[.1250rem] bg-gray" />
			<Tags />
		</aside>
	)
}
