import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/CDI.jpeg"

const Header = ({location})=> {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    if(isRootPath){
        return (
            <div className="d-flex flex-row align-items-center">
                <img className="logo" src={logo} alt="Logo" />
                <h1 className="main-heading">
                    <Link to="/">El pensadero de CDI</Link>
                </h1>
            </div>
        )
    }
    return (
        <Link className="header-link-home" to="/">
            El pensadero de CDI
        </Link>
    )

}

export default Header;