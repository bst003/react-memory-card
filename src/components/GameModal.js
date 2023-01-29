import React, { useEffect, useRef } from "react";

import Modal from "react-modal";

function GameModal(props) {
    const { score, highScore, modalIsOpen, closeAlertModal } = props;

    Modal.setAppElement("#root");

    const closeModal = () => {
        console.log("close modal");
        closeAlertModal();
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
            <button className="gameModal-close" type="button" onClick={closeModal}>
                close
            </button>
            <p>This is a modal</p>
        </Modal>
    );
}

export default GameModal;
