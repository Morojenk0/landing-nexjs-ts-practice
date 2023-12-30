'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Pagination({ currentPosts }: { currentPosts: Post[] }) {
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const pathname = usePathname()
	const { replace } = useRouter()

	const currentPage = Number(params.get('page')) || 1
	const pageCount = Math.ceil((currentPosts.length * 10) / 2.5)
	const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

	function setPage(page: any) {
		if (page !== currentPage) {
			params.set('page', page)
		}
		replace(`${pathname}?${params.toString()}`)
	}
	function prevPage() {
		const prevPage = currentPage - 1

		if (currentPage !== 1) {
			params.set('page', prevPage.toString())
			replace(`${pathname}?${params}`)
		}
	}
	function nextPage() {
		const nextPage = currentPage + 1

		if (currentPage !== pages.length) {
			params.set('page', nextPage.toString())
			replace(`${pathname}?${params}`)
		}
	}

	return (
		<ul className="mt-[1.25rem] flex flex-row justify-center items-center gap-x-[.1rem] xl:gap-x-[.5rem] xl:mt-[2.5rem]">
			<li>
				<button
					className={`${
						currentPage === 1
							? 'active:bg-transparent hover:bg-transparent cursor-default'
							: ''
					} px-2 box-content text-base text-gray rounded-full transition active:bg-gray/25 hover:bg-gray/40  
					md:text-2xl`}
					onClick={() => {
						prevPage()
					}}
				>
					Prev
				</button>
			</li>
			{pages.map((page) => {
				return (
					<li
						className={` ${
							currentPage <= page + 4 && currentPage >= page - 4
								? ''
								: page === 1 || page === pages.length
								? ''
								: 'hidden'
						} `}
						key={page}
					>
						<button
							className={`${
								currentPage === page
									? 'text-blue underline hover:cursor-default hover:bg-transparent active:bg-transparent'
									: 'text-gray'
							}  text-base px-2.5 box-content rounded-full transition active:bg-gray/25 hover:bg-gray/40
							md:text-2xl`}
							onClick={() => {
								if (currentPage !== page) {
									setPage(page)
								}
							}}
						>
							{(page === 1 && currentPage !== page && currentPage >= 7) ||
							(page === pages.length &&
								currentPage !== page &&
								currentPage <= pages.length - 6)
								? page === 1
									? `${page}...`
									: `...${page}`
								: `${page}`}
						</button>
					</li>
				)
			})}
			<li>
				<button
					className={`${
						currentPage === pages.length
							? 'active:bg-transparent hover:bg-transparent cursor-default'
							: ''
					} text-base px-2.5 box-content text-gray rounded-full transition active:bg-gray/25 hover:bg-gray/40  
					md:text-2xl`}
					onClick={() => {
						nextPage()
					}}
				>
					Next
				</button>
			</li>
		</ul>
	)
}
