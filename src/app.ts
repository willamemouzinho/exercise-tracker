import path from 'node:path'
import cors from 'cors'
import express, { type Request, type Response } from 'express'

import { connectDB } from './lib/db'
import { createExercise } from './routes/create-exercise'
import { createUser } from './routes/create-user'
import { getAllUsers } from './routes/get-all-users'
import { getLogs } from './routes/get-logs'

const app = express()
app.use(cors())
app.use('/public', express.static(path.resolve('public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.resolve('views/index.html'))
})

connectDB()

app.post('/post', async (req, res) => {
	const { title, content, authorEmail } = req.body
	const result = ''
	res.json(result)
})

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/api/users', createUser)
app.get('/api/users', getAllUsers)
app.post('/api/users/:userId/exercises', createExercise)
app.get('/api/users/:userId/logs', getLogs)

const PORT = 3333
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
