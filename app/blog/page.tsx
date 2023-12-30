import type { Metadata } from 'next'
import getPosts from '@/lib/getPosts'
import Pagination from './components/Pagination'
import Posts from './components/Posts'

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
		const postsPerPage = Math.ceil(array.length / 20)

		const indexOfFirstPost = currentPage * postsPerPage - postsPerPage
		const indexOfLastPost = indexOfFirstPost + postsPerPage

		return array.slice(indexOfFirstPost, indexOfLastPost)
	}

	const currentPosts: Post[] = paginatePosts(searchFilter(posts))

	return (
		<section>
			{currentPosts.length > 0 ? (
				<>
					<Posts currentPosts={currentPosts} />
					<Pagination currentPosts={currentPosts} />
				</>
			) : (
				<h2 className="text-gray text-3xl">
					Posts by search query was not found!
				</h2>
			)}
		</section>
	)
}
