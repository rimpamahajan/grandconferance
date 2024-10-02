"use client";
import React, { useState } from 'react';
import styles from "./Searchbox.module.scss";

export default function Searchbox() {

    const category = [{id: "festival", value: "Festival"}, {id: "spotlight", value: "Spotlight"}];
    const location = [{id: "florence", value: "Florence"}, {id: "milan", value: "Milan"}, {id: "rome", value: "Rome"}, {id: "venice", value: "Venice"}];
    const [formdata, setFormdata] = useState({event_name: "", category: "", location: "", start_date: ""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevstate => ({ ...prevstate, [name]: value }));
    };

    return (
        <div className={styles.main_container}>
            <input 
                className={styles.search_input} 
                type="text" 
                name="event_name" 
                value={formdata.event_name} 
                onChange={handleChange} 
                placeholder="Search Event" 
            />
            <select
                className={styles.dropdown} 
                name="category" 
                value={formdata.category} 
                onChange={handleChange} 
            >
                <option value="">Select Category</option>
                {category.map((item) => (
                    <option key={item.id} value={item.id}>{item.value}</option>
                ))}
            </select>
            <select
                className={styles.dropdown} 
                name="location" 
                value={formdata.location} 
                onChange={handleChange} 
            >
                <option value="">Select Location</option>
                {location.map((item) => (
                    <option key={item.id} value={item.id}>{item.value}</option>
                ))}
            </select>
            <input
                className={styles.search_input_date} 
                type="date" 
                name="start_date" 
                value={formdata.start_date}
                autoComplete="off" 
                onChange={handleChange} 
            />
            <div className={styles.search_btn}>Search</div>
        </div>
    );
}