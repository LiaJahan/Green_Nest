import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-xl bg-green-300 text-green-800 rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy Policy</a>

            </nav>
            <nav>
                <div className="grid grid-flow-col gap-8 text-green-800 text-4xl">
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-pinterest"></i>
                </div>
            </nav>

            <aside>
                <p>© {new Date().getFullYear()} Green Nest. All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;