import {Link} from 'react-router-dom'

export default function Navbar () {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div className="container-fluid">
    <p className="navbar-brand">
          <img src="https://cdn-icons-png.flaticon.com/512/528/528101.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          Pokeview
        </p>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" style={{textDecoration: 'none'}}>
          <p className="nav-link" aria-current="page" >Home</p>
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/mypokemon" style={{textDecoration: 'none'}}>
          <p className="nav-link" aria-current="page" >MyPokemon</p>
        </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}