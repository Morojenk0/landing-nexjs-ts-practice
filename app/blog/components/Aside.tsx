// @ts-nocheck

import RecentPosts from './RecentPosts'
import Search from './Search'
import Tags from './Tags'
import getPosts from '@/app/_lib/getPosts'

export default async function Aside() {
	const posts = await getPosts()

	const recentPosts = posts.slice(-5)

	return (
		<aside>
			<Search />
			<RecentPosts recentPosts={recentPosts} />
			<Tags />
		</aside>
	)
}
