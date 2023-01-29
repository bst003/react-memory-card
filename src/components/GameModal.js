import Modal from "react-modal";

function GameModal(props) {
    const { score, modalIsOpen, closeAlertModal } = props;

    Modal.setAppElement("#root");

    const closeModal = () => {
        console.log("close modal");
        closeAlertModal();
    };

    const modalContent = () => {
        let content = "";

        if (Number(score) === Number(12)) {
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
                    <p>Your score was {score} / 12</p>
                </div>
            );
        }

        return content;
    };

    return (
        <Modal
            closeTimeoutMS={200}
            className="gameModal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Game Alert Modal"
        >
            <button className="gameModal__close" type="button" onClick={closeModal}>
                <span className="screen-reader-text">close</span>
                <i className="fas fa-times"></i>
            </button>
            {modalContent()}
        </Modal>
    );
}

export default GameModal;
