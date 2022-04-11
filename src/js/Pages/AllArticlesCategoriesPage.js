import { useEffect, useState } from "react"
import { getProductCategories, getAllProducts } from "../../Redux/nameStore/action"
import { useDispatch } from "react-redux"
import {Link} from "react-router-dom";

export const  AllArticlesCategoriesPage = (props) => {
    const [currentArticle, setCurrentArticle] = useState(2)
    const [name, setName] = useState('Ваше имя')
    const [email, setEmail] = useState('Ваш e-mail')
    const [message, setMessage] = useState('Задайте вопрос нашим специалистам')
    const dispatch = useDispatch()
    const changeArticle = (value) => {
        setCurrentArticle(value)
    }
    const fakeArticlesCategories = [
        {img: '/images/article/article1.png', name: 'Применение бетона', slug: '/articles/articlesCategory1', count: '2 статьи'},
        {img: '/images/article/article2.png', name: 'Применение песка', slug: '/articles/articlesCategory1', count: '3 статьи'},
        {img: '/images/article/article3.png', name: 'Щебень', slug: '/articles/articlesCategory1', count: '4 статьи'},
        {img: '/images/article/article4.png', name: 'Гравий', slug: '/articles/articlesCategory1', count: '1 статья'},
        {img: '/images/article/article5.png', name: 'Арматура', slug: '/articles/articlesCategory1', count: '3 статьи'},
        {img: '/images/article/article6.png', name: 'Для снабженцев', slug: '/articles/articlesCategory1', count: '3 статьи'},
    ]

    useEffect(() => {
    // dispatch(getProductCategories())
        dispatch(getAllProducts());
        props.seoCallback({title: 'Категории статей', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section>
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/articles-categories">Статьи</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Статьи</h1>
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
                        {fakeArticlesCategories.map((articlesCategory, index) => {
                            return (
                                <div key={`category-article-${index}`} className="article_item-row br bg-wh position-relative">
                                    <Link to={articlesCategory.slug} className="fake-link-block"></Link>
                                    <div><img src={articlesCategory.img} className=""/></div>
                                    <div>
                                        <div className="article_item-row-name">{articlesCategory.name}</div>
                                        <div className="article_item-row-sub">{articlesCategory.count}</div>
                                    </div>
                                    <div className="view"></div>
                                </div>
                            )
                        })}
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