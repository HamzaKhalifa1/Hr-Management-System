import { useState } from 'react'
import styles from "./Search.module.css"
import search from "../../assets/icons/search02.svg";

export default function Search() {
    const [value, setValue] = useState('');
    const handleChange = (e:any) => {
        setValue(e.target.value);
    };
  return (
    <div className={styles.searchWrapper}>
                <div className={styles.searchIcon}>
                    <img className={styles.searchImg} src={search} alt="search" />
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>
  )
}
