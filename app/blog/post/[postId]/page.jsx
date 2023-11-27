import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import getPost from '@/lib/getPost'
import getPosts from '@/lib/getPosts'
import getPostComments from '@/lib/getPostComments'
import Navigation from '@/app/components/Navigation'
import PostItem from './components/PostItem'

export default async function Post({ params: { postId } }) {
	const postData = getPost(postId)
	const post = await postData

	const commentsData = getPostComments(postId)
	const comments = await commentsData

	if (!post.id) notFound()

	return (
		<div className="">
			<Navigation />
			<div className="container">
				<Suspense
					fallback={<h2 className="text-white text-6xl">Post is loading...</h2>}
				>
					<PostItem
						promise={postData}
						comments={comments}
					/>
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
