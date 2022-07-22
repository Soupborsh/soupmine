import { Link } from "react-router-dom";

function NavList() {
    return (
        <div>
            <Link className="nav-link" to="/">
                О СЕРВЕРЕ
            </Link>
            <Link className="nav-link" to="/faq">
                FAQ
            </Link>
            <Link className="nav-link" to="/donate">
                ДОНАТ
            </Link>
            <Link className="nav-link" to="/support">
                ТЕХ. ПОДДЕРЖКА
            </Link>
        </div>
    );
};

export default NavList;