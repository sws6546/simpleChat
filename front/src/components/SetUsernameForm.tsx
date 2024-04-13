import { useState } from "react"

export default function SetUsernameForm({setUsername}: {setUsername: any}) {
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div className="container-fluid justify-center">
      <div className="row p-4">
        <div className="input-group">
          <input onChange={(e) => { setInputValue(e.target.value) }} type="text" className="form-control" 
          placeholder="Wpisz nazwę użytkownika" />
          <button onClick={() => { setUsername(inputValue) }} className="btn btn-success" type="button">Ustaw</button>
        </div>
      </div>
    </div>
  )
}
