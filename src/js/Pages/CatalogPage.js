import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL, REAL_FAKE_DATA} from "../constant";

export const CatalogPage = (props) => {
    const [catalogCategories, setCatalogCategories] = useState([])

    useEffect(() => {
        props.seoCallback({title: 'Каталог', description: 'Описание каталога'});

        axios.get(`${API_URL}/product/getAllProduct`)
            .then(res => {
                setCatalogCategories(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        catalogCategories.length > 0 &&
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/catalog">Каталог</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Каталог</h1>
                        </div>
                        {/*<div className="row-search">
                            <form className="form search" action="" id="form-1">
                                <input className="text-field w-input" name="" placeholder="Введите запрос" type="text"/>
                                <select name="category">
                                    <option>Категории</option>
                                    <option value="Товарный бетон">Товарный бетон</option>
                                    <option value="Цементные растворы">Цементные растворы</option>
                                    <option value="Цементные смеси">Цементные смеси</option>
                                </select>
                                <button type="submit" className="btn search form-btn"></button>
                            </form>
                        </div>*/}
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="content-body">
                <div className="container">
                    <div className="row content-article">
                        {catalogCategories.map((category, index) => {
                            return (
                                <div key={`category-${index}`} className="article_item-row br bg-wh position-relative">
                                    <Link to={category.typeSlug} className="fake-link-block"></Link>
                                    <div>
                                        <img src={category.img} className=""/>
                                    </div>
                                    <div>
                                        <div className="article_item-row-name">{category.type}</div>
                                        <div className="article_item-row-sub">товаров: {category.products.length}</div>
                                    </div>
                                    <div className="view"></div>
                                </div>
                            )
                        })}
                        {/*<div className="article_item-row calk-item br bg-wh position-relative">
                            <Link to="/calculate" className="fake-link-block"></Link>
                            <div><img src={calk} className=""/></div>
                            <div>
                                <div className="article_item-row-name">Рассчитать стоимость доставки </div>
                                <div className="article_item-row-sub">Онлайн-калькулятор</div>
                            </div>
                            <div className="view"></div>
                        </div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}