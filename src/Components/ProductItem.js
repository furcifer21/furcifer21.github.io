import product1 from '../img/product/1.png'
import {Link} from "react-router-dom";

export const ProductItem = ({item}) => {
    return (
        <div className="product_item">
            <div className="product_img">
                <Link to={`/product${item.link}`}>
                    <img src={product1} alt="" />
                </Link>
                <div className="top_img">
                    <div className="prod_label new"></div>
                </div>
                <div className="bottom_img">
                    <div className="prod_icon favorite"></div>
                    <div className="prod_icon info"></div>
                </div>
            </div>
            <div className="inf">
                <div className="cat">Товарный бетон</div>
                <div className="tittle_product">{item.name}</div>
                <div className="prod_row">
                    <div className="price">{item.price} ₽<span>/м3</span></div>
                    <div className="rating-mini">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span></span>
                    </div>
                </div>
                <div className="prod_row">
                    <div className="number" data-step="1" data-min="1" data-max="100">
                        <a href="#" className="number-minus">−</a><input className="number-text" type="text" name="count" value="0"/>
                        <a href="#" className="number-plus">+</a>
                    </div>
                    <button className="btn in_cart">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}