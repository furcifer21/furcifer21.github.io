import widget from '../img/icon/widget.svg'
import union from '../img/icon/union.svg'
import polygon from '../img/icon/polygon-1.svg'
import { useSelector } from "react-redux"
import {useEffect, useState} from "react"
import { ProductItem } from "../Components/ProductItem"
import classNames from "classnames"
import {getProductCategories} from "../Redux/nameStore/action";

export const CategoryPage = (props) => {
    /*const produts = useSelector(state => state.allProducts)*/
    const [currentItem, setCurrentItem] = useState(0)
    const [currentCategory, setCurrentcategory] = useState(0)
    const fakeProducts = [
        {
            img: '',
            name: 'Бетон M100   B7,5 F100 W4 (Гравий)',
            link: '/product1',
            price: '3 310',
        },
        {
            img: '',
            name: 'Бетон M100   B7,5 F100 W4 (Гравий)',
            link: '/product2',
            price: '3 310',
        },
    ];

    useEffect(() => {
        props.seoCallback({title: 'Категория товаров', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Каталог</a></li>
                                <li className="breadcrumb-item"><a href="#">Товарный бетон</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Бетон на гравийном щебне</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Товарный бетон <span className="num">(47)</span></h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row category-row">
                        <div className={classNames("category-row-item br r", {'active': currentCategory === 0})}
                             onClick={() => setCurrentcategory(0)}>Бетон на гравийном щебне
                            <span>100 товаров</span>
                        </div>
                        <div className={classNames("category-row-item br r", {'active': currentCategory === 1})}
                             onClick={() => setCurrentcategory(1)}>Бетон на гравийном щебне
                            <span>78 товаров товаров</span>
                        </div>
                        <div className={classNames("category-row-item br r", {'active': currentCategory === 2})}
                             onClick={() => setCurrentcategory(2)}>Керамзитобетон
                            <span>94 товаров товаров</span>
                        </div>
                        <div className={classNames("category-row-item br r", {'active': currentCategory === 3})}
                             onClick={() => setCurrentcategory(3)}>Мостовой бетон
                            <span>45 товаров</span>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sidbar-left">
                            <div className="sidbar-left-name"><img src={widget} alt=""/>Каталог</div>
                            {/* <div className="sidbar-left-item active br">Товарный бетон</div> */}
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 0})}
                                 onClick={() => setCurrentItem(0)}>Товарный бетон
                            </div>
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 1})}
                                 onClick={() => setCurrentItem(1)}>Цементные растворы
                            </div>
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 2})}
                                 onClick={() => setCurrentItem(2)}>Цементные смеси
                            </div>
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 3})}
                                 onClick={() => setCurrentItem(3)}>Аренда техники
                            </div>
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 4})}
                                 onClick={() => setCurrentItem(4)}>Сыпучие материалы
                            </div>
                            <div className={classNames("sidbar-left-item br", {'active': currentItem === 5})}
                                 onClick={() => setCurrentItem(5)}>Рассчитать стоимость доставки
                            </div>
                        </div>
                        <div className="col-content">
                            <div className="content-filtr"><img src={union} alt=""/>По умолчанию <span>(возрастание)<img
                                src={polygon} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="row catalog_produkt">
                                {fakeProducts.map((item, index) => {
                                    return (
                                        <ProductItem key={`product-${index}`} item={item}/>
                                    )
                                })}
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