import { v4 as uuidv4 } from 'uuid'

export default function Tags() {
	return (
		<section>
			<h2 className="text-black text-3xl uppercase">tags</h2>
			<ul className="mt-[.8rem] flex flex-wrap gap-y-[1.13rem] gap-x-[1.9rem]">
				{[['ecommers app'], ['music app'], ['bank app'], ['social app']].map(
					([tag]) => (
						<li key={uuidv4()}>
							<p className="text-black text-xl uppercase underline underline-offset-[2px]">
								{tag}
							</p>
						</li>
					)
				)}
			</ul>
		</section>
	)
}
