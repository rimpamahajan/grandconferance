"use client"
import React, { useRef, useState } from 'react';
import styles from './Events.module.scss';
import {useRouter} from "next/navigation";
import { TfiCalendar } from "react-icons/tfi";
import { TfiTicket } from "react-icons/tfi";
import { PiMapPinLight } from "react-icons/pi";

export default function Events() {

    const cards = [
        {
            id: "autumn-festival", 
            name: "Mid-Autumn Festival", 
            url: "https://grandconferencev5-2.b-cdn.net/city-events/wp-content/uploads/sites/3/2024/01/activities-for-a-happy-fall-improving-yourself-w-2023-11-27-05-05-47-utc-700x466.jpg", 
            start_date: "December 10", 
            time: "",
            venue: "Milam",
            ticket: "Free"
        },
        {
            id: "santa-ana-winter-village", 
            name: "Santa Ana Winter Village", 
            url: "https://grandconferencev5-2.b-cdn.net/city-events/wp-content/uploads/sites/3/2024/01/gomel-belarus-city-park-in-winter-night-chapel-2023-11-27-05-14-20-utc-700x466.jpg", 
            start_date: "December 17", 
            time: "8:00 am",
            venue: "Rome",
            ticket: "Free"
        },
        {
            id: "brew-at-the-zoo", 
            name: "Brew at the Zoo", 
            url: "https://grandconferencev5-2.b-cdn.net/city-events/wp-content/uploads/sites/3/2024/01/people-group-crowd-enjoys-at-tables-with-food-and-2023-11-27-04-59-05-utc-700x466.jpg", 
            start_date: "December 19", 
            time: "",
            venue: "Rome",
            ticket: "Free"
        },
        {
            id: "concerts-in-the-park", 
            name: "Concerts in the Park", 
            url: "https://grandconferencev5-2.b-cdn.net/city-events/wp-content/uploads/sites/3/2024/01/people-from-behind-girls-at-a-nightclub-in-downto-2023-11-27-05-32-18-utc-700x466.jpg", 
            start_date: "December 20", 
            time: "8:00 am",
            venue: "Venice",
            currency: "$",
            ticket: "10.00"
        },
        {
            id: "chicano-heritage-festival", 
            name: "Chicano Heritage Festival", 
            url: "https://grandconferencev5-2.b-cdn.net/city-events/wp-content/uploads/sites/3/2024/01/cheerful-group-of-festival-goers-dancing-in-front-2023-11-27-05-24-28-utc-700x466.jpg", 
            start_date: "December 24", 
            time: "8:00 am",
            venue: "Venice",
            ticket: "Free"
        }
    ];
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const router = useRouter();

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const stopDrag = () => {
        setIsDragging(false);
    };

    const onDrag = (e) => {
        e.preventDefault();
        if (!isDragging) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) *2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleClick = (id) => {
        router.push(`/event/${id}`);
    } 

    return (
        <div className={styles.main_container}>
            <h2 className={styles.header}>2024 Spotlight Events</h2>
            <div className={styles.sub_header}>Discover more of the activities with our curated event collections.</div> 
            <div className={styles.slider_container} 
                ref={sliderRef} 
                onMouseDown={startDrag} 
                onMouseLeave={stopDrag} 
                onMouseUp={stopDrag} 
                onMouseMove={onDrag}
            >
                {
                    cards.map((item)=>
                        <div className={styles.slider_item} key={item.id} onClick={(e)=> handleClick(item.id)}>
                            <img className={styles.image_box} src={item.url} alt=""/>
                            <div className={styles.info_box}>
                                <div className={styles.event_name}>{item.name}</div>
                                <div className={styles.date_box}>
                                    <TfiCalendar className={styles.date_icon}/>
                                    <div className={styles.date}>{item.time !== "" ? `${item.start_date} @ ${item.time}` : item.start_date}</div>
                                </div>
                                <div className={styles.ticket_wrapperbox}>
                                    <div className={styles.ticket_box}>
                                        <TfiTicket className={styles.ticket_icon}/>
                                        <div className={styles.ticket}>{item.currency ? `${item.currency}${item.ticket}` : item.ticket}</div>
                                    </div>
                                    <div className={styles.ticket_box}>
                                        <PiMapPinLight className={styles.ticket_icon}/>
                                        <div style={{fontWeight: "normal"}} className={styles.ticket}>{item.venue}</div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    )
                }
            </div>
        </div>    
    );
};