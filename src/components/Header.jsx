import logo from '../images/logo.svg'
import menuIcon from '../images/icon-hamburger.svg'
import { useState } from 'react'
const Header=()=>{
    const [navOpen, setNavOpen] = useState(false)
    return <header>
            <nav>
                <div className="nav__group">
                    <div className="logo__menu">
                        <a href="#home" aria-label="Company Logo" className="logo__wrapper"><img src={logo} alt="shortly logo" className="logo" /></a> 
                        <div className="nav-menu__wrapper">
                            <button className='menu' aria-label='menu' aria-expanded={navOpen} onClick={()=>{
                            setNavOpen(!navOpen)
                            }}><img src={menuIcon} alt="" /></button>
                        </div>
                    </div>
                    
                    <div className={`nav-list__wrapper ${navOpen===false?'hide':''}`}>
                        <ul className="nav-list">
                            <li><a href="#features" className="nav-link">Features</a></li>
                            <li><a href="#pricing" className="nav-link">Pricing</a></li>
                            <li><a href="#resources" className="nav-link">Resources</a></li>
                        </ul>
                        <hr className="divider" />
                        <ul className="nav-list">
                            <li><a href="#login" className="nav-link">Login</a></li>
                            <li><button className='btn btn-primary'>Sign Up</button></li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </header>
}

export default Header