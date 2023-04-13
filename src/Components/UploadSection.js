import React, {useState, useEffect} from "react";
import "./UploadSection.css"
import Example from "../assets/Example.png"
import front from "../assets/front.png"
import logOut from "../assets/🦆 icon _log out_.png"
import back from "../assets/back.png"
import html2canvas from "html2canvas";
import Loading from "./Loading";

const UploadSection = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [imageUrl, setImageUrl] = useState(null);
    const [zoom, setZoom] = useState(200)
    const [loading,setLoading] = useState(false)

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    } 

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image_file', selectedFile);
        console.log(formData);
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
                
                <img src={URL.createObjectURL(selectedFile)} alt="" style={mainPic} id="pic1"/>
                <img src={front} alt="" style={overlayImg} id="pic2"/>
                <img src={back} alt="" style={stableImg} id="pic3"/>
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
                
                {
                    loading ? <Loading/> : <> {selectedFile ? 
                        <button id="downloadBtn" onClick={handleDownload}><img src={logOut} alt="" className="downloadIcon"/> Download Image</button> : 
                        <label htmlFor="imgInput" id="uploadBtn"><img src={logOut} alt="" className="icon"/> Upload Image </label>
                    }</>
                }
                
                
                <input type="file" onChange={onFileChange} accept="image/*" capture="camera" id="imgInput" style={{ display: 'none' }} />
            </div>
            
            <div style={{border:"3px solid black"}}>
                <div className="createImage" id="outputImg">
                    {selectedFile ? editedImg() : <img src={Example} alt="" id="exampleImg" />}
                </div>
            </div>
            

            

            {selectedFile && 
                <div className="control">
                    <button onClick={()=>{setZoom(zoom+4)}}>+</button>
                    <button onClick={()=>{setZoom(zoom-4)}}>-</button>
                </div>
            }
            
            
            <p>We do not collect your photo.</p>
        </div>
    )
}

export default UploadSection