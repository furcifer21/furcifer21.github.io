import {useEffect, useState} from "react"
import { ProductItem } from "../Components/ProductItem"
import {API_URL, REAL_FAKE_DATA} from "../constant";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {CategoryMenu} from "../Components/CategoryMenu";
import axios from "axios";

export const CategoryPage = (props) => {
    const location = useLocation();
    const [categoryData, setCategoryData] = useState('');
    const [categoryMenu, setCategoryMenu] = useState('');
    const [subCategoryMenu, setSubCategoryMenu] = useState([]);
    const [subCategoryName, setSubCategoryName] = useState('');
    const [productsData, setProductsData] = useState([]);
    const isSubCategoryPage = props.subSlug;
    const categorySlug = isSubCategoryPage ? location.pathname.split('/')[2] : location.pathname.split('/')[2]

    useEffect(() => {
        props.seoCallback({title: 'Категория товаров', description: 'Описание каталога'});

        axios.get(`${API_URL}/product/getAllProduct`)
            .then(res => {
                const response = res.data;

                setCategoryMenu(response);
                response.map(category => {
                    if(category.typeSlug === categorySlug) {
                        setCategoryData(category);
                        setSubCategoryMenu(category.categories);

                        if(isSubCategoryPage) {
                            category.categories.map((subCategory, index) => {
                                if(encodeURI(subCategory.categorySlug) === location.pathname.split('/').pop()) {
                                    setProductsData(subCategory.products);
                                    setSubCategoryName(subCategory.category);
                                }
                            })
                        } else {
                            setProductsData(category.products);
                        }
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [location]);

    return (
        categoryData !== '' &&
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
                                    <Link to={`/catalog/${categorySlug}`}>{categoryData.type}</Link>
                                </li>
                                {isSubCategoryPage &&
                                    <li className="breadcrumb-item active" aria-current="page">{subCategoryName}</li>
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>{categoryData.type} <span className="num">({categoryData.products.length})</span></h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row category-row justify-content-start">
                        {subCategoryMenu.length > 0 &&
                            subCategoryMenu.map((sub, index) => {
                                return (
                                    <div key={`subcategory-${index}`} className={`category-row-item br r position-relative ${location.pathname === encodeURI(`/catalog/${categorySlug}/${sub.categorySlug}`) ? 'active' : ''}`}>
                                        <Link to={`/catalog/${categorySlug}/${sub.categorySlug}`} className="fake-link-block"></Link>
                                        {sub.category}<span>товаров: {sub.products.length}</span>
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
                        <CategoryMenu categories={categoryMenu} pageSlug={isSubCategoryPage ? location.pathname.split('/')[2] : location.pathname.split('/')[2]}/>
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