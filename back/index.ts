import { Server } from 'socket.io'

const io = new Server({
    cors: {
        origin: "*",
    }
})

io.on('connection', (socket) => {
    socket.on('whoami', (username) => {
        console.log(`User ${username} connected`)
        io.emit('sendMsg', {author: "System", contxt: `Welcome ${username}`})
    })

    socket.on('sendMsg', (msg) => {
        io.emit('getMsg', msg)
    })
})

io.listen(3000)