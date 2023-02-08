/* eslint-disable */
import React from "react";
import { useEffect, useRef, useState, forwardRef } from 'react';
import Canvas from "../components/Canvas";
import styles from "./Home.module.css";
import html2canvas from "html2canvas"


function Home() {

    const [values, setValues] = useState({
        value1: "",
        value2: "",
        value3: "",
        value4: ""
    });

    // const [value, setValue] = useState();
    const { value1, value2, value3, value4 } = values;
    const file1 = useRef("");
    const file2 = useRef("");
    const file3 = useRef("");
    const file4 = useRef("");

    function onChange(e) {
        const { value, name } = { value: URL.createObjectURL(e.target.files[0]), name: e.target.name }
        console.log(name);
        setValues({
            ...values,
            [name]: value,
        })
    }


    // 화면 캡처
    const onCapture = () => {
        console.log("캡처!");
        html2canvas(document.getElementById('container2')).then(canvas => {
            onSave(canvas.toDataURL('image/png'), 'image-downloda.png')
        });
    };

    // 캡처 이미지 저장
    const onSave = (url, fileName) => {
        console.log('저장');
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = fileName;
        link.click();
        document.body.removeChild(link);

    }


    const onClick = (name) => {
        switch (name) {
            case "value1" : file1.current.click(); break;
            case "value2" : file2.current.click(); break;
            case "value3" : file3.current.click(); break;
            case "value4" : file4.current.click(); break;
        }
    }


    return (

        <div className={styles.container}>
            <div id="container2" className={styles.container2}>
                <Canvas values={values} btnClick={onClick}/>

                <div className={styles.footer}>
                    <p className={styles.f_title}>Happy Lunch Time</p>
                    <p className={styles.f_date}>며네네컷</p>
                </div>

            </div>


            <div className={styles.inpImg}>
                <input name="value1" accept="image/*" type='file' id="imgInp" onChange={onChange} ref={file1}/>
                <input name="value2" accept="image/*" type='file' id="imgInp2" onChange={onChange} ref={file2}/>
                <input name="value3" accept="image/*" type='file' id="imgInp3" onChange={onChange} ref={file3}/>
                <input name="value4" accept="image/*" type='file' id="imgInp4" onChange={onChange} ref={file4}/>
            </div>
            <div className={styles.download}>
                <button className={styles.btn} onClick={onCapture}>download</button>
            </div>
        </div>
    );

}


export default Home;