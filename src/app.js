import express from 'express';
import movie from './routes/movie.js'

const app = express()

app.use(express.json())
app.use('/filmes', movie)

export default app