import logo from '../images/logo.svg'
import menuIcon from '../images/icon-hamburger.svg'
import { useState } from 'react'
const Header=()=>{
    const [navOpen, setNavOpen] = useState(false)
    return <header>
            <nav>
                <div className="nav__group">
                    <img src={logo} alt="" className="logo" />
                    <div className={`nav-list__wrapper ${navOpen===false?'hide':''}`}>
                        <div className="nav-list">
                            <a href="" className="nav-link">Features</a>
                            <a href="" className="nav-link">Pricing</a>
                            <a href="" className="nav-link">Resources</a>
                        </div>
                        <hr className="divider" />
                        <div className="nav-list">
                            <a href="" className="nav-link">Login</a>
                            <button className='btn btn-primary'>Sign Up</button>
                        </div>
                    </div>
                </div>
                
                <div className="nav-menu__wrapper">
                    <button className='menu'onClick={()=>{
                        setNavOpen(!navOpen)
                    }}><img src={menuIcon} alt="" /></button>
                </div>
            </nav>
        </header>
}

export default Header