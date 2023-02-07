/* eslint-disable */

import { useEffect, useState } from "react";



function UploadImg (props) {

    const [file, setFile] = useState("");
    
    const onChange = (e) => {
        const fileURL = URL.createObjectURL(e.target.files[0]);
        setFile(fileURL);
        props.setValue(fileURL);
      };


    return (
        <div>
            <input accept="image/*"
                    type='file'
                    id="imgInp"
                    onChange = {onChange}/>
        </div>
    );

}

export default UploadImg;