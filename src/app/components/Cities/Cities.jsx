import styles from "./Cities.module.scss";

export default function Cities() {

    const cards = [
        {id: "florance", name: "Florance", url: "https://grandconferencev5-2.themegoods.com/city-events/wp-content/uploads/sites/3/2024/01/florence-italy-with-landmark-towers-at-dusk-2023-11-27-04-57-35-utc.jpg"},
        {id: "rome", name: "Rome", url: "https://grandconferencev5-2.themegoods.com/city-events/wp-content/uploads/sites/3/2024/01/colosseum-at-sunrise-in-rome-2023-11-27-05-09-17-utc.jpg"},
        {id: "milan", name: "Milan", url: "https://grandconferencev5-2.themegoods.com/city-events/wp-content/uploads/sites/3/2024/01/terraces-of-cathedral-2023-11-27-04-58-15-utc.jpg"},
        {id: "venice", name: "Venice", url: "https://grandconferencev5-2.themegoods.com/city-events/wp-content/uploads/sites/3/2024/01/amazing-sunset-and-evening-cityscape-of-venice-wit-2023-11-27-05-32-27-utc.jpg"},
    ];
    
    return (
        <div className={styles.main_container}>
            <h2 className={styles.header}>Popular cities</h2>
            <div className={styles.sub_header}>Book these events for a close-up look at the city.</div>
            <div className={styles.box_wrapper}>
                {
                    cards.map((item)=>
                        <div key={item.id} className={styles.card_wrapper}>
                            <img className={styles.card} src={item.url} alt="" />
                            <div className={styles.card_name}>{item.name}</div>
                        </div>
                    )
                }
            </div>
        </div>    
    );
}