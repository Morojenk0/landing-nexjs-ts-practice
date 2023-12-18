export default async function Comments({
	commentsData,
}: {
	commentsData: Promise<PostComment[]>
}) {
	const comments: PostComment[] = await commentsData

	return (
		<section>
			<div className="mt-[5rem]">
				<h3 className="pl-[.3rem] text-black text-3xl uppercase">
					{comments.length} comments
				</h3>
				<form className="mt-[.5rem] flex flex-col gap-y-[1rem]">
					<div
						className="flex flex-col gap-x-[1rem] gap-y-[1rem]
					sm:flex-row"
					>
						<input
							className="w-full p-[.5rem] text-gray text-base border-[2px] border-gray bg-transparent rounded-[.625rem] transition focus:placeholder:text-transparent focus:outline-none focus:shadow-[0px_1px_10px_0px_rgba(0,_0,_0,_0.20)]"
							type="text"
							name="Name"
							placeholder="Enter Your name"
						/>
						<input
							className="w-full p-[.5rem] text-gray text-base border-[2px] border-gray bg-transparent rounded-[.625rem] transition focus:placeholder:text-transparent focus:outline-none focus:shadow-[0px_1px_10px_0px_rgba(0,_0,_0,_0.20)]"
							type="email"
							name="Email"
							placeholder="Enter Your email-adress"
						/>
					</div>
					<textarea
						className="p-[.5rem] text-gray text-base border-[2px] border-gray bg-transparent rounded-[.625rem] transition resize-none focus:placeholder:text-transparent focus:outline-none focus:shadow-[0px_1px_10px_0px_rgba(0,_0,_0,_0.20)]"
						name="commentaryText"
						placeholder="Enter commentary text"
					></textarea>
					<button
						className="w-full px-[1.5rem] py-[.5rem] text-white text-xl uppercase bg-blue rounded-[.625rem] transition hover:bg-blue-800 active:bg-blue-600
						md:ml-auto md:max-w-max"
						type="submit"
					>
						Submit
					</button>
				</form>
				<section className="mt-[2rem]">
					{comments.map((comment: PostComment) => {
						return (
							<article key={comment.id}>
								<h2 className="text-black uppercase">{comment.name}</h2>
								<p>{comment.body}</p>
							</article>
						)
					})}
				</section>
			</div>
		</section>
	)
}
