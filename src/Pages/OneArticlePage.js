import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {articles} from "../articlesHTMLText";
import {Link} from "react-router-dom";

export const OneArticlePage = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [agreeCheckbox, setAgreeCheckbox] = useState(true);
    const location = useLocation();

    useEffect(() => {
        props.seoCallback({title: 'Статья', description: 'Описание каталога'});
    }, []);

    return (
        <>
            {/*<div className="sidbar-right">
                <div className="sidbar-right-item carts position-relative">
                    <Link to="/cart" className="fake-link-block"></Link>
                    <img src="/images/icon/Basket_light.svg" alt=""/>
                    <span className="sidbar-num">0</span>
                </div>
                <div className="sidbar-right-item favorite">
                    <img src="/images/icon/Heart.svg" alt=""/>
                    <span className="sidbar-num">0</span>
                </div>
                <div className="sidbar-right-item position-relative">
                    <a href="tel:+74993777770" className="fake-link-block"></a>
                    <img src="/images/icon/phone.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <a href="mailto:info@glavsk.ru" className="fake-link-block"></a>
                    <img src="/images/icon/Message.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/Telegram.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/WhatsApp.svg" alt=""/>
                </div>
            </div>*/}
            <section className="one-article">
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/articles">Статьи</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>{articles[location.pathname].name}</h1>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container">
                    <div className="row justify-content-between">
                        {/*<div className="col-sidbar-left">
                            <div className="sidbar-left-name">
                                <img src="/images/icon/File_dock.svg" alt=""/>
                                Статьи
                            </div>
                            <div className="sidbar-left-item  br">Бетонные заводы</div>
                            <div className="sidbar-left-item br">Марки бетона</div>
                            <div className="sidbar-left-item active br">Классы бетона</div>
                            <div className="sidbar-left-item br">Гарантия на бетон</div>
                            <div className="sidbar-left-item br">Добавки в бетон</div>
                            <div className="sidbar-left-item br ">Для снабженцев</div>
                        </div>*/}
                        <div>
                            <div className="row articles">
                                <h3 className="articles-name">{articles[location.pathname].name}</h3>
                                <div dangerouslySetInnerHTML={{__html: articles[location.pathname].textHtml}}></div>
                                <div className="col question">
                                    <div className="form-title">Остались вопросы?</div>
                                    <div className="dscr ">Если вы не нашли ответ на свой вопрос на нашем сайте, то
                                        можете написать его нашим специалистам.
                                    </div>
                                    <form className="form articles" action="" method="post" id="form-1">
                                        <div className="row-form">
                                            <input className="text-field w-input"
                                                   type="text"
                                                   name="name"
                                                   value={nameInput}
                                                   placeholder="Ваше имя"
                                                   onChange={(e) => setNameInput(e.target.value)}
                                            />
                                            <input className="text-field w-input"
                                                   type="email"
                                                   name="mail"
                                                   value={emailInput}
                                                   placeholder="Ваш e-mail"
                                                   required="required"
                                                   onChange={(e) => setEmailInput(e.target.value)}
                                            />
                                        </div>
                                        <div className="row-form">
                                            <textarea placeholder="Задайте вопрос нашим специалистам"></textarea>
                                        </div>
                                        <div className="row-form">
                                            <input type="checkbox"
                                                   id="cb1"
                                                   checked={agreeCheckbox}
                                                   onChange={() => setAgreeCheckbox(!agreeCheckbox)}
                                            />
                                            <label htmlFor="cb1">
                                                Я согласен на <a href="#">обработку персональных данных</a>
                                            </label>
                                            <button type="submit" className="btn org  main-btn form-btn">Отправить
                                                письмо
                                            </button>
                                        </div>
                                    </form>
                                </div>
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