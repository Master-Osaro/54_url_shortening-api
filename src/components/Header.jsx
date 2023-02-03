import logo from '../images/logo.svg'
const Header=()=>{
    return <header>
            <nav>
                <div className="nav__group">
                    <img src={logo} alt="" className="logo" />
                    <div className="nav-list">
                        <a href="" className="nav-link">Features</a>
                        <a href="" className="nav-link">Pricing</a>
                        <a href="" className="nav-link">Resources</a>
                    </div>
                </div>
                
                <div className="nav__btns">
                    <a href="" className="nav-link">Login</a>
                    <button className='btn btn-primary'>signup</button>
                    <button className='menu'>Menu</button>
                </div>
            </nav>
        </header>
}

export default Header