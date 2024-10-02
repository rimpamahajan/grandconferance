"use client"
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import styles from "./Fixednavbar.module.scss";
import logo_black from "../../../../public/images/logo_black.png";
import { HiOutlineBars4 } from "react-icons/hi2";

export default function Fixednavbar({showRightMenu}) {

    const [menu, setMenu ] = useState([
        {id: "home", name: "Home"}, {id: "discover_the_city", name: "Discover The City"}, {id: "marchandising", name: "Marchandising"}, {id: "contact", name: "Contact"}
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
            <div className={styles.wrapper}>
                <Link href="/"><Image className={styles.logo} src={logo_black} alt="Logo"/></Link>
                <div className={styles.menu_div}>
                    {
                        menu.map((item)=> 
                            <div key={item.id} onClick={(e)=> handleClick(item.id)}>{item.name}</div>
                        )
                    }
                </div>
            </div>    
            <div className={styles.create_event_box}>
                <div className={styles.create_event_btn}>Create event</div>
                <HiOutlineBars4 className={styles.menu_icon} onClick={showRightMenu}/>
            </div>    
        </div>
    );
}