import logo from "../assests/logo.png"
export function NavBar(){
    return(
        <nav className="nav-bar">
            <div className="logo"><img src={logo}/></div>
            <div className="search-input"><input type="text" /><button>icon</button></div>
            <div>
            <div className="nav-bar-items">
                <div>Language</div>
                <div>Login</div>
                <div>Your cart</div>
            </div>
            </div>
            
        </nav>
    )
}