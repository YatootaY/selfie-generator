import React, {useState, useEffect} from "react";
import "./UploadSection.css"
import Example from "../assets/Example.png"
import front from "../assets/front.png"
import logOut from "../assets/🦆 icon _log out_.png"
import back from "../assets/back.png"
import html2canvas from "html2canvas";
import Loading from "./Loading";
import cameraIcon from "../assets/🦆 icon _camera outline_.png"

const UploadSection = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [imageUrl, setImageUrl] = useState(null);
    const [zoom, setZoom] = useState(200)
    const [loading,setLoading] = useState(false)
    const [apiError,setApiError] = useState(false)
    const config = require('../config')
    const apiKey = process.env.API_KEY || config.apiKey

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    } 

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image_file', selectedFile);
        removeBackground(formData);
    }

    const removeBackground = async (formData) => {
        setLoading(true)
        try{
            const response = await fetch("https://api.remove.bg/v1.0/removebg", {
                method: "POST",
                headers: {
                    "x-api-key": apiKey
                },
                body: formData
            });

            const data = await response.blob();
            setLoading(false)
            setImageUrl(URL.createObjectURL(data));
        }catch(error){
            console.error(error)
            setApiError(true)
        }
        
    }

    const handleDownload = () => {
        const element = document.getElementById("outputImg"); // replace with your div id
        setLoading(true)
        html2canvas(element, {
            scale: 4, 
            useCORS: true
        }).then(canvas => {
            const link = document.createElement("a");
            link.download = "selfie generator.png";
            link.href = canvas.toDataURL();
            link.click();
            setLoading(false)
        });
    }

    const editedImg = () => {
        const overlayImg = {
            width:"100%",
            height:"100%",
            position:"absolute",
        }

        const mainPic  = {
            width:`${zoom}px`,
            height:`${zoom}px`,
            bottom:5,
            left: `calc(50% - ${zoom / 2}px)`,
            position:"absolute"
        }
        const stableImg = {
            width:"100%",
            height:"100%"
        }

        return(
            <>
                
                <img src={(imageUrl)} alt="" style={mainPic} id="pic1"/>
                <img src={front} alt="" style={overlayImg} id="pic2"/>
                <img src={back} alt="" style={stableImg} id="pic3"/>
            </>
        )

    }

    useEffect(() => {
        handleUpload();
    },[selectedFile])

    return(
        <div className="UploadSection" id="transform">
            <h2>Transform your photo here!</h2>
            <h4 id="apiError">Sorry! Free tier API has expired</h4>
            <div className="inputArea">
                
                {
                    loading ? <Loading/> : <> {selectedFile ? 
                        <button id="downloadBtn" onClick={handleDownload}><img src={logOut} alt="" className="downloadIcon"/> Download Image</button> : 
                        
                        <>
                            <label htmlFor="imgInput" id="uploadBtn"><img src={cameraIcon} alt="" className="icon"/> Take Photo </label>
                            <label htmlFor="imgUpload" id="uploadBtn2"><img src={logOut} alt="" className="icon"/> Upload Photo </label>
                        </>
                        
                        
                    }</>
                }
                
                
                <input type="file" onChange={onFileChange} accept="image/*" capture="camera" id="imgInput" style={{ display: 'none' }} />
                <input type="file"  accept="image/*" onChange={onFileChange} style={{ display: 'none' }} id="imgUpload"/>
            </div>
            
            <div style={{border:"3px solid black"}}>
                <div className="createImage" id="outputImg">
                    {selectedFile ? editedImg() : <img src={Example} alt="" id="exampleImg" />}
                </div>
            </div>
            

            

            {selectedFile && 
                <div className="controlContainer">
                    <p>Adjust your character size before downloading</p>
                    <div className="control">
                        <button onClick={()=>{setZoom(zoom+4)}}>Zoom in</button>
                        <button onClick={()=>{setZoom(zoom-4)}}>Zoom out</button>
                    </div>
                </div>
                
            }
        
        </div>
    )
}

export default UploadSection