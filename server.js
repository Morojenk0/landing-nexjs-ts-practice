const express = require('express')
const path = require('path')
const app = express()

const port = 5000

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.get('/test(.html)?', (req, res) => {
	res.send('This is a test page')
})

// app.get(/a/, (req, res) => {
// 	res.send('NOT FOUND')
// })

app.get(/.*xdd$/, (req, res) => {
	res.send('xdd')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
	res.send(req.params)
})

const cb0 = function (req, res, next) {
	console.log('CB0')
	next()
}

const cb1 = function (req, res, next) {
	console.log('CB1')
	next()
}

const cb2 = function (req, res) {
	res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
const q = function (req, res, next) {
	console.log('q')
	next()
}

const w = function (req, res, next) {
	console.log('w')
	next()
}

app.get(
	'/example/d',
	[q, w],
	(req, res, next) => {
		console.log('the response will be sent by the next function ...')
		next()
	},
	(req, res) => {
		res.send('Hello from D!')
		next()
	},
	app.get('/example/d/test', (req, res, next) => {
		res.send('example test')
	})
)
