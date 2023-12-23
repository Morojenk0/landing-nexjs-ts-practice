import Navigation from '../components/Navigation'
import Aside from './components/Aside'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// ? Search
	// ? Tags sort
	// ? Pagination
	// ? Breadcrumbs
	// ? New comments
	// ? News letter

	// ? Components new folders? and _folderName?
	return (
		<>
			<header className="pb-[4rem] bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
			</header>
			<main className="bg-white">
				<div
					className="container py-[4rem] flex flex-col items-center
					xl:py-[7.5rem] xl:flex-row xl:justify-between xl:items-stretch"
				>
					{children}
					<Aside />
				</div>
			</main>
		</>
	)
}
