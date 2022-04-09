import widget from '../img/icon/widget.svg'
import union from '../img/icon/union.svg'
import polygon from '../img/icon/polygon-1.svg'
import { useSelector } from "react-redux"
import {useEffect, useState} from "react"
import { ProductItem } from "../Components/ProductItem"
import classNames from "classnames"
import {getProductCategories} from "../Redux/nameStore/action";
import {FAKE_PRODUCT_DATA} from "../constant";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {CategoryMenu} from "../Components/CategoryMenu";

export const CategoryPage = (props) => {
    const location = useLocation();
    // значение по  умолчанию [] - пустой массив
    const [categoryData, setCategoryData] = useState(FAKE_PRODUCT_DATA);
    const categorySlug = props.subSlug ? location.pathname.split('/')[2] : location.pathname.split('/')[2]

    console.log(777777, props, categorySlug, location.pathname.split('/'))
    useEffect(() => {
        props.seoCallback({title: 'Категория товаров', description: 'Описание каталога'});

        // заглушка. получение данных по товарам для раздела "актуальный прайс"
        /*axios.get(`${апи_урл/catalog/}`)
            .then(res => {
                // полученный массив с данным ложим в стейт, который дальше мапится и все красиво
                // сейчас в стейте лежат псевдо данные, при раскоменчивании их нужно убрать, оставив пустой массив
                setCategoryData(res.data)
            })
            .catch(error => {
                console.log(error);
            });*/
    }, [location.pathname]);

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
                                    <Link to={`/catalog/${categorySlug}`}>Товарный бетон</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Бетон на гравийном щебне</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>{categoryData.name} <span className="num">({categoryData.products.length})</span></h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row category-row justify-content-start">
                        {categoryData.subCategories.length > 0 &&
                            categoryData.subCategories.map((sub, index) => {
                                return (
                                    <div key={`subcategory-${index}`} className={`category-row-item br r position-relative ${location.pathname === `/catalog/${categorySlug}/${sub.slug}` ? 'active' : ''}`}>
                                        <Link to={`/catalog/${categorySlug}/${sub.slug}`} className="fake-link-block"></Link>
                                        {sub.name}<span>100 товаров</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <CategoryMenu categories={categoryData.allCategories} pageSlug={props.subSlug ? location.pathname.split('/')[2] : location.pathname.split('/')[2]}/>
                        <div className="col-content">
                            <div className="content-filtr"><img src={union} alt=""/>По умолчанию <span>(возрастание)<img
                                src={polygon} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="row catalog_produkt">
                                {categoryData.products.length > 0 &&
                                    categoryData.products.map((item, index) => {
                                        console.log(888,item)
                                        return (
                                            <ProductItem key={`product-${index}`} item={item}/>
                                        )
                                    })
                                }
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