import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import getPost from '@/app/_lib/getPost'
import getPosts from '@/app/_lib/getPosts'
import getPostComments from '@/app/_lib/getPostComments'
import PostItem from './components/PostItem'
import getUser from '@/app/_lib/getUser'

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
	const postData: Promise<Post> = getPost(postId)
	const post: Post = await postData

	const commentsData: Promise<PostComment[]> = getPostComments(postId)
	const comments: PostComment[] = await commentsData
	//@ts-ignore
	const userData: Promise<User> = getUser(post.userId)
	const user: User = await userData

	if (!post.id) notFound()

	return (
		<div className="">
			<Suspense
				fallback={<h2 className="text-white text-6xl">Post is loading...</h2>}
			>
				<PostItem
					postData={postData}
					commentsData={commentsData}
					userData={userData}
				/>
			</Suspense>
		</div>
	)
}
