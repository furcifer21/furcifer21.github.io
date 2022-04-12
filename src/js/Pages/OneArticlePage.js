import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {articles} from "../../articlesHTMLText";
import {Link} from "react-router-dom";
import $ from "jquery";
import {API_URL} from "../constant";
import axios from "axios";

export const OneArticlePage = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [agreeCheckbox, setAgreeCheckbox] = useState(true);
    const location = useLocation();

    useEffect(() => {
        props.seoCallback({title: 'Статья', description: 'Описание каталога'});
    }, []);

    function sendForm(e) {
        e.preventDefault();
        const formData = {
            name: nameInput.trim(),
            email: emailInput.trim(),
            question: textInput.trim(),
        }

        if(agreeCheckbox && (emailInput.trim() !== '')) {
           axios.post(`${API_URL}/sendQuestion`, formData)
                .then(res => {
                    $('#success-modal').modal('show');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <>
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
                                <div dangerouslySetInnerHTML={{__html: articles[location.pathname].textHtml}}></div>
                                <div className="col question">
                                    <div className="form-title">Остались вопросы?</div>
                                    <div className="dscr ">Если вы не нашли ответ на свой вопрос на нашем сайте, то
                                        можете написать его нашим специалистам.
                                    </div>
                                    <form className="form articles" id="form-1" onSubmit={(e) => sendForm(e)}>
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
                                                   required="required"
                                                   checked={agreeCheckbox}
                                                   onChange={() => setAgreeCheckbox(!agreeCheckbox)}
                                            />
                                            <label htmlFor="cb1">
                                                Я согласен на <a href="#">обработку персональных данных</a>
                                            </label>
                                            <button type="submit" className="btn org main-btn form-btn" >
                                                Отправить письмо
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}