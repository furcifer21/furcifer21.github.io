import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {API_URL, REAL_FAKE_DATA} from "../constant";
import {CategoryMenu} from "../Components/CategoryMenu";
import axios from "axios";

export const ProductPage = (props) => {
    const location = useLocation();
    const [categoryMenu, setCategoryMenu] = useState('');
    const [productData, setProductData] = useState('');
    const fakeProductData = [
        {
            "id": 1,
            "name": "Бетон М100 B7,5 F100 W4 (Гравий)",
            "price": 3300,
            "contents": {
                "Наполнитель": "Гравий",
                "Подвижность": "П4",
                "Класс бетона": "В7,5",
                "Плотность (кг/м^3)": "2265",
                "Морозостойкость, F": "F100",
                "Средняя прочность": "125",
                "Водонепроницаемость": "W4"
            },
            "urlIMG": "https://imgur.com/6vlKMyZ",
            "description": ""
        }
    ]

    useEffect(() => {
        props.seoCallback({title: 'Товар', description: 'Описание каталога'});
        const productId = decodeURI(location.pathname.split('-')[1]);

        axios.get(`${API_URL}/product/getAllProduct`)
            .then(res => {
                setCategoryMenu(res.data)
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`${API_URL}/product/getProductById${productId}`)
            .then(res => {
                setProductData(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        productData !== '' &&
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/catalog">Каталог</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{productData.name}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>{productData.name}</h1>
                            {/*<div className="rating-mini">
                                <span className="active"></span>
                                <span className="active"></span>
                                <span className="active"></span>
                                <span></span>
                                <span></span>
                            </div>*/}
                        </div>
                       {/* <div>
                            <div className="prod_icon favorite"></div>
                        </div>*/}
                    </div>
                    <hr className="none"/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <CategoryMenu categories={categoryMenu} pageSlug={''}/>
                        <div className="col-content">
                            <div className="row catalog_produkt">
                                <div>
                                    <div className="product_item-row br bg-wh">
                                        <div className="product_item-row-name">{productData.name}</div>
                                        <div className="product_item-row-price">{productData.price} ₽/м3</div>
                                        {/*<div className="number" data-step="1" data-min="1" data-max="100">
                                            <a href="#" className="number-minus">−</a><input className="number-text"
                                                                                             type="text" name="count"
                                                                                             value="0"/>
                                            <a href="#" className="number-plus">+</a>
                                        </div>*/}
                                        <div className="price">{productData.price} ₽</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prod-img text-center">
                                <img src={productData.urlIMG} className="raboti-img" height="270" alt={productData.name}/>
                            </div>
                            <div className="inf d-lg-none">
                                <div className="cat">Товарный бетон</div>
                                <div className="tittle_product">{productData.name}</div>
                                <div className="prod_row">
                                    <div className="price">{productData.price} ₽<span>/м3</span></div>
                                    {/*<div className="rating-mini">
                                        <span className="active"></span>
                                        <span className="active"></span>
                                        <span className="active"></span>
                                        <span className="active"></span>
                                        <span></span>
                                    </div>*/}
                                </div>
                                {/*<div className="prod_row">
                                    <div className="number" data-step="1" data-min="1" data-max="100">
                                        <a href="#" className="number-minus">−</a>
                                        <input className="number-text" type="text" name="count" value="0" />
                                        <a href="#" className="number-plus">+</a>
                                    </div>
                                    <button className="btn in_cart">
                                        В корзину
                                    </button>
                                </div>*/}
                            </div>
                            <div className="row prod_description">
                                <div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="tab1-tab" data-toggle="tab"
                                                    data-target="#tab1" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Характеристики
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tab2-tab" data-toggle="tab"
                                                    data-target="#tab2" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Доставка
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tab3-tab" data-toggle="tab"
                                                    data-target="#tab3" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Оплата
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                             aria-labelledby="tab1-tab">
                                            <div className="feature">
                                                {Object.entries(productData.contents).map(([key, value], index) => {
                                                    return (
                                                        <div key={`feature-${index}`} className="feature_row">
                                                            <span>{key}</span><span> {value}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div dangerouslySetInnerHTML={{__html: productData.description}}></div>
                                        </div>
                                        <div className="tab-pane fade show " id="tab2" role="tabpanel"
                                             aria-labelledby="tab2-tab">
                                            <div className="dscr">
                                                <h4>Доставка в пределах МКАД</h4>
                                                <p className="mb-4">Тарифы уточняйте у менеджера</p>
                                                <h4>Доставка осуществляется круглосуточно и без выходных</h4>
                                                <p>Дотсавка в более отдаленные районы просчитывается менеджером индивидуально. При заказе больших объемов будет скидка или бесплатная доставка.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show " id="tab3" role="tabpanel"
                                             aria-labelledby="tab3-tab">
                                            <div className="dscr">
                                                <div style={{fontWeight: 500}}>1. Наличными при доставке водителю</div>
                                                <div className="mt-3">Во время оформления заказа возможно выбрать наличную форму оплаты. В этом случае денежные средства передаются водителю в момент приезда на строительную площадку.</div>
                                                <div className="mt-4" style={{fontWeight: 500}}>2. Оплата по счету</div>
                                                <div className="mt-3">Во время оформления заказа возможно выбрать форму оплаты по счету. В этом случае, вам будет выписан счет на оплату в электронном виде.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn org cartblock-btn lgx mt-4" data-toggle="modal" data-target="#modal">
                                Купить
                            </button>
                            {/*<div className="row recommended">
                                <h2 className="underline">Для работы вам потребуется</h2>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}