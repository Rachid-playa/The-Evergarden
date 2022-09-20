import express from 'express'
import bcrypt from 'bcrypt'
import mysql from 'mysql'
import session from 'express-session'
import multer from 'multer'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// Home Page
app.get('/', (req, res) => {
    res.render('home')
})

// dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

//display login page
app.get('/login', (req, res) => {
    const user = {
        email: '',
        password: '',
    }
    res.render('login', {error: false, user:user})
})



// display signup page
app.get('/signup', (req, res) => {
    const user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    res.render('signup', {error: false, user:user})
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})