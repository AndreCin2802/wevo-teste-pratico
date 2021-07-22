import 'dotenv/config'
import 'express-async-errors'

import { errors } from 'celebrate'
import cors from 'cors'
import express, { Errback, NextFunction, Request, Response } from 'express'

import AppError from './errors/AppError'
import router from './routes/index.routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.use(errors())
app.use(
  (error: Error, req: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  }
)

export default app
