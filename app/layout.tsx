import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

import Footer from './components/Footer'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Appolly',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// ? Tags sort
	// ? Pagination
	// ? Breadcrumbs
	// ? New comments
	// ? News letter

	// ? Components new folders? and _folderName?
	return (
		<html
			lang="en"
			className="bg-black"
		>
			<body className={`${josefinSans.className}`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
