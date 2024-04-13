import Header from "./components/Header"
import SetUsernameForm from "./components/SetUsernameForm"
import Form from "./components/Form"
import MessagesContainer from "./components/MessagesContainer"
import { useEffect, useState } from "react"
import { socket } from "./socket"

type message = {
  author: string;
  content: string;
}

function App() {
  const [message, setMessage] = useState('')
  const [msgList, setMsgList] = useState<message[]>([])
  const [username, setUsername] = useState<string>("")

  const sendMessage = () => {
    socket.emit('sendMsg', { author: username, content: message })
  }

  const addMsg = (msg: message) => {
    setMsgList(list => [msg, ...list])
  }

  useEffect(() => {
    socket.on('getMsg', addMsg)
  }, [])

  useEffect(() => {
    if (username !== "") {
      socket.emit("whoami", username)
    }
  }, [username])

  return (
    <div>
      {
        (username == "")
          ? <SetUsernameForm setUsername={setUsername} />
          : <>
            <Header username={username} logout={setUsername} />
            <Form setMessage={setMessage} sendMessage={sendMessage} />
            <MessagesContainer msgList={msgList} />
          </>
      }
    </div>
  )
}

export default App
