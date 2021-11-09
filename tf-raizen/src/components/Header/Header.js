import {NavLink} from 'react-router-dom'
import logo from '../../images/logo-csc.svg'
import './Header.scss'

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                <NavLink className="links" to="/" exact>
                    <img className="logo-image" src={logo}/>
                </NavLink>
                </div>
                <div className="links-container">
                    <NavLink className="links" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink className="links" to="/mytickets" exact>
                        Meus Tickets
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default Header
