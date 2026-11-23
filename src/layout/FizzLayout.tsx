import { useState, type ChangeEvent } from 'react'
import type { Bitmap } from 'jimp';
import FizzCanvas from '../components/FizzCanvas'
import { getImageDetails } from '../service/FileService';
import PopupComponent from '../components/Popup/PopupComponent';

function FizzLayout() {
    const [image, setImage] = useState<Bitmap>();
    const [ready, setReady] = useState(false);
    const [show, showModal] = useState(false);
    const [msg, setMsg] = useState<string>();
    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const img = await getImageDetails(e.currentTarget.files![0]);
            setImage(img);
            setReady(true);
        } catch(error: unknown) {
            if (error instanceof Error) {
                setMsg(error.message);
                showModal(true);
            }
        }
    }
    const onClose = () => {
        showModal(false);
        setMsg(undefined);
    }
    return (
        <div className='main-container'>
            <div className='container'>
                <FizzCanvas image={image} ready={ready} />
                { !ready && <div className='action-items'>
                    <label className='action'> Select Image
                        <input className='action' type='file' onChange={uploadImage} />
                    </label>
                </div>
                }
            </div>
            <PopupComponent show={show} msg={msg} onClose={onClose}/>
        </div>
    )
}

export default FizzLayout
