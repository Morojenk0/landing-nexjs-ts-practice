'use client'

import { useState } from 'react'

export default function Pagination({ posts }: { posts: Post[] }) {
	const [currentPage, setCurrentPage] = useState(1)
	const pageCount = Math.ceil(posts.length / 10)
	const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

	function onPageChange(page: any) {
		setCurrentPage(page)
	}

	function paginate(data: Post[], pageNumber: number, pageSize: number) {
		const startIndex = (pageNumber - 1) * pageSize
		return data.slice(startIndex, startIndex + pageSize)
	}
	const paginatedPosts = paginate(posts, currentPage, posts.length)
	console.log(paginatedPosts)

	return (
		<ul className="flex flex-row gap-x-[1rem]">
			{pages.map((page) => {
				return (
					<li
						className={`${
							page === currentPage ? 'text-blue underline' : 'text-gray'
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
