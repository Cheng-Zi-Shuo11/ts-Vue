const express = require('express')

const app = express()

app.use(express.static('build',{ maxAge: 1000 * 5000}))

app.listen(5000)