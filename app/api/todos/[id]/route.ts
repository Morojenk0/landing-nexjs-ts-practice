const DATA_SOURCE_URL: any = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(request: Request) {
	const id = request.url.slice(request.url.lastIndexOf('/') + 1)
	const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

	const todo = await res.json()

	if (!todo.id) return Response.json({ message: 'Todo not found' })

	return Response.json(todo)
}
