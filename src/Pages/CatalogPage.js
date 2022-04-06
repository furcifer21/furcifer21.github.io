import { getProductCategories, getAllProducts } from "../Redux/nameStore/action"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import calk from '../img/catalog/calk.png'
import catalog1 from '../img/catalog/catalog1.png'
import catalog2 from '../img/catalog/catalog2.png'
import catalog3 from '../img/catalog/catalog3.png'
import catalog4 from '../img/catalog/catalog4.png'
import catalog5 from '../img/catalog/catalog5.png'
import {Link} from "react-router-dom";

export const CatalogPage = (props) => {
    const dispatch = useDispatch()
    const productCategories = useSelector(data => data.productCategories)
    const fakeCatalogItems = [
        {img: catalog1, name: 'Бетон', slug: '/catalog/catalogCategory1', count: '19 товаров'},
        {img: catalog2, name: 'Песок', slug: '/catalog/catalogCategory2', count: '4 товара'},
        {img: catalog3, name: 'Щебень', slug: '/catalog/catalogCategory3', count: '16 товаров'},
        {img: catalog4, name: 'Гравий', slug: '/catalog/catalogCategory4', count: '3 товара'},
        {img: catalog5, name: 'Арматура', slug: '/catalog/catalogCategory5', count: '18 товаров'}
    ]

    console.log(productCategories);

    useEffect(() => {
        dispatch(getProductCategories());
        props.seoCallback({title: 'Каталог', description: 'Описание каталога'});
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
                        <div className="row-search">
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
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="content-body">
                <div className="container">
                    <div className="row content-article">
                        {fakeCatalogItems.map((catalogCategory, index) => {
                            return (
                                <div key={`category-${index}`} className="article_item-row br bg-wh position-relative">
                                    <Link to={catalogCategory.slug} className="fake-link-block"></Link>
                                    <div>
                                        <img src={catalogCategory.img} className=""/>
                                    </div>
                                    <div>
                                        <div className="article_item-row-name">{catalogCategory.name}</div>
                                        <div className="article_item-row-sub">{catalogCategory.count}</div>
                                    </div>
                                    <div className="view"></div>
                                </div>
                            )
                        })}
                        <div className="article_item-row calk-item br bg-wh position-relative">
                            <Link to="/calculate" className="fake-link-block"></Link>
                            <div><img src={calk} className=""/></div>
                            <div>
                                <div className="article_item-row-name">Рассчитать стоимость доставки </div>
                                <div className="article_item-row-sub">Онлайн-калькулятор</div>
                            </div>
                            <div className="view"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}