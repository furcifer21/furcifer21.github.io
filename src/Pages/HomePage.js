import { Header } from "../Components/Header"

import widget from '../img/icon/widget.svg'
import phone from '../img/icon/phone.svg'
import message from '../img/icon/message.svg'
import map from '../img/icon/map.svg'

import r1 from '../img/r1.png'
import r2 from '../img/r2.png'
import r3 from '../img/r3.png'
import r4 from '../img/r4.png'

import builder from '../img/builder.png'
import atc1 from '../img/atc1.png'
import atc2 from '../img/atc2.png'

import image6 from '../img/image6.png'
import image7 from '../img/image7.png'
import image8 from '../img/image8.png'
import image9 from '../img/image9.png'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Map, Placemark, YMaps} from "react-yandex-maps";

export const HomePage = (props) => {

    useEffect(() => {
        props.seoCallback({title: 'Главная', description: 'Описание главной'});
    }, []); // Will trigger only once

    return (
        <>
            <section className="top">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            <h1>Главная Строительная Компания</h1>
                            <div className="dscr">Главная строительная компания, входит в Graal.group Специализируется
                                на продаже бетона и чего-то там Доставляем и то се пятое десятое
                            </div>
                            <Link to="/catalog">
                                <button className="btn org">Заказать бетон</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="card">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                        <div className="col p-0">
                            <div className="card">
                                <div className="card-body flex-column d-flex justify-content-center align-items-center">
                                    <p className="card-text">40<span>+</span>
                                    </p>
                                    <small className="text-muted">Happy Clients</small>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="card">
                                <div className="card-body flex-column d-flex justify-content-center align-items-center">
                                    <p className="card-text">540<span>+</span>
                                    </p>
                                    <small className="text-muted">Projects Completed</small>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="card">
                                <div className="card-body flex-column d-flex justify-content-center align-items-center">
                                    <p className="card-text">300
                                    </p>
                                    <small className="text-muted">Dedicated Members</small>
                                </div>
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="card">
                                <div className="card-body flex-column d-flex justify-content-center align-items-center">
                                    <p className="card-text">25<span>+</span>
                                    </p>
                                    <small className="text-muted">Awards Won</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="kupit">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="center form-title wh">Хотите купить бетон?</h2>
                            <div className="dscr center wh">Оставьте свои контакты и наши специалисты свяжутся с вами.</div>
                            <form className="form" action="" method="post" id="form-1">
                                <div className="row-form">
                                    <div>
                                        <input className="text-field w-input" name="name" placeholder="Ваше имя" type="text"/>
                                    </div>
                                    <div>
                                        <input className="phone-input text-field w-input"
                                               name="phone"
                                               placeholder="Ваш телефон"
                                               required="required"
                                               type="tel"
                                        />
                                        <button type="submit" className="btn blk form-btn">Заказать звонок</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="price">
                <h2 className="center cover-bg blk">Актуальный прайс на продукцию ГСК</h2>
                <div className="container-fluid">
                    <div className="row tabel-block">
                        <div className="col-tab price">
                            <div className="price-tabel-block">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active br" id="tab1-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1"
                                                aria-selected="true">Товарный бетон
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link br" id="tab2-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2"
                                                aria-selected="false">Цементные растворы
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link br" id="tab3-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3"
                                                aria-selected="false">Цементные смеси
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link br" id="tab4-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4"
                                                aria-selected="false">Аренда строительной техники
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link br" id="tab5-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab5" type="button" role="tab" aria-controls="tab5"
                                                aria-selected="false">Сыпучие материалы
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                         aria-labelledby="tab1-tab">
                                        <div className="price-top br"> Бетон на гравийном щебне</div>
                                        <table className="table">
                                            <thead className="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>

                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn org cartblock-btn lgx position-relative">
                                            <Link to="/catalog" className="fake-link-block"></Link>
                                            Смотреть весь список
                                        </button>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="price-top br">Цементные растворы</div>
                                        <table className="table">
                                            <thead className="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn org cartblock-btn lgx">Смотреть весь список</button>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <div className="price-top br">Цементные смеси</div>
                                        <table className="table">
                                            <thead className="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn org cartblock-btn lgx">Смотреть весь список</button>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="price-top br"> Аренда строительной техники</div>
                                        <table className="table">
                                            <thead className="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn org cartblock-btn lgx">Смотреть весь список</button>
                                    </div>
                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                        <div className="price-top br">Сыпучие материалы</div>
                                        <table className="table">
                                            <thead className="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="flex" scope="row"><span>М100</span><span> В7,5</span>
                                                </th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td className="no-br">
                                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" className="number-minus">−</a><input
                                                        className="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" className="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn org lgx">Смотреть весь список</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="left-cartblock br">
                                    <div className="cartblock-body">
                                        <div className="cartblock-top">
                                            Ваш заказ
                                        </div>
                                        <form>
                                            <div className="cartblock-item">Общий объём
                                                <input type="text" className="br" value="0 m3"/>
                                                <div>
                                                    <div className="cartblock-item">Стоимость
                                                        <input type="text" className="br lg" value="0 ₽"/>
                                                        <div>
                                                            <div className="cartblock-footer">
                                                                <div>
                                                                    <button className="btn org cartblock-btn lg">В
                                                                        корзину
                                                                    </button>
                                                                    <input type="reset"
                                                                           className="btn  cartblock-btn trash"/>
                                                                </div>

                                                                <button type="button" className="btn org cartblock-btn"
                                                                        data-toggle="modal"
                                                                        data-target="#modal">Оформить в один клик
                                                                </button>
                                                                <button className="btn grey cartblock-btn position-relative">
                                                                    <Link to="/calculate" className="fake-link-block"></Link>
                                                                    Рассчитать доставку
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="calk-banner" className="bg-wh">
                <div className="container">
                    <div className="banner org br">
                        <div className="bannerbody-calk">
                            Рассчёт цены бетона с доставкой на карте
                            <Link to="/calculate">
                                <button className="btn wh">Калькулятор доставки</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="raboti" className="bg-wh">
                <div className="container">
                    <h2>Работы, выполненные ГСК</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                        <a href="#" data-fancybox="gallery" data-caption="">
                            <img src="/public/images/r1.png" className="raboti-img" alt=""/>
                        </a>
                        <a href="img/r2.png" data-fancybox="gallery" data-caption="">
                            <img src={r2} className="raboti-img" alt=""/>
                        </a>
                        <a href="img/r3.png" data-fancybox="gallery" data-caption="">
                            <img src={r3} className="raboti-img" alt=""/>
                        </a>
                        <a href="img/r4.png" data-fancybox="gallery" data-caption="">
                            <img src={r4} className="raboti-img" alt=""/>
                        </a>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                        <div className=""><img src={builder} alt=""/></div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2>О ГСК</h2>
                            <div className="dscr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
                                diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras
                                adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="poraydok" className="bg-wh">
                <div className="container">
                    <div className="row">
                        <h2 className="center">Порядок работы
                        </h2>
                        <div className="dscr center">Процесс реализации вашего заказа от начала и до конца.
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                        <div className="pr-item">
                            <div className="pr-item-title">
                                <span className="pr-item-top">Заявка</span>
                                <span className="pr-item-num">1</span>
                            </div>
                            <div className="pr-item-text">Оставьте заявку любым <br/>удобным для вас способом –<br/> по
                                e-mail, по телефону <br/>или закажите обратный<br/> звонок на сайте.
                            </div>
                        </div>
                        <div className="pr-item">
                            <div className="pr-item-title active">
                                <span className="pr-item-top">Расчёт</span>
                                <span className="pr-item-num">2</span>
                            </div>
                            <div className="pr-item-text">Наши специалисты<br/> рассчитают стоимость<br/> бетона и
                                доставки, сделают<br/> счет или коммерческое<br/> предложение.
                            </div>
                        </div>
                        <div className="pr-item">
                            <div className="pr-item-title">
                                <span className="pr-item-top">Оплата</span>
                                <span className="pr-item-num">3</span>
                            </div>
                            <div className="pr-item-text">Наличный и безналичный<br/> расчет.
                                Предварительная<br/> оплата для юридических лиц.<br/> Скидки и особые условия<br/> для
                                постоянных клиентов.
                            </div>
                        </div>
                        <div className="pr-item">
                            <div className="pr-item-title">
                                <span className="pr-item-top">Производство</span>
                                <span className="pr-item-num">4</span>
                            </div>
                            <div className="pr-item-text">Изготовление бетонной<br/> смеси или раствора<br/> на нашем
                                РБУ, погрузка<br/> в автобетоносмеситель.<br/> Контрольный звонок<br/> от диспетчера.
                            </div>
                        </div>
                        <div className="pr-item">
                            <div className="pr-item-title">
                                <span className="pr-item-top">Доставка и разгрузка</span>
                                <span className="pr-item-num">5</span>
                            </div>
                            <div className="pr-item-text">Доставка производится<br/> миксерами от 7 до 10
                                м3.<br/> Дополнительные условия<br/> поставки обговариваются<br/> заранее.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="articles" className="bg-wh">
                <div className="container">
                    <div className="row">
                        <h2>Актульные статьи</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                        <div className="article">
                            <div className="article-title"> Как определяется класс бетона?</div>
                            <img src={atc1} className="img-article" alt=""/>
                            <div className="article-footer">
                                <div className="article-t">Классы бетона</div>
                                <Link to="/article/slugArticle">
                                    <button className="btn org">Читать полностью</button>
                                </Link>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-title"> Как определяется класс бетона?</div>
                            <img src={atc2} className="img-article" alt=""/>
                            <div className="article-footer">
                                <div className="article-t">Классы бетона</div>
                                <Link to="/article/slugArticle">
                                    <button className="btn org">Читать полностью</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="partners" className="bg-wh">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="title-block">25+<span>Партнёры ГСК</span></div>
                            <div className="dscr">Партнёров Главной Строительной компании. Короткий екст про
                                сотрудничество и совместные проекты
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row row-cols-partners">
                                <div className="item-partners"><img src={image7} className="img-partners" alt=""/></div>
                                <div className="item-partners"><img src={image8} className="img-partners" alt=""/></div>
                                <div className="item-partners"><img src={image6} className="img-partners" alt=""/></div>
                                <div className="item-partners"><img src={image9} className="img-partners" alt=""/></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="contact">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="contact-left">
                            <h2>Контакты</h2>
                            <h3>Собственные бетонные заводы</h3>
                            <div className="map">
                                <YMaps>
                                    <Map defaultState={{ center: [55.848303764148, 37.53532038434928], zoom: 9 }} width="100%" height="355">
                                        <Placemark geometry={[55.848303764148, 37.53532038434928]} />
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                        <div className="contact-right">

                            <div className="contact-title">Наш адрес</div>
                            <div className="contact-row">
                                <img src={map} className="img-icon" alt=""/><span>125438, Москва, ул. Автомоторная 5, стр.3</span>
                            </div>
                            <div className="contact-title">Телефоны для связи</div>
                            <div className="contact-row">
                                <img src={phone} className="img-icon" alt=""/><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                            </div>
                            <div className="contact-row">
                                <img src={phone} className="img-icon" alt=""/><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                            </div>
                            <div className="contact-title">E-mail по всем вопросам</div>
                            <div className="contact-row">
                                <img src={message} className="img-icon" alt=""/><span><a
                                href="mailto:zakaz@site.ru">zakaz@site.ru</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="row col footer">
                        <h2 className="center form-title">Не нашли ответ на вопрос?</h2>
                        <div className="dscr center">Оставьте свои контакты и наши специалисты свяжутся с вами.</div>

                        <form className="form" action="" method="post" id="form-1">
                            <div className="row-form">
                                <div>
                                    <input className="text-field w-input" name="name" placeholder="Ваше имя"
                                           type="text"/>
                                </div>
                                <div>
                                    <input className="phone-input text-field w-input" name="phone"
                                           placeholder="Ваш телефон" required="required" type="tel"/>
                                    <button type="submit" className="btn blk form-btn">Заказать звонок</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </footer>
        </>
    )
}