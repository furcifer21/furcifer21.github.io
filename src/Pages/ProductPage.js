import {Link} from "react-router-dom";


export const ProductPage = () => {

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/catalog">Каталог</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/catalog/catalogCategory1">Товарный бетон</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/catalog/catalogCategory1">Бетон на гравийном щебне</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Бетон М100 В7,5 F100 W4
                                    (Гравий)
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Бетон М100 В7,5 F100 W4 (Гравий) </h1>
                            <div className="rating-mini">
                                <span className="active"></span>
                                <span className="active"></span>
                                <span className="active"></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <div className="prod_icon favorite"></div>
                        </div>
                    </div>
                    <hr className="none"/>
                    <div className="row category-row">
                        <div className="category-row-item br active">Бетон на гравийном щебне
                            <span>100 товаров</span>
                        </div>
                        <div className="category-row-item br ">Бетон на гравийном щебне
                            <span>78 товаров товаров</span>
                        </div>
                        <div className="category-row-item br ">Керамзитобетон
                            <span>94 товаров товаров</span>
                        </div>
                        <div className="category-row-item br">Мостовой бетон
                            <span>45 товаров</span>
                        </div>
                    </div>
                    <hr className="none"/>
                </div>

            </section>
            <section className="catalog-body">
                <div className="container">

                    <div className="row justify-content-between">
                        <div className="col-sidbar-left">
                            <div className="sidbar-left-name"><img src="/images/icon/Widget.svg" alt=""/>Каталог</div>
                            <div className="sidbar-left-item active br">Товарный бетон</div>
                            <div className="sidbar-left-item br">Цементные растворы</div>
                            <div className="sidbar-left-item br">Цементные смеси</div>
                            <div className="sidbar-left-item br">Аренда техники</div>
                            <div className="sidbar-left-item br">Сыпучие материалы</div>
                            <div className="sidbar-left-item br btn-calk">Рассчитать стоимость доставки</div>
                        </div>
                        <div className="col-content">

                            <div className="row catalog_produkt">
                                <div>
                                    <div className="product_item-row br bg-wh">
                                        <div className="product_item-row-name">Бетон М100 В7,5 F100 W4 (Гравий)</div>
                                        <div className="product_item-row-price">3 310 ₽/м3</div>


                                        <div className="number" data-step="1" data-min="1" data-max="100">
                                            <a href="#" className="number-minus">−</a><input className="number-text"
                                                                                             type="text" name="count"
                                                                                             value="0"/>
                                            <a href="#" className="number-plus">+</a>
                                        </div>


                                        <div className="price">3 310 ₽</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row prod-img row-cols-1 row-cols-sm-3 row-cols-md-3 ">
                                <a href="/images/product/beton.png" data-fancybox="gallery" data-caption="">
                                    <img src="..//images/product/beton.png" className="raboti-img" alt=""/>
                                </a>
                                <a href="/images/product/beton1.png" data-fancybox="gallery" data-caption="">
                                    <img src="..//images/product/beton1.png" className="raboti-img" alt=""/>
                                </a>
                                <a href="/images/product/beton2.png" data-fancybox="gallery" data-caption="">
                                    <img src="..//images/product/beton2.png" className="raboti-img" alt=""/>
                                </a>

                            </div>
                            <div className="inf d-lg-none">
                                <div className="cat">Товарный бетон</div>
                                <div className="tittle_product">Бетон M100 B7,5 F100 W4 (Гравий)</div>
                                <div className="prod_row">
                                    <div className="price">3 310 ₽<span>/м3</span></div>
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
                                        <a href="#" className="number-minus">−</a><input className="number-text"
                                                                                         type="text" name="count"
                                                                                         value="0"/>
                                        <a href="#" className="number-plus">+</a>
                                    </div>
                                    <button className="btn in_cart">
                                        В корзину
                                    </button>
                                </div>
                            </div>
                            <div className="row prod_description">
                                <div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Характеристики
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tab2-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab2" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Доставка
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tab3-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab3" type="button" role="tab" aria-controls="tab1"
                                                    aria-selected="true">Оплата
                                            </button>
                                        </li>

                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                             aria-labelledby="tab1-tab">
                                            <div className="feature">
                                                <div className="feature_row"><span>Класс бетона</span><span> B7,5</span>
                                                </div>
                                                <div className="feature_row">
                                                    <span>Средняя прочность, кгс/см²</span><span> 125</span></div>
                                                <div className="feature_row">
                                                    <span>Наполнитель</span><span> Гравий</span></div>
                                                <div className="feature_row">
                                                    <span>Морозостойкость, F</span><span> F100</span></div>
                                                <div className="feature_row"><span>Подвижность</span><span> П1, П2, П3, П4, П5</span>
                                                </div>
                                                <div className="feature_row">
                                                    <span>Водонепроницаемость</span><span> W4</span></div>
                                                <div className="feature_row">
                                                    <span>Плотность (кг/м³) </span><span> 2265</span></div>

                                            </div>
                                            <p>
                                                Мы предлагаем щебень согласно ГОСТ 8267-93 и 8269.0-97. Ниже перечислены
                                                основные качественные характеристики, которые следует учитывать при
                                                выборе щебня:</p>
                                            <p>

                                                Фракционный состав. По размеру зерна различают мелкий щебень (5-20 мм),
                                                средний (20-60 мм) и крупный (70-150 мм). Щебень размером до 300 мм
                                                называется камень бутовый (или бут).</p>

                                        </div>
                                        <div className="tab-pane fade show " id="tab2" role="tabpanel"
                                             aria-labelledby="tab2-tab">
                                            <div className="dscr">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
                                                risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                                                suscipit non. Non commodo volutpat, pharetra, vel.
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show " id="tab3" role="tabpanel"
                                             aria-labelledby="tab3-tab">
                                            <div className="dscr">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
                                                risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
                                                suscipit non. Non commodo volutpat, pharetra, vel.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row recommended">
                                <h2 className="underline">Для работы вам потребуется</h2>
                                <div className="item_promo_sl act slider sl_action">
                                    <div className="product_item">
                                        <div className="product_img">
                                            <img src="/images/product/Container.png" alt=""/>
                                            <div className="top_img">

                                                <div className="prod_label new"></div>
                                            </div>
                                            <div className="bottom_img">
                                                <div className="prod_icon favorite"></div>
                                                <div className="prod_icon info"></div>
                                            </div>
                                        </div>
                                        <div className="inf">
                                            <div className="cat">Автобетононасосы</div>
                                            <div className="tittle_product">Бетононасос (АБН-20м) с длинной стрелы 20
                                                метра
                                            </div>
                                            <div className="prod_row">
                                                <div className="price">20 300 ₽<span>/смена</span></div>
                                                <div className="rating-mini">
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="prod_row">
                                                <div className="number" data-step="1" data-min="1" data-max="100">
                                                    <a href="#" className="number-minus">−</a><input
                                                    className="number-text" type="text" name="count" value="0"/>
                                                    <a href="#" className="number-plus">+</a>
                                                </div>
                                                <button className="btn in_cart">
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_item">
                                        <div className="product_img">
                                            <img src="/images/product/Container.png" alt=""/>
                                            <div className="top_img">

                                                <div className="prod_label new"></div>
                                            </div>
                                            <div className="bottom_img">
                                                <div className="prod_icon favorite"></div>
                                                <div className="prod_icon info"></div>
                                            </div>
                                        </div>
                                        <div className="inf">
                                            <div className="cat">Автобетононасосы</div>
                                            <div className="tittle_product">Бетононасос (АБН-20м) с длинной стрелы 20
                                                метра
                                            </div>
                                            <div className="prod_row">
                                                <div className="price">20 300 ₽<span>/смена</span></div>
                                                <div className="rating-mini">
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="prod_row">
                                                <div className="number" data-step="1" data-min="1" data-max="100">
                                                    <a href="#" className="number-minus">−</a><input
                                                    className="number-text" type="text" name="count" value="0"/>
                                                    <a href="#" className="number-plus">+</a>
                                                </div>
                                                <button className="btn in_cart">
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_item">
                                        <div className="product_img">
                                            <img src="/images/product/Container.png" alt=""/>
                                            <div className="top_img">

                                                <div className="prod_label new"></div>
                                            </div>
                                            <div className="bottom_img">
                                                <div className="prod_icon favorite"></div>
                                                <div className="prod_icon info"></div>
                                            </div>
                                        </div>
                                        <div className="inf">
                                            <div className="cat">Автобетононасосы</div>
                                            <div className="tittle_product">Бетононасос (АБН-20м) с длинной стрелы 20
                                                метра
                                            </div>
                                            <div className="prod_row">
                                                <div className="price">20 300 ₽<span>/смена</span></div>
                                                <div className="rating-mini">
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="prod_row">
                                                <div className="number" data-step="1" data-min="1" data-max="100">
                                                    <a href="#" className="number-minus">−</a><input
                                                    className="number-text" type="text" name="count" value="0"/>
                                                    <a href="#" className="number-plus">+</a>
                                                </div>
                                                <button className="btn in_cart">
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_item">
                                        <div className="product_img">
                                            <img src="/images/product/Container.png" alt=""/>
                                            <div className="top_img">

                                                <div className="prod_label new"></div>
                                            </div>
                                            <div className="bottom_img">
                                                <div className="prod_icon favorite"></div>
                                                <div className="prod_icon info"></div>
                                            </div>
                                        </div>
                                        <div className="inf">
                                            <div className="cat">Автобетононасосы</div>
                                            <div className="tittle_product">Бетононасос (АБН-20м) с длинной стрелы 20
                                                метра
                                            </div>
                                            <div className="prod_row">
                                                <div className="price">20 300 ₽<span>/смена</span></div>
                                                <div className="rating-mini">
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="prod_row">
                                                <div className="number" data-step="1" data-min="1" data-max="100">
                                                    <a href="#" className="number-minus">−</a><input
                                                    className="number-text" type="text" name="count" value="0"/>
                                                    <a href="#" className="number-plus">+</a>
                                                </div>
                                                <button className="btn in_cart">
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_item">
                                        <div className="product_img">
                                            <img src="/images/product/Container.png" alt=""/>
                                            <div className="top_img">

                                                <div className="prod_label new"></div>
                                            </div>
                                            <div className="bottom_img">
                                                <div className="prod_icon favorite"></div>
                                                <div className="prod_icon info"></div>
                                            </div>
                                        </div>
                                        <div className="inf">
                                            <div className="cat">Автобетононасосы</div>
                                            <div className="tittle_product">Бетононасос (АБН-20м) с длинной стрелы 20
                                                метра
                                            </div>
                                            <div className="prod_row">
                                                <div className="price">20 300 ₽<span>/смена</span></div>
                                                <div className="rating-mini">
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="prod_row">
                                                <div className="number" data-step="1" data-min="1" data-max="100">
                                                    <a href="#" className="number-minus">−</a><input
                                                    className="number-text" type="text" name="count" value="0"/>
                                                    <a href="#" className="number-plus">+</a>
                                                </div>
                                                <button className="btn in_cart">
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
            <script src="slick/slick.js" charSet="utf-8"></script>
            <script src="dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/main.js"></script>
            <script src="dist/jquery.fancybox.min.js"></script>
            <script src="dist/js/popper.min.js"></script>
        </>
    )
}