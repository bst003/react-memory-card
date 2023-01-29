import React, { useEffect, useRef } from "react";

import Modal from "react-modal";

function GameModal(props) {
    const { prevScore, modalIsOpen, closeAlertModal } = props;

    Modal.setAppElement("#root");

    const closeModal = () => {
        console.log("close modal");
        closeAlertModal();
    };

    const modalContent = () => {
        let content = "";

        if (Number(prevScore) === Number(12)) {
            content = (
                <div className="gameModal__inner">
                    <h3>You win!</h3>
                    <p>You got a perfect score, what a memory!</p>
                </div>
            );
        } else {
            content = (
                <div className="gameModal__inner">
                    <h3>Game Over</h3>
                    <p>Your score was {prevScore} / 12</p>
                </div>
            );
        }

        return content;
    };

    return (
        <Modal
            className="gameModal"
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Game Alert Modal"
        >
            <button className="gameModal__close" type="button" onClick={closeModal}>
                close
            </button>
            {modalContent()}
        </Modal>
    );
}

export default GameModal;
