import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-description">
                Embrace the power of our app and unlock the secrets of the
                universe, one quiz at a time. As I always say, "Yesterday is
                history, tomorrow is a mystery, but today is a gift. That is why
                it is called the present."
            </p>
            <div className="footer-link-container">
                <h2 className="footer-link-container_title">Links</h2>
                <Link to="/" className="footer-link">
                    Home
                </Link>
                <Link to="/quiz" className="footer-link">
                    Quiz Generator
                </Link>
            </div>
        </footer>
    );
}