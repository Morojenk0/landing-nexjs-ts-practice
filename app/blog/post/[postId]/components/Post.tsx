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
					className="mt-[2.5rem] pl-[.7rem] flex flex-col md:flex-row gap-x-[1.5rem] 
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
					className="mt-[1.5rem] bg-[#000] w-full rounded-[.625rem] overflow-hidden
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
			<section>
				<div
					className="mt-[1.5rem] w-full py-[1.25rem] px-[1rem] bg-blue text-center rounded-[.625rem]
				md:mt-[3.1rem] md:py-[2.5rem] md:px-[1.35rem] "
				>
					<p className="text-white text-base">
						Imagine you&#x60;re at a party, and you&#x60;re bored. You&#x60;ve
						been bored for a while—years, it feels like. You wonder how a party,
						something that is supposed to be fun, can feel like it&#x60;s
						draining the life out of your very soul. As you look around the
						yawning faces of the guests, you realize it&#x60;s going to take
						drastic measures to salvage any excitement out of this long night.
						So you sneak a desperate gulp of your drink, slip on your tinted
						sunglasses and leap atop of the sofa. You&#x60;ve sacrificed
						yourself to karaoke.
					</p>
				</div>
			</section>
			<section>
				<div
					className="mt-[1.5rem] flex flex-col items-center gap-y-[1.8rem]
					md:mt-[3.1rem] md:flex-row md:items-stretch md:justify-between md:gap-y-[0]"
				>
					{[
						[
							'https://picsum.photos/370/400',
							'postImage',
							'The birth of Memphis Design was a lot like this, starting with a gathering of architects and industrial designers in Milan, Italy in 1981. But it wasn’t the party that bored the guests. It was the general state of design—how creativity had stagnated to become corporate and uniform.',
							'',
						],
						[
							'https://picsum.photos/370/400',
							'postImage',
							'Long before all this, there had been a number of fine art and design movements that precipitated Memphis Design, and these were likely on the guests’ minds as they traced where it all had gone wrong. Kadinsky composition On White Kadinsky’s work also likely inspired the Memphis design movement.',
						],
					].map(([image, altImage, text]) => (
						<article
							className="md:max-w-[22rem] lg:max-w-[23.125rem]"
							key={uuidv4()}
						>
							<Image
								className="w-full max-h-[15rem] rounded-[.625rem]
								md:max-h-max"
								src={image}
								alt={altImage}
								width={10000}
								height={10000}
							></Image>
							<p
								className="pl-[.4rem] mt-[1.5rem] text-gray text-base 
								md:mt-[2.6rem] md:pl-[1.4rem]"
							>
								{text}
							</p>
						</article>
					))}
				</div>
			</section>
			<section className="flex justify-center">
				<article
					className="mt-[3.5rem] pt-[1.12rem] pb-[2.7rem] px-[1.12rem] max-w-[30rem] flex flex-col items-center text-center bg-white rounded-[.625rem] shadow-[0px_1px_10px_0px_rgba(0,_0,_0,_0.10)]
				  md:mt-[7.5rem] md:max-w-max md:flex-row md:text-left"
				>
					<div className="flex flex-col">
						<Image
							className="max-w-[6.25rem] max-h-[6.25rem] rounded-full"
							src="https://picsum.photos/100/100"
							alt={user.name}
							width={10000}
							height={10000}
						></Image>
						<ul className="mt-[1.2rem] flex flex-row gap-x-[.75rem] items-center">
							<li>
								<a
									className="group block box-content -m-1 p-1 transition hover:scale-125"
									href={`https://facebook.com/${user.name}`}
									target="_blank"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_105_493)">
											<path
												className="transition group-hover:fill-blue"
												d="M9.33317 8.99992H10.9998L11.6665 6.33325H9.33317V4.99992C9.33317 4.31325 9.33317 3.66659 10.6665 3.66659H11.6665V1.42659C11.4492 1.39792 10.6285 1.33325 9.76184 1.33325C7.95184 1.33325 6.6665 2.43792 6.6665 4.46659V6.33325H4.6665V8.99992H6.6665V14.6666H9.33317V8.99992Z"
												fill="#232233"
											/>
										</g>
										<defs>
											<clipPath id="clip0_105_493">
												<rect
													width="16"
													height="16"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</a>
							</li>
							<li>
								<a
									className="group block box-content -m-1 p-1 transition hover:scale-125"
									href={`https://instagram.com/${user.name}`}
									target="_blank"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_105_500)">
											<path
												className="transition group-hover:fill-blue"
												d="M8 0C10.1736 0 10.4448 0.00799995 11.2976 0.048C12.1496 0.088 12.7296 0.2216 13.24 0.42C13.768 0.6232 14.2128 0.8984 14.6576 1.3424C15.0644 1.74232 15.3792 2.22607 15.58 2.76C15.7776 3.2696 15.912 3.8504 15.952 4.7024C15.9896 5.5552 16 5.8264 16 8C16 10.1736 15.992 10.4448 15.952 11.2976C15.912 12.1496 15.7776 12.7296 15.58 13.24C15.3797 13.7742 15.0649 14.2581 14.6576 14.6576C14.2576 15.0643 13.7738 15.379 13.24 15.58C12.7304 15.7776 12.1496 15.912 11.2976 15.952C10.4448 15.9896 10.1736 16 8 16C5.8264 16 5.5552 15.992 4.7024 15.952C3.8504 15.912 3.2704 15.7776 2.76 15.58C2.22586 15.3796 1.74202 15.0648 1.3424 14.6576C0.935525 14.2577 0.620745 13.774 0.42 13.24C0.2216 12.7304 0.088 12.1496 0.048 11.2976C0.0104 10.4448 0 10.1736 0 8C0 5.8264 0.00799995 5.5552 0.048 4.7024C0.088 3.8496 0.2216 3.2704 0.42 2.76C0.620189 2.22574 0.935043 1.74186 1.3424 1.3424C1.74214 0.935385 2.22594 0.620583 2.76 0.42C3.2704 0.2216 3.8496 0.088 4.7024 0.048C5.5552 0.0104 5.8264 0 8 0ZM8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4V4ZM13.2 3.8C13.2 3.53478 13.0946 3.28043 12.9071 3.09289C12.7196 2.90536 12.4652 2.8 12.2 2.8C11.9348 2.8 11.6804 2.90536 11.4929 3.09289C11.3054 3.28043 11.2 3.53478 11.2 3.8C11.2 4.06522 11.3054 4.31957 11.4929 4.50711C11.6804 4.69464 11.9348 4.8 12.2 4.8C12.4652 4.8 12.7196 4.69464 12.9071 4.50711C13.0946 4.31957 13.2 4.06522 13.2 3.8ZM8 5.6C8.63652 5.6 9.24697 5.85286 9.69706 6.30294C10.1471 6.75303 10.4 7.36348 10.4 8C10.4 8.63652 10.1471 9.24697 9.69706 9.69706C9.24697 10.1471 8.63652 10.4 8 10.4C7.36348 10.4 6.75303 10.1471 6.30294 9.69706C5.85286 9.24697 5.6 8.63652 5.6 8C5.6 7.36348 5.85286 6.75303 6.30294 6.30294C6.75303 5.85286 7.36348 5.6 8 5.6V5.6Z"
												fill="#232233"
											/>
										</g>
										<defs>
											<clipPath id="clip0_105_500">
												<rect
													width="16"
													height="16"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</a>
							</li>
							<li>
								<a
									className="group block box-content -m-1 p-1 transition hover:scale-125"
									href={`https://twitter.com/${user.name}`}
									target="_blank"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_105_506)">
											<path
												className="transition group-hover:fill-blue"
												d="M16.1296 2.36091C15.5189 2.66108 14.8712 2.85822 14.208 2.94579C14.907 2.48129 15.4302 1.75025 15.68 0.888905C15.024 1.32268 14.3048 1.62668 13.5552 1.79113C13.0517 1.19253 12.3843 0.795539 11.6568 0.661869C10.9293 0.5282 10.1824 0.665341 9.53225 1.05197C8.88212 1.43861 8.36515 2.05307 8.06173 2.79983C7.75832 3.5466 7.68544 4.38382 7.85444 5.18135C6.52413 5.10726 5.22271 4.72315 4.03467 4.05394C2.84664 3.38473 1.79854 2.44539 0.958442 1.29691C0.661074 1.86442 0.504806 2.50955 0.505642 3.16624C0.505642 4.45513 1.09604 5.59379 1.99364 6.26046C1.46245 6.24188 0.942948 6.08249 0.478442 5.79557V5.84179C0.478602 6.70019 0.745938 7.53212 1.23512 8.19651C1.7243 8.86091 2.40523 9.31688 3.16244 9.48713C2.66933 9.63561 2.15229 9.65749 1.65044 9.55113C1.86394 10.29 2.28005 10.9362 2.84052 11.3992C3.40098 11.8623 4.07774 12.1189 4.77604 12.1334C4.08203 12.739 3.28738 13.1867 2.43755 13.4508C1.58771 13.715 0.699344 13.7905 -0.176758 13.6729C1.3526 14.7657 3.13292 15.3459 4.95124 15.344C11.1056 15.344 14.4712 9.67913 14.4712 4.76624C14.4712 4.60624 14.4672 4.44446 14.4608 4.28624C15.1159 3.76017 15.6813 3.10848 16.1304 2.36179L16.1296 2.36091Z"
												fill="#232233"
											/>
										</g>
										<defs>
											<clipPath id="clip0_105_506">
												<rect
													width="16"
													height="16"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</a>
							</li>
							<li className="">
								<a
									className="group block box-content -m-1 p-1 transition hover:scale-125"
									href={`https://youtube.com/${user.name}`}
									target="_blank"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_105_513)">
											<path
												className="transition group-hover:fill-blue"
												d="M15.6344 2.498C16 4.28 16 8 16 8C16 8 16 11.72 15.6344 13.502C15.4312 14.487 14.8368 15.262 14.084 15.524C12.7168 16 8 16 8 16C8 16 3.2856 16 1.916 15.524C1.16 15.258 0.5664 14.484 0.3656 13.502C2.38419e-08 11.72 0 8 0 8C0 8 2.38419e-08 4.28 0.3656 2.498C0.5688 1.513 1.1632 0.738 1.916 0.476C3.2856 -1.78814e-07 8 0 8 0C8 0 12.7168 -1.78814e-07 14.084 0.476C14.84 0.742 15.4336 1.516 15.6344 2.498ZM6.4 11.5L11.2 8L6.4 4.5V11.5Z"
												fill="#232233"
											/>
										</g>
										<defs>
											<clipPath id="clip0_105_513">
												<rect
													width="16"
													height="16"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</a>
							</li>
						</ul>
					</div>
					<div className="ml-[1.12rem] pt-[1.12rem] flex flex-col">
						<h4 className="text-black text-xl uppercase">{user.name}</h4>
						<h5 className="mt-[.44rem] text-blue text-base">UI Desginer</h5>
						<p className="mt-[.56rem] text-gray text-base ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
							porttitor est amet, volutpat augue a sodales nec, vitae. Pulvinar
							vitae eu sed elit vitae.
						</p>
					</div>
				</article>
			</section>
			<Comments commentsData={commentsData} />
		</section>
	)
}
