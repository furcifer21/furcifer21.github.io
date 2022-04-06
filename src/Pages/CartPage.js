import { Header } from "../Components/Header"

import closeRing from '../img/icon/close_ring.svg'
import widget from '../img/icon/widget.svg'
import phone from '../img/icon/phone.svg'
import message from '../img/icon/message.svg'
import map from '../img/icon/map.svg'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getProductCategories} from "../Redux/nameStore/action";

export const CartPage = (props) => {

    useEffect(() => {
        props.seoCallback({title: 'Корзина', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/cart">Корзина</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Корзина</h1>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container container-cart">
                    <div className="row cart-row">
                        <div>
                            <div className="cart_item-row br bg-wh">
                                <div className="cart_item-row-name">В корзине 2 товара</div>
                                <div className="cart_item-row-clean">Очистить<img src={closeRing} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <table className="table cart-m">
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
                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                <td>3 310 ₽</td>
                                <td className="no-br">
                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                        <a href="#" className="number-minus">−</a><input className="number-text" type="text"
                                                                                         name="count" value="0"/>

                                        <a href="#" className="number-plus">+</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row cart_produkt">
                        <div>
                            <div className="product_item-row br">
                                <div className="product_item-row-name">Кладочная сместь М50</div>
                                <div className="product_item-row-price">2 420 ₽/м3</div>
                                <div className="number" data-step="1" data-min="1" data-max="100">
                                    <a href="#" className="number-minus">−</a><input className="number-text" type="text"
                                                                                     name="count" value="0"/>
                                    <a href="#" className="number-plus">+</a>
                                </div>
                                <div className="price">2 420 ₽</div>
                                <img src={closeRing} alt="cart-del"/>
                            </div>
                        </div>
                    </div>
                    <div className="row cart_produkt">
                        <div>
                            <div className="product_item-row br">
                                <div className="product_item-row-name">Бетон М100 В7,5 F100 W4 (Гравий)</div>
                                <div className="product_item-row-price">3 310 ₽/м3</div>
                                <div className="number" data-step="1" data-min="1" data-max="100">
                                    <a href="#" className="number-minus">−</a><input className="number-text" type="text"
                                                                                     name="count" value="0"/>
                                    <a href="#" className="number-plus">+</a>
                                </div>
                                <div className="price">3 310 ₽</div>
                                <img src={closeRing} alt="cart-del"/>
                            </div>
                        </div>
                    </div>
                    <form className="itog">
                        <div className="row cart-row ">
                            <div>
                                <div className="cart_item-row br bg-wh">
                                    <input type="text" className="cart_item text-field br"
                                           placeholder="Введите промокод на скидку"/>
                                    <div className="cart_item-row-itog">ИТОГО:<span>5 730 ₽</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="row cart-row-bottom">
                            <div>
                                <button className="btn grey call" data-toggle="modal" data-target="#modal">
                                    Заказать звонок
                                </button>
                                <button type="button" className="btn grey" data-toggle="modal"
                                        data-target="#modal">Быстрый заказ
                                </button>
                                <button className="btn org complete position-relative">
                                    <Link to="/checkout" className="fake-link-block"></Link>
                                    Оформить заказ
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="contact-cart">
                        <div className="contact-row">
                            <img src={phone} className="img-icon" alt=""/><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div className="contact-row">
                            <button className="btn grey call" data-toggle="modal" data-target="#modal">
                                Заказать звонок
                            </button>
                        </div>
                        <div className="contact-row">
                            <img src={message} className="img-icon" alt=""/><span><a
                            href="mailto:novikov@gmail.com">novikov@gmail.com</a></span>
                        </div>
                        <div className="contact-row">
                            <img src={map} className="img-icon" alt=""/><span className="adr">125438, Москва, ул. Автомоторная 5, стр.3</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}