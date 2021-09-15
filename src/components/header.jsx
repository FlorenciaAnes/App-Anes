import Nav from "./Nav"

const Header = ({tittle}) => {
    return (
        <header>
            <h1 className="brand-tittle">{tittle}</h1>
            <Nav/>
        </header>
    )
}

export default Header