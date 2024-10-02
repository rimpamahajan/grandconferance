"use client"
import React, { useState, useEffect } from 'react';
import styles from "./Rightmenupanel.module.scss";
import { TfiClose } from "react-icons/tfi";
import {useRouter} from "next/navigation";

export default function Rightmenupanel({showRightMenu}) {

    const [menu, setMenu ] = useState([
        {id: "home", name: "Home"}, {id: "discover-the-city", name: "Discover The City"}, {id: "marchandising", name: "Marchandising"}, {id: "contact", name: "Contact"}
    ]);
    const router = useRouter();

    const handleClick = (id) => {
        if (id === "home"){
            router.push("/");
        }else {
            router.push(`/${id}`);
        }
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.close_btn} onClick={showRightMenu}>
                <TfiClose className={styles.close_icon}/>
            </div>
            <div className={styles.menu_div}>
                {
                    menu.map((item)=> 
                        <div key={item.id} className={styles.menu} onClick={(e)=> handleClick(item.id)}>{item.name}</div>
                    )
                }
            </div>
        </div>
    );
}