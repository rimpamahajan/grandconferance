"use client"
import React, { useState, useEffect } from 'react';
import styles from "./Upperpanel.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Searchbox from "../../components/Searchbox/Searchbox";
import background from "../../../../public/images/background.jpg";

export default function Upperpanel({showRightMenu}) {

    const isRightMenu = () => {
        showRightMenu();
    }

    return (
        <div style={{background}} className={styles.image_container}>
            <div className={styles.inner_container}>
                <Navbar isRightMenu={isRightMenu}/>
                <div className={styles.header_wraper}>
                    <h1 className={styles.header}>An Unexpected City Awaits</h1>
                    <Searchbox/>
                </div>
            </div>
        </div>
    );
}