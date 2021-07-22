import app from './app'

const port = process.env.PORT || 3003

import { createConnection } from 'typeorm'

createConnection()
  .then(() => {
    app.listen(port, () => {
      console.log('Connected to the database')
      console.log(
        '\x1b[33m%s\x1b[0m',
        `=> 🚀 Server running on the port: ${port}`
      )
    })
  })
  .catch((error) => {
    console.log(error)
  })
