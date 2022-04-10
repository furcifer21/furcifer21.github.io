import { getProductCategories, getAllProducts } from "../Redux/nameStore/action"
import {useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import calk from '../img/catalog/calk.png'
import catalog1 from '../img/catalog/catalog1.png'
import catalog2 from '../img/catalog/catalog2.png'
import catalog3 from '../img/catalog/catalog3.png'
import catalog4 from '../img/catalog/catalog4.png'
import catalog5 from '../img/catalog/catalog5.png'
import {Link} from "react-router-dom";
import {FAKE_PRODUCT_DATA_MAIN, REAL_FAKE_DATA} from "../constant";

export const CatalogPage = (props) => {
    // значение по  умолчанию [] - пустой массив
    const [catalogCategories, setCatalogCategories] = useState(REAL_FAKE_DATA)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductCategories());
        props.seoCallback({title: 'Каталог', description: 'Описание каталога'});

        // заглушка. получение данных по товарам для раздела "актуальный прайс"
        /*axios.get(`${апи_урл/getAllProducts}`)
            .then(res => {
                // полученный массив с данным ложим в стейт, который дальше мапится и все красиво
                // сейчас в стейте лежат псевдо данные, при раскоменчивании их нужно убрать, оставив пустой массив
                setCatalogCategories(res.data)
            })
            .catch(error => {
                console.log(error);
            });*/
    }, []);

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