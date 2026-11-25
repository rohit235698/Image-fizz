import { useState, type ChangeEvent, type DragEvent } from 'react'
import FizzCanvas from '../components/FizzCanvas'
import { getImage } from '../service/FileService';
import PopupComponent from '../components/Popup/PopupComponent';

function FizzLayout() {
    const [image, setImage] = useState<ImageData>();
    const [ready, setReady] = useState(false);
    const [show, showModal] = useState(false);
    const [active, setActive] = useState(false);
    const [msg, setMsg] = useState<string>();
    const processImage = async (file: File) => {
        try {
            const img = await getImage(file);
            setImage(img);
            setReady(true);
        } catch(error: unknown) {
            if (error instanceof Error) {
                setMsg(error.message);
                showModal(true);
            }
        }
    }
    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        processImage(e.currentTarget.files![0]);
    }
    const onClose = () => {
        showModal(false);
        setMsg(undefined);
        setActive(false);
    }
    const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
        setActive(true);
        e.preventDefault();
    }
    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        setActive(false);
        e.preventDefault();
    }
    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        processImage(e.dataTransfer.items[0].getAsFile()!);
    }
    return (
        <div className='main-container'>
            <div className={`container ${active ? 'active': ''}`} style={{ display: !ready ? 'flex': 'none'}}onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
                <img className='container-icon' src={new URL(import.meta.url).origin.concat('/Image-fizz/upload.png')}></img>
                <pre className='container-label'>Drag and drop your image here</pre>
                { !ready && <div className='action-items'>
                    <label className='action'> Select Image
                        <input className='action' type='file' onChange={uploadImage} />
                    </label>
                </div>
                }
            </div>
            <FizzCanvas image={image} ready={ready} />
            <PopupComponent show={show} msg={msg} onClose={onClose}/>
        </div>
    )
}

export default FizzLayout
