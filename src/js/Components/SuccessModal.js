import React, {useState} from "react";

export const SuccessModal = (props) => {

    return (
        <div className="modal fade" id="success-modal" tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-title text-center">Спасибо за заявку</div>
                    <div className="modal-descriptor text-center">Наш специалист свяжется с вами в ближайшее
                        время
                    </div>
                </div>
            </div>
        </div>
    )
}