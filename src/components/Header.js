
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoon, faSun, faUser,faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

function Header({ darkMode, toggleDarkMode }) {
  

  return (
    <div className="">
  <nav className={`navbar navbar-expand-lg fixed-top  " border-bottom ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
    <div className="container-fluid">
      <a href="/" className="navbar-brand cursor">Billieconnect</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-none d-sm-block" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faHome}  className={`   ${darkMode ? 'text-white' : 'text-success'}`}/> 
            </a>
          </li>
          <li className="nav-item">
              <button
        className='nav-link '
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon}  className={`   ${darkMode ? 'text-white' : 'text-primary'}`}/>
      </button>
              </li>
        </ul>

        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2  w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              width={'50%'}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <FontAwesomeIcon icon={faUser} size="lg" className= {`   ${darkMode ? 'text-white' : 'text-success'}`} />
            </a>
          </li>
          <li className="nav-item">
          <a type="" href="#l" class="nav-link position-relative">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className={`   ${darkMode ? 'text-white' : 'text-primary'}`} />
  <span class="position-absolute top-1  start-95 translate-middle badge h-50 w-60 rounded-circle bg-danger">
    10+
    <span class="visually-hidden">unread messages</span>
  </span>
</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#l">
              <FontAwesomeIcon icon={faBell} size="lg" className={`   ${darkMode ? 'text-white' : 'text-danger'}`} />
              
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt="User"
              className="rounded-circle img-fluid"
              style={{ width: '90px', height: '30px',marginTop:'-8px'}}
            />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  );
}

export default Header;
