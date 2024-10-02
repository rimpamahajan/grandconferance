import React, { useState, useEffect} from 'react';
import styles from "./Rightpanel.module.scss";
import { FiSettings } from "react-icons/fi";
import { TfiShoppingCart } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";

export default function Rightpanel({showSetModal}) {

    const [position, setPosition] = useState(false);

    const showSettingsModal = () => {
        setPosition(!position);
        showSetModal();
    }

    return (
        <div style={{right: position ? '30%' : '0'}} className={styles.parent_container}>
            <div  className={styles.main_container}>
                <div className={styles.tooltip_container}>
                    <FiSettings className={styles.icons} onClick={showSettingsModal}/>
                    <span className={styles.tooltip_text}>Choose Theme Demos</span>
                </div>
                <div className={styles.tooltip_container}>
                    <a href="https://docs.themegoods.com/docs/grand-conference/">
                        <TfiBook className={styles.icons}/>
                    </a>
                    <span className={styles.tooltip_text}>Choose Theme Demos</span>
                </div>
                <div className={styles.tooltip_container}>
                    <a href="https://themeforest.net/checkout/104870089/create_account?clickid=1wcQ7MycuxyKUhEVfhyH4V3LUkCUxPTEK0NXTA0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1240803&mp_value1=&utm_campaign=af_impact_radius_1240803&utm_medium=affiliate&utm_source=impact_radius">
                        <TfiShoppingCart className={styles.icons}/>
                    </a>    
                    <span className={styles.tooltip_text}>Choose Theme Demos</span>
                </div>
            </div>
        </div>
    );
}