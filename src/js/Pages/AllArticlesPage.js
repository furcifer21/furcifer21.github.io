import {useEffect} from "react";
import {Link} from "react-router-dom";

export const AllArticlesPage = (props) => {
    const articlesInfo = [
        {
            img: '/images/articles/atc1.png',
            name: 'Арматура 25г2с и А500: различие',
            slug: 'razlichia-armaturi',
        },
        {
            img: '/images/articles/atc1.png',
            name: 'Марки бетона',
            slug: 'marki-betona',
        },
        {
            img: '/images/articles/atc1.png',
            name: 'Значение строительного песка',
            slug: 'znachenia-peska',
        },
        {
            img: '/images/articles/atc1.png',
            name: 'Как проверить прочность бетона?',
            slug: 'prochnost-betona',
        }
    ]

    useEffect(() => {
        props.seoCallback({title: 'Каталог статей', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section className="articles">
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Статьи</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-around row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                        {articlesInfo.map((article, index) => {
                            return (
                                <div key={`article-${index}`} className="article d-flex flex-column justify-content-between">
                                    <div className="article-title">{article.name}</div>
                                    <div>
                                        <img src={article.img} className="img-article" alt={article.name}/>
                                        <div className="article-footer">
                                            <button className="btn org position-relative">
                                                <Link to={`/articles/${article.slug}`} className="fake-link-block"></Link>
                                                Читать полностью
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}