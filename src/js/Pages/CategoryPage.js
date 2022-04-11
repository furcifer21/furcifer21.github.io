import {useEffect, useState} from "react"
import { ProductItem } from "../Components/ProductItem"
import {FAKE_PRODUCT_DATA} from "../constant";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {CategoryMenu} from "../Components/CategoryMenu";

export const CategoryPage = (props) => {
    const location = useLocation();
    // значение по  умолчанию [] - пустой массив
    const [categoryData, setCategoryData] = useState(FAKE_PRODUCT_DATA);
    const [categoryMenu, setCategoryMenu] = useState(FAKE_PRODUCT_DATA.allCategories);
    const [subCategoryMenu, setSubCategoryMenu] = useState(FAKE_PRODUCT_DATA.subCategories);
    const [productsData, setProductsData] = useState(FAKE_PRODUCT_DATA.products);
    const categorySlug = props.subSlug ? location.pathname.split('/')[2] : location.pathname.split('/')[2]

    useEffect(() => {
        props.seoCallback({title: 'Категория товаров', description: 'Описание каталога'});

       /* setCategoryData()
        setCategoryMenu()
        setSubCategoryMenu()
        setProductsData()*/

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
                        {subCategoryMenu.length > 0 &&
                            subCategoryMenu.map((sub, index) => {
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
                        <CategoryMenu categories={categoryMenu} pageSlug={props.subSlug ? location.pathname.split('/')[2] : location.pathname.split('/')[2]}/>
                        <div className="col-content">
                            {/*<div className="content-filtr"><img src={union} alt=""/>По умолчанию <span>(возрастание)<img
                                src={polygon} alt=""/></span>
                            </div>
                            <hr/>*/}
                            <div className="row catalog_produkt">
                                {productsData.length > 0 &&
                                    productsData.map((item, index) => {
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
        </>
    )
}