import React, {useEffect, useState} from "react";

export const OneArticlePage = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [agreeCheckbox, setAgreeCheckbox] = useState(true);

    useEffect(() => {
        props.seoCallback({title: 'Статья', description: 'Описание каталога'});
    }, []);

    return (
        <>
            <div className="sidbar-right">
                <div className="sidbar-right-item carts">
                    <img src="/images/icon/Basket_light.svg" alt=""/>
                    <span className="sidbar-num">0</span>
                </div>
                <div className="sidbar-right-item favorite">
                    <img src="/images/icon/Heart.svg" alt=""/>
                    <span className="sidbar-num">0</span>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/phone.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/Message.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/Telegram.svg" alt=""/>
                </div>
                <div className="sidbar-right-item ">
                    <img src="/images/icon/WhatsApp.svg" alt=""/>
                </div>
            </div>
            <section className="one-article">
                <div className="container breadcrumb">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Статьи</a></li>
                                <li className="breadcrumb-item"><a href="#">Применение бетона</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row name-row">
                        <div className="name-row-item">
                            <h1>Бетон – технология заливки</h1>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
            <section className="catalog-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sidbar-left">
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
                        </div>
                        <div className="col-content">
                            <div className="row articles">
                                <h3 className="articles-name">Бетон – технология заливки</h3>
                                <p><img src="/images/image1.png" className="text-img" alt="" style={{float: 'right'}}/>Покупая
                                    товарный бетон, обратите внимание на важный технический показатель его прочности,
                                    так как от этого зависит надежность, прочность и долговечность готовой монолитной
                                    конструкции. При подборе подходящего цементного раствора специалисты обращают
                                    внимание на классы и марки жидкого бетона, которые помогают понять, насколько
                                    материал подходит для проведения конкретных монолитных строительных работ. Хотя
                                    другие параметры готовой бетонной смеси БСГ (огнеупорность, водонепроницаемость,
                                    морозостойкость, подвижность) не менее значительные, отходят на второй план.</p>
                                <p>Покупая жидкий бетон для заливки фундаментов, возведения монолитных конструкций или
                                    строительные смеси для проведения кладочных или штукатурных работ, важно помнить,
                                    что марка ― это лабораторная характеристика прочности. Для практических целей чаще
                                    всего используются растворы М100-М400, хотя ассортимент доступных разновидностей
                                    намного шире. Более точной характеристикой по прочности является класс бетона. Он
                                    обозначается буквой B в диапазоне от B3.5 до B60. В цифровой части указано
                                    максимально допустимое давление, которое затвердевший материал (монолитная
                                    конструкция) выдерживает не менее чем в 95% случаев. Оно выражено в МПа.
                                </p>
                                <p>У марки и класса различный шаг измерений. Соотношение данных параметров описаны в
                                    ГОСТ 26633-91. Этот документ содержит таблицу тяжёлых классов бетона БСТ и марок по
                                    прочности. Изучая ее, можно заметить, что, например, М150 соответствует и B10 и
                                    B12,5. Это не ошибка, просто класс бетона ГОСТ более точно указывает характеристики
                                    материала.</p>
                                <h3>Как выбрать класс бетонной смеси?</h3>
                                <p>Нужную строительную смесь можно приготовить самостоятельно, но лучше заказать ту, что
                                    изготовлена в производственных условиях, где строго соблюдаются все пропорции,
                                    рецептура, а также технология производства. Обратившись к менеджерам РБУ, можно
                                    заказать бетонную смесь класса от B3.5 до B55. Среди разнообразия БСТ наиболее
                                    приобретаемыми являются следующие виды классов раствора:</p>
                                <ul>
                                    <li>
                                        В7.5. Используется при проведении подготовительных бетонных работ.
                                    </li>
                                    <li>В12.5. Подходит для заливки ленточного фундамента, но чаще применяется в
                                        качестве подготовительного материала для организации тротуаров, стяжки полов.
                                    </li>
                                    <li>В15. Применим для создания свайно-ростверковых, плитных, ленточных фундаментов,
                                        монолитных площадок, лестниц.
                                    </li>
                                    <li>В20. Находит применение в заливке фундаментов, а также в производстве подпорных
                                        стен, малонагруженных плит перекрытия.
                                    </li>
                                    <li>В22.5. Универсальный класс поверхности бетона, который благодаря прочностным
                                        характеристикам и доступной цене подойдет практически для любых строительных
                                        нужд.
                                    </li>
                                    <li>В25. Этот материал используется в создании колонн, балок, несущих стен, ЖБИ.
                                    </li>
                                    <li>В30. Раствор применяют для заливки чаши бассейнов, создании цокольных этажей,
                                        конструкций мостов.
                                    </li>
                                    <li>В35. Высокий класс прочности позволяет создавать гидротехнические сооружения,
                                        высоконагруженные мосты и банковские хранилища.
                                    </li>
                                </ul>
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