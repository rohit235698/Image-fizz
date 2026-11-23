import 'react';
interface Props {
    show: boolean,
    title?: string
    msg?: string,
    onClose: () => void
}
function PopupComponent({ show, msg, title, onClose }: Props) {
    if (!show)
        return null;
    return (
        <div className='modal-container'>
            <div className='modal-header'>
                <span className='modal-title'>{title}</span>
                <button className='modal-action' type='button' onClick={onClose}>
                    <span className='forward-slash'></span>
                    <span className='backward-slash'></span>
                </button>
            </div>
            <div className='modal-body'>
                <p className='modal-text'>{msg}</p>
            </div>
        </div>
    );
}

export default PopupComponent
