import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav">
                <Link to="/" className="nav_logo">
                    QUIZ-ME
                </Link>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link to="/" className="nav_link">
                                Home
                            </Link>
                        </li>

                        {/* <li className="nav_item dropdown">
                            <Link to="/account" className="nav_link">
                                Account
                            </Link>
                        </li> */}

                        <li className="nav_item">
                            <Link to="/quiz" className="nav_link">
                                Quiz Generation
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}