'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Search() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	function handleSearch(term: string) {
		const params = new URLSearchParams(searchParams)
		if (term) {
			params.set('query', term)
		} else {
			params.delete('query')
		}
		replace(`${pathname}?${params.toString()}`)
	}

	return (
		<form className="pl-[1.12rem] flex flex-row border border-gray rounded-[.3125rem] overflow-hidden">
			<button
				className=""
				type="submit"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_95_346)">
						<path
							d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
							fill="#6C6C72"
						/>
					</g>
					<defs>
						<clipPath id="clip0_95_346">
							<rect
								width="21"
								height="21"
								fill="white"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
			<input
				className="p-[1.12rem] bg-transparent w-full bg-white text-gray text-base focus:outline-none focus:placeholder:text-transparent"
				type="text"
				placeholder="Search for...."
				onChange={(e) => {
					handleSearch(e.target.value)
				}}
				// defaultValue={searchParams.get('query')?.toString()}
			/>
		</form>
	)
}
