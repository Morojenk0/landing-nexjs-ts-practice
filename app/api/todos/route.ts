const DATA_SOURCE_URL: any = 'https://jsonplaceholder.typicode.com/todos'

const API_KEY: string = process.env.DATA_API_KEY as string

type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export async function GET() {
	const res = await fetch(DATA_SOURCE_URL)

	const todos: Todo[] = await res.json()
	return Response.json(todos)
}

export async function DELETE(request: Request) {
	const { id }: Partial<Todo> = await request.json()

	if (!id) return Response.json({ message: 'Todo id required' })

	await fetch(`${DATA_SOURCE_URL}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'API-key': API_KEY,
		},
	})

	return Response.json({ message: `Todo ${id} is deleted` })
}

export async function POST(request: Request) {
	const { userId, title, completed }: Partial<Todo> = await request.json()

	if (!userId || !title || !typeof completed)
		return Response.json({ message: 'Missing required data' })

	const res = await fetch(DATA_SOURCE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'API-key': API_KEY,
		},
		body: JSON.stringify({ userId, title, completed }),
	})

	const newTodo: Todo = await res.json()

	return Response.json(newTodo)
}

export async function PUT(request: Request) {
	const { userId, id, title, completed }: Todo = await request.json()

	if (!userId || !id || !title || typeof completed !== 'boolean')
		return Response.json({ message: 'Missing required data' })

	const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'API-key': API_KEY,
		},
		body: JSON.stringify({ userId, title, completed }),
	})

	const updatedTodo: Todo = await res.json()

	return Response.json(updatedTodo)
}
