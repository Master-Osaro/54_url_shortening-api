import logo from '../images/logo.svg'
const Header=()=>{
    return <header>
            <nav>
                <img src={logo} alt="" className="logo" />
                <div className="nav-list">
                    <a href="" className="nav-link">Features</a>
                    <a href="" className="nav-link">Pricing</a>
                    <a href="" className="nav-link">Resources</a>
                </div>
                <div className="nav__btns">
                    <button>login</button>
                    <button>signup</button>
                </div>
            </nav>
        </header>
}

export default Header