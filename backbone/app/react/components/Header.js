import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_links">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a href="#" className="navbar-brand">Baseball History</a>
                </div>
                <div className="collapse navbar-collapse" id="navbar_links">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="/#react/histories">Index</a>
                    </li>
                    <li>
                      <a href="/#react/histories/new">New</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}

module.exports = Header
