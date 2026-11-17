import './Header.css'

const Header = () => {
    const navStyle = {
        textDecoration : 'none',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
    }

    return (
        <header className="header">
            <div className="logo">Fathima Dhilfa</div>

            <nav className='nav'>
                <a href="" style={navStyle}>Home</a>
                <a href="#aboutme" style={navStyle}>About</a>
                <a href="" style={navStyle}>Projects</a>
                <a href="#contact" style={navStyle}>Contact</a>
            </nav>
        </header>
    )
}

export default Header;