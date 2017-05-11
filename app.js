var express=require('express')
var app=express()
var port=process.env.PORT || 3000
app.set('view engine','ejs')

var routes=require('./routes')
var path=require('path')
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.get('/',routes.home)
app.get('/star_wars_episode/:episode_number?',routes.movie_single)
app.get('*',routes.notFound)


app.listen(port)
console.log('App is running on '+port)