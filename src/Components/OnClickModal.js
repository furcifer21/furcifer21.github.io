import React, {useEffect, useState} from "react";

export const OnClickModal = (props) => {
    const [modalName, setModalName] = useState('');
    const [modalPhone, setModalPhone] = useState('');
    const [modalEmail, setModalEmail] = useState('');
    const [agreeCheckbox, setAgreeCheckbox] = useState(true);

    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-title">Купить в один клик</div>
                    <div className="modal-descriptor">Заполните форму, и наш специалист свяжется с вами в ближайшее
                        время
                    </div>
                    <div className="form-wrapper w-form">
                        <form className="form" action="" method="post" id="form-2">
                            <input className="text-field w-input"
                                   data-name="Имя"
                                   name="name"
                                   maxLength="256"
                                   placeholder="Имя"
                                   type="text"
                                   value={modalName}
                                   onChange={(e) => setModalName(e.target.value)}
                            />
                            <input className="phone-input text-field w-input"
                                   name="phone"
                                   maxLength="256"
                                   placeholder="Телефон"
                                   required="required"
                                   type="tel"
                                   value={modalPhone}
                                   onChange={(e) => setModalPhone(e.target.value)}
                            />
                            <input className="text-field w-input"
                                   name="email"
                                   maxLength="256"
                                   placeholder="E-mail*"
                                   type="email"
                                   value={modalEmail}
                                   onChange={(e) => setModalEmail(e.target.value)}
                            />
                            <input type="checkbox"
                                   id="cb1"
                                   checked={agreeCheckbox}
                                   onChange={() => setAgreeCheckbox(!agreeCheckbox)}
                            />
                            <label htmlFor="cb1">
                                Я согласен на <a href="#">обработку персональных данных</a>
                            </label>
                            <button type="submit" className="btn org  main-btn form-btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}