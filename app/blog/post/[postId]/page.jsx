import { Suspense } from 'react'
import getPost from '@/lib/getPost'
import getPosts from '@/lib/getPosts'
import Navigation from '@/app/components/Navigation'
import PostItem from './components/PostItem'
import { notFound } from 'next/navigation'

export default async function Post({ params: { postId } }) {
	const postData = getPost(postId)
	const post = await postData

	if (!post.id) notFound()

	return (
		<div className="">
			<Navigation />
			<div className="container">
				<Suspense
					fallback={<h2 className="text-white text-6xl">Post is loading...</h2>}
				>
					<PostItem promise={postData} />
				</Suspense>
			</div>
		</div>
	)
}

export async function generateStaticParams() {
	const postsdata = getPosts()
	const posts = await postsdata

	return posts.map((post) => ({
		postId: post.id.toString(),
	}))
}
