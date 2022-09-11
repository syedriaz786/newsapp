import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

  render() {


    return (
      <div>        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">Home</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link " to="/Business">Business</Link>       {/*     here we call different categories 
                                                                                      hum ne link yahan dia han ,call hum app.js se kara rhe han or data news.js se arha hai or jis component k under hum daaal rhe han wo newsitem.js hai    */}
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/General">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Sport">Sport</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Technology">Technology</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default NavBar