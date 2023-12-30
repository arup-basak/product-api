import express from 'express'
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.json({msg: "Hello World"})
})

app.listen(PORT, () => {
    console.log(` > LISTEN TO PORT ${PORT}`)
})