import logo from '../img/logo.svg'
import basket from '../img/icon/basket_light.svg'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";

export const CheckoutPage = (props) => {

    useEffect(() => {
        props.seoCallback({title: 'Оформлние заказа', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/checkout">Оформление заказа</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Оформление заказа</h1>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="zakaz-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-content">
                            <div className="row-form">
                                <div className="zakaz-block tip-p br">
                                    <span className="label-zakaz">Тип покупателя</span>
                                    <input type="radio" checked id="cb1" name="tip-p"/> <label htmlFor="cb1">Физическое
                                    лицо</label>
                                    <input type="radio" id="cb2" name="tip-p"/> <label htmlFor="cb2">Юридическое
                                    лицо</label>
                                </div>
                                <div className="zakaz-block oplata br">
                                    <span className="label-zakaz">Способ оплаты</span>
                                    <div className="zakaz-block-row">
                                        <div>
                                            <input type="radio" checked id="cb3" name="oplata"/> <label htmlFor="cb3">Наличными
                                            или картой водителю</label>
                                            <input type="radio" id="cb4" name="oplata"/> <label
                                            htmlFor="cb4">Счёт</label>
                                        </div>
                                        <div><span className="txt-zakaz">
                                            Оплата производится наличными деньгами или банковской картой, в момент получения заказа. Подтверждением вашей оплаты является фискальный кассовый чек, вручаемый во время получения и оплаты заказа.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-form">
                                <div className="zakaz-block br">
                                    <div className="zakaz-block-row">
                                        <div className="zakaz-block-col"><span
                                            className="label-zakaz">Рассчёт доставки</span>
                                            <div className="col-form">
                                                <span className="label-zakaz">Адрес доставки:</span>
                                                <input className="text-field w-input br" name="adres" maxLength="256"
                                                       type="text"/>
                                            </div>
                                            <div className="col-form">
                                                <span className="label-zakaz">Расстояние (км):</span>
                                                <input className="text-field w-input br" name="rasst" maxLength="256"
                                                       placeholder="Введите расстояние" type="text"/>
                                            </div>
                                            <div className="col-form itog-dostavka">
                                                <span className="label-zakaz ">
                                                    <b>Стоимость доставки:</b>
                                                    <span>4 000 ₽</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="map zakaz">
                                        <YMaps>
                                            <Map defaultState={{ center: [55.74729850208165, 37.53905755617727], zoom: 9 }} width="100%" height="355">
                                                <Placemark geometry={[55.74729850208165, 37.53905755617727]} />
                                            </Map>
                                        </YMaps></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-form">
                                <div className="zakaz-block br pokupatel">
                                    <span className="label-zakaz">Покупатель</span>
                                    <div className="zakaz-block-col">
                                        <div className="col-form">
                                            <span className="label-zakaz">Имя<span className="required">*</span></span>
                                            <input className="text-field w-input br" required name="name"
                                                   maxLength="256" type="text"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz"> E-mail<span
                                                className="required">*</span></span>
                                            <input className="text-field w-input br" required name="email"
                                                   maxLength="256" type="email"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz"> Телефон<span
                                                className="required">*</span></span>
                                            <input className="text-field w-input br" required name="phone"
                                                   maxLength="256" type="tel"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz">Дата и время доставки</span>
                                            <input className="text-field w-input br" name="date" maxLength="256"
                                                   type="date"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz">Город</span>
                                            <input className="text-field w-input br" name="gorod" maxLength="256"
                                                   type="text"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz">Адрес доставки</span>
                                            <input className="text-field w-input br" name="adres" maxLength="256"
                                                   type="text"/>
                                        </div>
                                        <div className="col-form">
                                            <span className="label-zakaz">Комментарии к заказу</span>
                                            <textarea className="text-field w-input br" name="comment"
                                                      maxLength="256"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-form">
                                <div className="zakaz-block br p-0 zakaz-cart">
                                    <span className="label-zakaz">Товары в корзине</span>
                                    <table className="table cart-m">
                                        <thead className="br">
                                        <tr>
                                            <th scope="col">Марка/Класс</th>
                                            <th scope="col">Наименование</th>
                                            <th scope="col">Цена с НДС</th>
                                            <th scope="col">Количество</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                            <td>3 310 ₽</td>
                                            <td className="no-br">
                                                1 м3
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart_produkt name-row">
                                        <div>
                                            <div className="product_item-row">
                                                <div className="cart-col">Наименование</div>
                                                <div className="cart-col">Цена</div>
                                                <div className="cart-col">Кол-во</div>
                                                <div className="cart-col">Стоимость</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart_produkt">
                                        <div>
                                            <div className="product_item-row br">
                                                <div className="product_item-row-name cart-col">Кладочная сместь М50
                                                </div>
                                                <div className="product_item-row-price cart-col">2 420 ₽/м3</div>
                                                <div className="kol-vo cart-col">
                                                    1 м3
                                                </div>
                                                <div className="price cart-col">2 420 ₽</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart_produkt">
                                        <div>
                                            <div className="product_item-row br">
                                                <div className="product_item-row-name cart-col">Бетон М100 В7,5 F100 W4
                                                    (Гравий)
                                                </div>
                                                <div className="product_item-row-price cart-col">3 310 ₽/м3</div>
                                                <div className="kol-vo cart-col">
                                                    1 м3
                                                </div>
                                                <div className="price cart-col">3 310 ₽</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="itog">
                                <div className="row cart-row ">
                                    <div>
                                        <div className="cart_item-row br bg-wh justify-content-end">
                                            {/*<input type="text" className="cart_item text-field br"
                                                   placeholder="Введите промокод на скидку"/>*/}
                                            <div className="cart_item-row-itog">ИТОГО:<span>5 730 ₽</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row cart-row-bottom">
                                    <div>
                                        <input type="checkbox" checked id="cb10"/>
                                        <label htmlFor="cb10">
                                            Я согласен на <a href="#">обработку персональных данных</a>
                                        </label>
                                        <button className="btn org complete">Оформить заказ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}