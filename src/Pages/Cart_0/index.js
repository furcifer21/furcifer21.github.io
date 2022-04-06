import { Header } from "../../Components/Header"

import phone from '../../img/icon/phone.svg'
import message from '../../img/icon/message.svg'
import map from '../../img/icon/map.svg'
import basket from '../../img/icon/basket_light.svg'

export const Cart_0 = () => {

  return (
    <html lang="ru">
    <body>
        <Header/>
        <section>
            <div class="container breadcrumb">
                <div class="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Корзина</a></li>
    
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Корзина</h1>
                    </div>
                </div>
                <hr/>
    
            </div>
    
        </section>
        <section class="catalog-body">
            <div class="container cart">
    
    
    
    
                <img class="cart-big" src={basket}/>
                <div class="tittle_body_cart">Ваша корзина пуста
                    <span>Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”</span>
                </div>
    
    
    
                <div class="row cart-row-bottom">
                    <div>
                        <button class="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">
                            Заказать звонок
                        </button>
    
                        <button class="btn org " onClick={() => window.location='/catalog'}>Перейти в каталог</button>
    
                    </div>
                </div>
          <div class="contact-cart">
    
                       
                        <div class="contact-row">
                            <img src={phone} class="img-icon" alt="" /><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div class="contact-row">
                            <button class="btn grey call">
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
    
    
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="slick/slick.js" charset="utf-8"></script>
        <script src="dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/main.js"></script>
        <script src="dist/jquery.fancybox.min.js"></script>
        <script src="dist/js/popper.min.js"></script>
    </body>
    
    </html>
  )
}