import React from 'react';
import s from './Navbar.module.sass'

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.links}>
                <li className={s.link_btn}><a href="/doctors" className={s.link}>Специалисты</a></li>
                <li className={s.link_btn}><a href="/about" className={s.link}>О нас</a></li>
                <li className={s.link_btn}><a href="/reg" className={s.link}>Онлайн регистрация</a></li>
                <li className={s.link_btn}><a href="/services" className={s.link}>Платные услуги</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;