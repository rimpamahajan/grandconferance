"use client"
import React, { useState, useEffect} from 'react';
import Upperpanel from "./components/Upperpanel/Upperpanel";
import Cities from "./components/Cities/Cities";
import Events from "./components/Events/Events";
import styles from "./page.module.scss";
import Rightpanel from "./components/Rightpanel/Rightpanel";
import Fixednavbar from "./components/Fixednavbar/Fixednavbar";
import Rightmenupanel from "./components/Rightmenupanel/Rightmenupanel";
import Settingspage from "./components/Settingspage/Settingspage";

export default function Home() {

    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const [show_menu, setShowMenu] = useState(false);
    const [show_set_modal, setShowSetModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (show_menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show_menu]);

    const showRightMenu = () => {
        setShowMenu(!show_menu);
    }

    const showSetModal = () => {
        setShowSetModal(!show_set_modal);
    }

    return (
        <div className={styles.main_container}>
            {
                !isNavbarVisible ? <Fixednavbar showRightMenu={showRightMenu}/> : ""
            }
            {
                show_menu &&
                <Rightmenupanel showRightMenu={showRightMenu}/>
            }
            <Rightpanel showSetModal={showSetModal}/>
            {
                show_set_modal &&
                <Settingspage/>
            }
            <Upperpanel showRightMenu={showRightMenu}/>
            <Cities/>
            <Events/>
        </div>    
    );
}
