import { Mainlayout } from "../../Components/MainLayout"
import {Header} from '../../Components/Header'
import './Checkout.scss'

const obj = {
  name: 'Кладочная сместь М50',
  cost: '2 420 ₽/м3 ',
  count: '1 м3',
  total: '2 420 ₽'
}

export const Checkout = () => {

  const Changer = ({title, first, second, isSmall}) => {
    const style = isSmall ? "checkout_smallChanger" : "checkout_bigChanger"
    return (
      <div className={style}>
        <div className="checkout_changer_title">{title}</div>
        <div className="checkout_changer_container">
        <div>
        <div>
          <div className="checkout_changer_checkbox"></div>
          <div className="checkout_changer_text">{first}</div>
        </div>
        <div>
          <div className="checkout_changer_checkbox"></div>
          <div className="checkout_changer_text">{second}</div>
        </div>
        </div>
        {!isSmall && 
        <div className="checkout_changer_text2">
          Оплата производится наличными деньгами или банковской картой, в момент получения заказа. Подтверждением вашей оплаты является фискальный кассовый чек, вручаемый во время получения  и оплаты заказа.
        </div>
        }
        </div>
      </div>
    )
  }

  const DeliveryCalculation = () => {
    return (
      <div className="deliveryCalculation">
        <div className="deliveryCalculation_title">Рассчёт доставки</div>
        <div className="deliveryCalculation_smallTitle">Адрес доставки:</div>
        <input className="deliveryCalculation_input"/>
        <div className="deliveryCalculation_smallTitle">Расстояние (км):</div>
        <input className="deliveryCalculation_input"/>
        <div className="deliveryCalculation_text">Стоимость доставки:</div>
      </div>
    )
  }

  const Bayer = () => {
    return (
      <div className="bayer">
        <div className="bayer_title">Покупатель</div>
        <div className="bayer_text">Имя</div>
        <input className="bayer_input"/>
        <div className="bayer_text">E-mail</div>
        <input className="bayer_input"/>
        <div className="deliveryCalculation_text"> Телефон</div>
        <input className="bayer_input"/>
        <div className="bayer_text">Дата и время доставки</div>
        <input className="bayer_input"/>
        <div className="bayer_text">Город</div>
        <input className="bayer_input"/>
        <div className="bayer_text"> Адрес доставки</div>
        <input className="bayer_input"/>
        <div className="bayer_text"> Комментарии к заказу</div>
        <input className="bayer_bigInput"/>
      </div>
    )
  }

  const InCart = () => {
    return (
      <div className='inCart'>
        <div className="inCart_title">Товары в корзине</div>
        <div className="inCart_heder">
          <div className="inCart_heder_text">Наименование</div>
          <div className="inCart_heder_text">цена</div>
          <div className="inCart_heder_text">Кол-во</div>
          <div className="inCart_heder_text">Стоимость</div>
        </div>

      </div>
    )
  }

  const ItemInCart = () => {
    return (
      <div className="itemInCart_container">
        <div className="itemInCart_text">{obj.name}</div>
        <div className="itemInCart_text">{obj.cost}</div>
        <div className="itemInCart_text">{obj.count}</div>
        <div className="itemInCart_text">{obj.total}</div>
      </div>
    )
  }

  const TotalCount = () => {
    return (
      <div className="totalCount_container">
        <div className="totalCount_container_promo">Введите промокод на скидку</div>
        <div className="totalCount_container_total">
          <div>ИТОГО:</div>
          <div>2420</div>
        </div>
      </div>
    )
  }

  return (
    <Mainlayout>
      <div className="checkout">
        <Header path='Оформление заказа' title='Оформление заказа'/>
        <div className="checkout_changers_container">
          <Changer
            title='Тип покупателя'
            first='Физическое лицо'
            second='Юридическое лицо'
            isSmall={true}
           />
            <Changer
            title='Способ оплаты'
            first='Наличными или картой водителю'
            second='Счёт'
            isSmall={false}
           />
        </div>
        <DeliveryCalculation/>
        <Bayer/>
        <InCart/>
        <ItemInCart/>
        <TotalCount/>

      </div>
    </Mainlayout>
  )
}