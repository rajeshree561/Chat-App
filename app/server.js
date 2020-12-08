const express=require('express')
const app=express()
const http=require('http').createServer(app)
const port=process.env.PORT||4700
http.listen(port,()=> {
console.log(`Listening on port ${port}`)
})
app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    //res.send('Hello')
    res.sendFile(__dirname+'/index.html')
})
//Socket
const io=require('socket.io')(http)


io.on('connection',(socket)=>{
    console.log('Connected..')
    socket.on('message',(msg)=>{
    //console.log(msg)  
    socket.broadcast.emit('message',msg)
    })

})