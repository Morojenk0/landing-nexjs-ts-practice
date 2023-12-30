'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Pagination({ posts }: { posts: Post[] }) {
	const pageCount = Math.ceil(posts.length / 10)
	const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const params = new URLSearchParams(searchParams)
	const currentPage = Number(params.get('page')) || 1

	function onPageChange(page: any) {
		if (page) {
			params.set('page', page)
		} else {
			params.delete('page')
		}
		replace(`${pathname}?${params.toString()}`)
	}

	function paginate(data: Post[], pageNumber: number, pageSize: number) {
		const startIndex = (pageNumber - 1) * pageSize
		return data.slice(startIndex, startIndex + pageSize)
	}
	// const paginatedPosts = paginate(posts, currentPage, posts.length)
	// console.log(paginatedPosts)
	// const qwe = currentPage * 10 - 10
	// const asd = posts.slice(qwe, qwe + 10)
	// console.log(asd)

	return (
		<ul className="flex flex-row gap-x-[1rem]">
			{pages.map((page) => {
				return (
					<li
						className={`${
							currentPage === page ? 'text-blue underline' : 'text-gray'
						} text-base p-2 box-content hover:cursor-pointer`}
						key={page}
						onClick={() => {
							onPageChange(page)
						}}
					>
						{page}
					</li>
				)
			})}
		</ul>
	)
}
