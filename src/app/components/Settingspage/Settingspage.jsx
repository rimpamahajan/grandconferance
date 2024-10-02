"use client"
import React, { useState, useEffect} from 'react';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Settingspage.module.scss";

export default function Settingspage() {

    const cards = [
        {id: "1", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2024/01/Grand-Conference-City-Events-WordPress-Theme.jpg"},
        {id: "2", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2024/01/Grand-Conference-Multi-Events-WordPress-Theme.jpg"},
        {id: "3", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2024/01/Grand-Conference-Education-Event-Conference-WordPress-Theme.jpg"},
        {id: "4", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2022/02/Grand-Conference-Design-Awards-Conference-WordPress-Theme-%E2%80%93-Just-another-Grand-Conference-Event-Conference-WordPress-Theme-Sites-site.jpg"},
        {id: "5", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2022/02/Grand-Conference-Design-Conference-WordPress-Theme-%E2%80%93-Just-another-Grand-Conference-Event-Conference-WordPress-Theme-Sites-site.jpg"},
        {id: "6", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2022/02/Grand-Conference-Business-Conference-WordPress-Theme-%E2%80%93-Just-another-Grand-Conference-Event-Conference-WordPress-Theme-Sites-site.jpg"},
        {id: "7", url: "https://grandconference.themegoods.com/v5/landing/wp-content/uploads/sites/9/2022/02/Home-5-%E2%80%93-Business-Forum-%E2%80%93-Grand-Conference-Event-Conference-WordPress-Theme.jpg"}
    ];
    const router = useRouter();

    return (
        <div className={styles.main_container}>
            <div className={styles.sub_container}>
                <a href="https://themeforest.net/checkout/104880027/create_account?clickid=1wcQ7MycuxyKUhEVfhyH4V3LUkCUzHSgK0NXTA0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1240803&mp_value1=&utm_campaign=af_impact_radius_1240803&utm_medium=affiliate&utm_source=impact_radius" className={styles.purchase_div}>
                    <div className={styles.purchase_text}>Purchase Theme $59</div>
                </a>    
                <div className={styles.sub_text_box}>
                    <div className={styles.sub_text}>Ready to use Websites</div>
                    <div className={styles.description}>Here are example of predefined websites that can be installed within one click.</div>
                </div>
                <div className={styles.grid_box}>
                    {
                        cards.map((item)=>
                            <a key={item.id} href="https://grandconferencev5-2.themegoods.com/multi-events/" className={styles.card_wrapper}>
                                <img className={styles.card} src={item.url} alt="" />
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}