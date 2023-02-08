import PropTypes from "prop-types";
import { useEffect, useRef, useState, forwardRef } from 'react';
import bgImg from '../components/assets/background.png';
import styles from "./Canvas.module.css";

function Canvas({ values, btnClick }) {
    const image = new Image();
    const image2 = new Image();
    const image3 = new Image();
    const image4 = new Image();


    const canvasRef = useRef();
    const canvasRef2 = useRef();
    const canvasRef3 = useRef();
    const canvasRef4 = useRef();
    const canvas = canvasRef?.current;
    const context = canvas?.getContext('2d');
    const canvas2 = canvasRef2?.current;
    const context2 = canvas2?.getContext('2d');
    const canvas3 = canvasRef3?.current;
    const context3 = canvas3?.getContext('2d');
    const canvas4 = canvasRef4?.current;
    const context4 = canvas4?.getContext('2d');

    const file1 = useRef();

    useEffect(() => {
        drawCanvas();
    });

    function drawCanvas() {

        const {value1, value2, value3, value4} = values;
        image.src = value1;
        image2.src = value2;
        image3.src = value3;
        image4.src = value4;



        image.onload = function () {
            context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
        }
        image2.onload = function () {
            context2.drawImage(image2, 0, 0, context.canvas.width, context.canvas.height);
        }
        image3.onload = function () {
            context3.drawImage(image3, 0, 0, context.canvas.width, context.canvas.height);
        }
        image4.onload = function () {
            context4.drawImage(image4, 0, 0, context.canvas.width, context.canvas.height);
        }   
    }

    
    function onImgClick(e) {
        var name = e.target.getAttribute("name");
        btnClick(name);
    }

    return (

        <div className={styles.photos}>
            <div id="image1" name="i11" className={styles.photo_frame} onClick={onImgClick}>
                <canvas ref={canvasRef} name="value1"></canvas>
                <span id="desc1" className={styles.photo_description}>
                    귀엽다🤟
                </span>
            </div>
            <div id="image2" className={styles.photo_frame} onClick={onImgClick}>
                <canvas ref={canvasRef2} name="value2"></canvas>
                <span id="desc2" className={styles.photo_description}>
                    사랑스럽다😍
                </span>
            </div>
            <div id="image3" className={styles.photo_frame} onClick={onImgClick}>
                <canvas ref={canvasRef3} name="value3"></canvas>
                <span id="desc3" className={styles.photo_description}>
                    멋지다😎
                </span>
            </div>
            <div id="image4" className={styles.photo_frame} onClick={onImgClick}>
                <canvas ref={canvasRef4} name="value4"></canvas>
                <span id="desc4" className={styles.photo_description}>
                💖 그게 바로 나 💖
                </span>
            </div>
        </div>


    );
}

export default Canvas; 