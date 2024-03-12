import express from 'express'
import { findAllMovies } from '../controllers/movieController.js'

const router = express.Router()

router.get('/', findAllMovies)

export default router