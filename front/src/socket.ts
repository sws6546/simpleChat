import { io } from 'socket.io-client'
import 'dotenv/config'

export const socket = io("${process.env.SOCKETIO_URL}")