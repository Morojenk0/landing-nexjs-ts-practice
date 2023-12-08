import Navigation from '../components/Navigation'
import Aside from './components/Aside'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<header className="pb-[4rem] bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
			</header>
			<main className="container">
				{children}
				<Aside />
			</main>
		</>
	)
}
