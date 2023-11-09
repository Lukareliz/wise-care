import { ImCamera } from "react-icons/im";
import { useRef, useState } from "react";

function ImageUpload() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setImage(event.target.files[0]);
    }

    return (
        <div className="user_img">
            {image ? <img src={URL.createObjectURL(image)} className="user_img" /> : <img src="../src/assets/user-image-default.png" alt="" id="photo" />}
            <input type="file" name="" id="file" ref={inputRef} onChange={handleImageChange} />
            <label htmlFor="file" id="uploadBtn"><ImCamera className="camera_icon" /></label>
        </div>
    )
}


export default ImageUpload