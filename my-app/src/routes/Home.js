/* eslint-disable */
import React from "react";
import { useEffect, useRef, useState, forwardRef } from 'react';
import Canvas from "../components/Canvas";
import styles from "./Home.module.css";


function Home() {

    const [values, setValues] = useState({
        value1: "",
        value2: "",
        value3: "",
        value4: ""
    });

    // const [value, setValue] = useState();
    const { value1, value2, value3, value4 } = values;

    function onChange(e) {
        const { value, name } = { value: URL.createObjectURL(e.target.files[0]), name: e.target.name }
        console.log(name);
        setValues({
            ...values,
            [name]: value,
        })
    }

    return (

        <div className={styles.container}>
            <div className={styles.container2}>
                <Canvas values={values} />

                <div className={styles.footer}>
                    <p className={styles.f_title}>Happy Lunch Time</p>
                    <p className={styles.f_date}>2023.01.23</p>
                </div>

            </div>


            <div className={styles.inpImg}>
                <input name="value1" accept="image/*" type='file' id="imgInp" onChange={onChange} />
                <input name="value2" accept="image/*" type='file' id="imgInp2" onChange={onChange} />
                <input name="value3" accept="image/*" type='file' id="imgInp3" onChange={onChange} />
                <input name="value4" accept="image/*" type='file' id="imgInp4" onChange={onChange} />
            </div>
        </div>
    );

}


export default Home;