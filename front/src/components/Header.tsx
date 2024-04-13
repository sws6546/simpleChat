

export default function Header({ username, logout }: { username: string, logout: any }) {
  return (
    <header className="container-fluid text-center bg-light">
      <div className="row justify-content-between align-items-center">
        <div className="col-2 p-3">
          <h1>ChatApp</h1>
        </div>
        <div className="col-2 p-3">
            <button className="btn btn-outline-danger" onClick={() => { logout("") }}>Logout {username}</button>
        </div>
      </div>
    </header>
  )
}
