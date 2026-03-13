import { useState, type ChangeEvent } from 'react'
import type { Bitmap } from 'jimp';
import FizzCanvas from '../components/FizzCanvas'
import { getImageDetails } from '../service/FileService';

function FizzLayout() {
    const [ready, setReady] = useState(false);
    const [image, setImage] = useState<Bitmap>();
    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        setReady(true);
        setImage(await getImageDetails(e.currentTarget.files![0]));
        
    }
    return (
        <div className='main-container'>
            <div className='canvas'>
                <FizzCanvas image={image} ready={ready}/>
            </div>
            <div className='action-items'>
                <label className='action'> Select Image
                    <input className='action' type='file' onChange={uploadImage} />
                </label>
            </div>
        </div>
    )
}

export default FizzLayout
