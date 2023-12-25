// import { useSearchParams } from 'next/navigation'
// const searchParams = useSearchParams()
// const query = searchParams.get('query')
import RecentPosts from './RecentPosts'
import Search from './Search'
import Tags from './Tags'
import getPosts from '@/lib/getPosts'

export default async function Aside({
	searchParams,
}: {
	searchParams?: { query?: string; page?: string }
}) {
	// import data
	const posts = await getPosts()

	// recent posts
	const recentPosts = posts.slice(-5)

	const tags = posts.map((obj) => {
		const tags = [obj.tag]
		return tags
	})

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
