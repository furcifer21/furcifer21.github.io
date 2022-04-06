import { Header } from "../Components/Header"

import widget from '../img/icon/widget.svg'
import phone from '../img/icon/phone.svg'
import message from '../img/icon/message.svg'
import map from '../img/icon/map.svg'

export const CalculatedPage = () => {

  return (
    <html lang="ru">
    <body>
        <Header/>
        <section>
            <div class="container breadcrumb">
                <div class="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Каталог</a></li>
                            <li class="breadcrumb-item"><a href="#">Рассчитать стоимость доставки</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Рассчет стоимости бетона с доставкой</h1>
                    </div>
                </div>
                <hr/>
    
            </div>
    
        </section>
        <section class="calk-body">
            <div class="container">
    
                <div class="row justify-content-between">
                    <div class="col-sidbar-left">
                        <div class="sidbar-left-name"><img src={widget} alt="" />Каталог</div>
                        <div class="sidbar-left-item  br">Товарный бетон</div>
                        <div class="sidbar-left-item br">Цементные растворы</div>
                        <div class="sidbar-left-item br">Цементные смеси</div>
                        <div class="sidbar-left-item br">Аренда техники</div>
                        <div class="sidbar-left-item br">Сыпучие материалы</div>
                        <div class="sidbar-left-item br btn-calk active">Рассчитать стоимость доставки</div>
                    </div>
                    <div class="col-content">
    
    
                        <div class="form-wrapper w-form calk">
                            <form class="form" action="" method="post" id="form-3">
                                <div class="row-form">
                                    <span class="label-calk">Адрес доставки:</span>
                                    <input class="text-field w-input br" name="adres" maxlength="256" placeholder="Ермолино" type="text"/>
                                </div>
                                <div class="row-form">
                                    <span class="label-calk">Марка бетона:</span>
                                    <input class="text-field w-input br" name="marka" maxlength="256" placeholder="М200 В15" type="text"/>
                                </div>
                                <div class="row-form">
                                    <span class="label-calk">Объём (м3):</span>
                                    <input class="text-field w-input br" name="ob" maxlength="256" placeholder="Введите объём" type="text"/>
                                </div>
                                <div class="row-form">
                                    <span class="label-calk">Расстояние (км):</span>
                                    <input class="text-field w-input br" name="rasst" maxlength="256" placeholder="Введите расстояние" type="text"/>
                                </div>
                                <div class="row-form col-2">
                                    <button type="submit" class="btn org  main-btn form-btn">Рассчитать</button> <span class="txt-calk"> Все рассчеты представлены в ознакомительных целях. Для точного рассчёта рекомендуем связаться с нашими специалистами по телефону <br/><a href="tel:8 (495) 502 2030"><b>8 (495) 502 2030</b></a></span>
                                </div>
                            </form>
                            <hr/>
                            <div class="row cart-row itog-calk">
                                <div>
                                    <div class="cart_item-row ">
    
                                        <div class="cart_item-row-itog dost">Стоимость с доставкой:<span>5 730 ₽</span></div>
                                        <div class="cart_item-row-itog dost-n">Стоимость без доставки:<span>5 730 ₽</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row cart-row-bottom">
                                <div>
    
                                    <button type="button" class="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">Заказать звонок</button>
                                    <button class="btn org complete">Оформить заказ</button>
    <button type="button" class="btn grey d-lg-none" data-bs-toggle="modal" data-bs-target="#modal">Быстрый заказ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-cart">
    
                       
                        <div class="contact-row">
                            <img src={phone} class="img-icon" alt="" /><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div class="contact-row">
                            <button class="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">
                                Заказать звонок
                            </button>
                        </div>
                        
                        <div class="contact-row">
                            <img src={message} class="img-icon" alt="" /><span><a href="mailto:novikov@gmail.com">novikov@gmail.com</a></span>
                        </div>
                        <div class="contact-row">
                            <img src={map} class="img-icon" alt="" /><span class="adr">125438, Москва, ул. Автомоторная 5, стр.3</span>
                        </div>
                    </div>
            </div>
        </section>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
    
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
                    <div class="modal-title">Купить в один клик</div>
                    <div class="modal-descriptor">Заполните форму, и наш специалист свяжется с вами в ближайшее время</div>
                    <div class="form-wrapper w-form">
                        <form class="form" action="" method="post" id="form-2">
                            <input class="text-field w-input" data-name="Имя" name="name" maxlength="256" placeholder="Имя" type="text"/>
                            <input class="phone-input text-field w-input" name="phone" maxlength="256" placeholder="Телефон" required="required" type="tel"/>
                            <input class="text-field w-input" name="email" maxlength="256" placeholder="E-mail*" type="text"/>
                            <input type="checkbox" checked id="cb1"/> <label for="cb1">Я согласен на <a href="#">обработку персональных данных</a></label>
                            <button type="submit" class="btn org  main-btn form-btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>
  )
}