
import {Link} from "react-router-dom";
import React from "react";

export const ProductItem = ({item}) => {
    return (
        <div className="product_item">
            <div className="product_img">
                <Link to={`/product/product-${item.id}`}>
                    <img src={item.urlIMG} alt="product img" />
                </Link>
                {/*<div className="top_img">
                    <div className="prod_label new"></div>
                </div>*/}
                {/*<div className="bottom_img">
                    <div className="prod_icon favorite"></div>
                    <div className="prod_icon info"></div>
                </div>*/}
            </div>
            <div className="inf">
                {/*<div className="cat position-relative">
                    <Link to={`/catalog/#`} className="fake-link-block"></Link>
                    Товарный бетон
                </div>*/}
                <div className="tittle_product position-relative mb-2">
                    <Link to={`/product/product-${item.id}`} className="fake-link-block"></Link>
                    {item.name}
                </div>
                <div className="prod_row">
                    <div className="price">{item.price} ₽<span>/м3</span></div>
                    {/*<div className="rating-mini">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span></span>
                    </div>*/}
                </div>
                <div className="prod_row">
                    {/*<div className="number" data-step="1" data-min="1" data-max="100">
                        <a href="#" className="number-minus">−</a><input className="number-text" type="text" name="count" value="0"/>
                        <a href="#" className="number-plus">+</a>
                    </div>*/}
                    <button className="btn in_cart" data-toggle="modal" data-target="#modal">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    )
}