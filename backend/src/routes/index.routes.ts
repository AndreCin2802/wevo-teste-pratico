import { Router } from 'express'

import userRouter from './user.routes'

const router = Router()
router.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

router.use('/user', userRouter)
export default router
