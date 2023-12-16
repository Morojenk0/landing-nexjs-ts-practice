import Image from 'next/image'
import Comments from './Comments'
import { v4 as uuidv4 } from 'uuid'

export default async function PostItem({
	postData,
	commentsData,
	userData,
}: {
	postData: Promise<Post>
	commentsData: Promise<PostComment[]>
	userData: Promise<User>
}) {
	const post: Post = await postData
	const comments: PostComment[] = await commentsData
	const user: User = await userData

	return (
		<section className="max-w-[48.125rem]">
			<article>
				<Image
					className="w-auto h-auto rounded-[.625rem] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]"
					src="https://picsum.photos/770/300"
					alt="postImage"
					width={10000}
					height={10000}
				></Image>
				<header
					className="mt-[2.5rem] pl-[.7rem]  flex flex-col md:flex-row gap-x-[1.5rem] 
				md:mt-[3.75rem] md:pl-[1.4rem] md:gap-x-[1.9rem] "
				>
					<p className="text-gray uppercase text-xl before:content-[url('../public/icons/timer.svg')] relative pl-[2.5rem] before:-ml-[2.5rem] before:absolute">
						{post.postTime}
					</p>
					<p className="text-gray uppercase text-xl before:content-[url('../public/icons/person.svg')] relative pl-[2.5rem] before:-ml-[2.5rem] before:absolute">
						{user.name}
					</p>
					<p className="text-gray uppercase text-xl before:content-[url('../public/icons/message-circle.svg')] relative pl-[2.5rem] before:-ml-[2.5rem] before:absolute">
						{comments.length} comments
					</p>
				</header>
				<div
					className="mt-[.75rem] pl-[.7rem] flex flex-col gap-y-[1.25rem] 
				md:mt-[1.5rem] md:pl-[1.4rem]"
				>
					<p className="text-gray text-base first-letter:text-blue first-letter:text-[3rem]">
						{post.body}
					</p>
					{[
						[
							'he Memphis Design movement is one of unlikeliest success stories in the history of design. Like so many artistic reactions, it began as an outlet for its creators, a way to rail against and confound elite sensibilities. The result was a style that was revolutionary in its time and whose spirit is a continual source of inspiration to this day.',
						],
						[
							'As popular and influential as Memphis Design has been over the years, it can sometimes get a bad rap. It is a loud, colorful style that is hard to separate from its era. And when implemented without care, it can make some design projects feel antiquated. On the other hand, a good designer can turn these sins into virtues: obnoxious retro becoming lively nostalgia.',
						],
						[
							'Memphis Design is a 1980s design aesthetic characterized by scattered, brightly colored shapes and lines. It typically combines circles and triangles with black-and-white graphic patterns such as polka dots and squiggly lines.',
						],
					].map(([text]) => (
						<p
							className="text-gray text-base"
							key={uuidv4()}
						>
							{text}
						</p>
					))}
				</div>
			</article>
			<section>
				<div
					className="mt-[2.5rem] bg-[#000] w-full rounded-[.625rem] overflow-hidden
				md:mt-[3.75rem]"
				>
					<video
						className="max-h-[18.75rem] w-full object-fill"
						src="/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4"
						poster="/poster.png"
						id="video"
						controls
					></video>
				</div>
			</section>
			<Comments commentsData={commentsData} />
		</section>
	)
}
