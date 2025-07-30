import { Link } from "react-router"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <div>
            <span className={styles.title}>Kevin Pham</span>
            <a className="ms-3" target="_blank" rel="noopener nonreferrer" href="https://github.com/kpthanh01">test</a>
            <a className="ms-3" target="_blank" rel="noopener nonreferrer" href="https://www.linkedin.com/in/phamktp/">boo</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 me-4">
            <li className="ms-3">
              <Link className={styles.links}>Home</Link>
            </li>
            <li className="ms-3">
              <Link className={styles.links}>Projects</Link>
            </li>
            <li className="ms-3">
              <Link className={styles.links}>About</Link>
            </li>
            <li className="ms-3">
              <Link className={styles.links}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar