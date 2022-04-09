import {Link} from "react-router-dom";
import phone from '../img/icon/phone.svg'
import message from '../img/icon/message.svg'
import map from '../img/icon/map.svg'
import {CategoryMenu} from "../Components/CategoryMenu";
import {useState} from "react";
import {FAKE_PRODUCT_DATA} from "../constant";

export const CalculatedPage = () => {
    const [categoryData, setCategoryData] = useState(FAKE_PRODUCT_DATA);

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Каталог</a></li>
                                <li className="breadcrumb-item"><a href="#">Рассчитать стоимость доставки</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Рассчет стоимости бетона с доставкой</h1>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="calk-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <CategoryMenu categories={categoryData.allCategories} pageSlug={'/calculate'}/>
                        <div className="col-content">
                            <div className="form-wrapper w-form calk">
                                <form className="form" action="" method="post" id="form-3">
                                    <div className="row-form">
                                        <span className="label-calk">Адрес доставки:</span>
                                        <input className="text-field w-input br" name="adres" maxLength="256"
                                               placeholder="Ермолино" type="text"/>
                                    </div>
                                    <div className="row-form">
                                        <span className="label-calk">Марка бетона:</span>
                                        <input className="text-field w-input br" name="marka" maxLength="256"
                                               placeholder="М200 В15" type="text"/>
                                    </div>
                                    <div className="row-form">
                                        <span className="label-calk">Объём (м3):</span>
                                        <input className="text-field w-input br" name="ob" maxLength="256"
                                               placeholder="Введите объём" type="text"/>
                                    </div>
                                    <div className="row-form">
                                        <span className="label-calk">Расстояние (км):</span>
                                        <input className="text-field w-input br" name="rasst" maxLength="256"
                                               placeholder="Введите расстояние" type="text"/>
                                    </div>
                                    <div className="row-form col-2">
                                        <button type="submit" className="btn org  main-btn form-btn">Рассчитать</button>
                                        <span className="txt-calk"> Все рассчеты представлены в ознакомительных целях. Для точного рассчёта рекомендуем связаться с нашими специалистами по телефону <br/><a
                                            href="tel:8 (495) 502 2030"><b>8 (495) 502 2030</b></a></span>
                                    </div>
                                </form>
                                <hr/>
                                <div className="row cart-row itog-calk">
                                    <div>
                                        <div className="cart_item-row ">

                                            <div className="cart_item-row-itog dost">Стоимость с
                                                доставкой:<span>5 730 ₽</span></div>
                                            <div className="cart_item-row-itog dost-n">Стоимость без доставки:<span>5 730 ₽</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row cart-row-bottom">
                                    <div>

                                        <button type="button" className="btn grey call" data-toggle="modal"
                                                data-target="#modal">Заказать звонок
                                        </button>
                                        <button className="btn org complete position-relative">
                                            <Link to="/checkout" className="fake-link-block"></Link>
                                            Оформить заказ
                                        </button>
                                        <button type="button" className="btn grey d-lg-none" data-bs-toggle="modal"
                                                data-bs-target="#modal">Быстрый заказ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-cart">


                        <div className="contact-row">
                            <img src={phone} className="img-icon" alt=""/><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div className="contact-row">
                            <button className="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">
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