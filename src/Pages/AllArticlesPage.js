import {useEffect} from "react";
import {Link} from "react-router-dom";

export const AllArticlesPage = (props) => {

    useEffect(() => {
        props.seoCallback({title: 'Каталог статей', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <section className="articles">
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Статьи / Применение бетона</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row  justify-content-between row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                        <div className="article">
                            <div className="article-title"> Как определяется класс бетона?</div>
                            <img src="/images/articles/atc1.png" className="img-article" alt=""/>
                            <div className="article-footer">
                                <div className="article-t">Классы бетона</div>
                                <button className="btn org position-relative">
                                    <Link to="/article/slugArticle" className="fake-link-block"></Link>
                                    Читать полностью
                                </button>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-title"> Как определяется класс бетона?</div>
                            <img src="/images/articles/atc2.png" className="img-article" alt=""/>
                            <div className="article-footer">
                                <div className="article-t">Классы бетона</div>
                                <button className="btn org position-relative">
                                    <Link to="/article/slugArticle" className="fake-link-block"></Link>
                                    Читать полностью
                                </button>
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