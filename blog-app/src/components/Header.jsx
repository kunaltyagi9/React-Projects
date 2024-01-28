

const Header = () => {
    const logo = "https://1000logos.net/wp-content/uploads/2022/10/Pringles-logo.png";

    return (
        <div className="flex p-2">
            <img src={logo} alt="logo" width={80} className="flex items-start" />
        </div>
    )
}

export default Header;