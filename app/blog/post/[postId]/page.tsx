import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import getPost from '@/app/_lib/getPost'
import getPosts from '@/app/_lib/getPosts'
import getPostComments from '@/app/_lib/getPostComments'
import Navigation from '@/app/components/Navigation'
import PostItem from './components/PostItem'

export async function generateMetadata({
	params: { postId },
}: {
	params: { postId: string }
}) {
	const postData = getPost(postId)
	const post = await postData

	return {
		title: post.title,
		description: `This is ${post.id} post`,
	}
}

export async function generateStaticParams() {
	const postsdata = getPosts()
	const posts: Post[] = await postsdata

	return posts.map((post: Post) => ({
		postId: post.id.toString(),
	}))
}

export default async function Post({
	params: { postId },
}: {
	params: { postId: string }
}) {
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
