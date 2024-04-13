type message = {
  author: string;
  content: string;
}

export default function MessagesContainer({msgList}: {msgList: message[]}) {
  return (
    <div className="container-fluid">
      <div className="col p-4">
        {
          msgList.map((msg, idx) => (
            <div className="row justify-content-between align-items-center" key={idx}>
              <div className="col-8">
                <h4>{msg.author}: {msg.content}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
