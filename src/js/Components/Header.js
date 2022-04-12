import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import $ from "jquery";

export const Header = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.hash !== '') {
            window.scrollTo({top: ($(location.hash).offset().top - 20), behavior: 'smooth'});
        }
    }, [location.hash])

    return (
        <header className={`${location.pathname !== '/' ? 'content-head' : '' }`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Каталог</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">Статьи</Link>
                            </li>
                            <li className="nav-item">
                                {location.pathname == '/' ?
                                    <a className="nav-link " href="#contact">Контакты</a>
                                :
                                    <Link className="nav-link " to="/#contact">Контакты</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/articles/about-company">О Нас</Link>
                            </li>
                        </ul>
                        <div className="contact-cart">
                            <div className="contact-row">
                                <img src="/images/icon/phone.svg" className="img-icon" alt=""/><span><a
                                href="tel:+74993777770">+7 (499) 377-77-70 </a></span>
                            </div>
                            <div className="contact-row">
                                <button className="btn grey call" data-toggle="modal" data-target="#modal">
                                    Заказать звонок
                                </button>
                            </div>
                            <div className="contact-row">
                                <img src="/images/icon/Message.svg" className="img-icon" alt=""/><span><a
                                href="mailto:info@glavsk.ru">info@glavsk.ru</a></span>
                            </div>
                            <div className="contact-row">
                                <img src="/images/icon/map.svg" className="img-icon" alt=""/><span className="adr">Пресненская наб., 8, стр. 1, Москва, Россия</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="top-rh">
                    <button className="btn sidb d-inline-block d-lg-none" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="sr-only"></span>
                    </button>
                    <Link to="/" className="d-flex align-items-center">
                        <img className="logo" src="/images/logo.svg" alt="logo"/>
                    </Link>
                    <div className="d-flex align-items-center">
                        <a href="tel:+74993777770" className="header-phone d-flex align-items-center justify-content-center">
                            <img src="/images/icon/phone.svg" width="24" alt="phone"/>
                        </a>
                        <a href="tel:+74993777770" className="d-none d-lg-inline text-decoration-none" style={{color: "#18191F", marginLeft: "4px", fontWeight: 500}}>+7(499)377-77-70 </a>
                        {/*<Link to="/cart" className="d-flex align-items-center basket">
                            <img className="" src={basket} alt=""/>
                        </Link>*/}
                    </div>
                </div>
            </div>
        </header>
    )
}