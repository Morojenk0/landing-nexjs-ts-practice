// import { useSearchParams } from 'next/navigation'

import RecentPosts from './RecentPosts'
import Search from './Search'
import Tags from './Tags'
import getPosts from '@/lib/getPosts'

export default async function Aside({
	searchParams,
}: {
	searchParams?: { query?: string; page?: string }
}) {
	// const searchParams = useSearchParams()
	// const query = searchParams.get('query')

	const posts = await getPosts()
	const tags = posts.map((obj) => {
		const tags = [obj.tag]
		return tags
	})
	// console.log(tags)

	const recentPosts = posts.slice(-5)
	const filteredPosts = posts.filter(() => 1 > 1)
	// console.log(filteredPosts)
	console.log(searchParams?.query)

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
