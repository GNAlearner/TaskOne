import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimney, faList, faArrowsTurnRight, faGears, faUser} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow shadow-sm">
            <div className="container-fluid boldFont">
                <a className="navbar-brand ms-3" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link navbarColor mx-2" href="/"><FontAwesomeIcon className="mx-3" icon={faHouseChimney}/>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbarColor mx-2" href="/"><FontAwesomeIcon className="mx-3" icon={faList}/>List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbarColor mx-2" href="/"><FontAwesomeIcon className="mx-3" icon={faArrowsTurnRight}/>Escalation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbarColor mx-2" href="/"><FontAwesomeIcon className="mx-3" icon={faGears}/>Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbarColor mx-2" href="/"><FontAwesomeIcon className="mx-3" icon={faUser}/>Account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar