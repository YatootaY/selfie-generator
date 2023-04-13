import React, {useState, useEffect} from "react";
import "./UploadSection.css"
import Example from "../assets/Example.png"
import front from "../assets/front.png"
import logOut from "../assets/🦆 icon _log out_.png"
import back from "../assets/back.png"

const UploadSection = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [imageUrl, setImageUrl] = useState(null);
    const [zoom, setZoom] = useState(200)

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    } 

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image_file', selectedFile);
        console.log(formData);
    }

    const editedImg = () => {


        const overlayImg = {
            width:"350px",
            height:"350px",
            position:"absolute",
            border: "3px solid black",
        }

        const mainPic  = {
            width:`${zoom}px`,
            height:`${zoom}px`,
            bottom:5,
            left: `calc(50% - ${zoom / 2}px)`,
            position:"absolute"
        }
        const stableImg = {
            width:"350px",
            height:"350px"
        }



        return(
            <>
                
                <img src={URL.createObjectURL(selectedFile)} alt="" style={mainPic}/>
                <img src={front} alt="" style={overlayImg}/>
                <img src={back} alt="" style={stableImg}/>
            </>
        )

    }

    useEffect(() => {
        handleUpload();
    },[selectedFile])

    return(
        <div className="UploadSection">
            <h2>Transform your photo here!</h2>
            <div className="inputArea">
                <label htmlFor="imgInput" id="uploadBtn"><img src={logOut} alt="" className="icon"/> Upload Image </label>
                <input type="file" onChange={onFileChange} accept="image/*" capture="camera" id="imgInput" style={{ display: 'none' }} />
            </div>
            
            <div className="createImage">
                {selectedFile ? editedImg() : <img src={Example} alt="" id="exampleImg" />}
            </div>

            <div className="control">
                <button onClick={()=>{setZoom(zoom+4)}}>+</button>
                <button onClick={()=>{setZoom(zoom-4)}}>-</button>
            </div>
            
            
            <p>We do not collect your photo.</p>
        </div>
    )
}

export default UploadSection