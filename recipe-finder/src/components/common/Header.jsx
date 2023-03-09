


const Header = (props) => {

    return (
        <div className={props.bgClass}>
            <div className="text-content">
                <h1 className="header-title">{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}

export default Header;