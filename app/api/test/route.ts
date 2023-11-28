export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const user = searchParams.get('user')
	const id = searchParams.get('id')

	const obj = Object.fromEntries(searchParams.entries())

	return Response.json(obj)
}
