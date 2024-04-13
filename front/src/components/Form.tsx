

export default function Form({setMessage, sendMessage} : {setMessage: any, sendMessage: any}) {
  return (
    <div className="container-fluid justify-center">
      <div className="row p-4">
        <div className="input-group">
          <input onChange={(e) => {setMessage(e.target.value)}} type="text" className="form-control" placeholder="Napisz wiadomość" />
          <button onClick={() => {sendMessage()}} className="btn btn-success" type="button">Wyślij wiadomość</button>
        </div>
      </div>
    </div>
  )
}