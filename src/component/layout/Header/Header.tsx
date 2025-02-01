import styles from "./Header.module.css"
import {useState} from "react";
import search from "../../../assets/icons/search02.svg";

export default function Header() {
    const [value, setValue] = useState('');
    const handleChange = (e:any) => {
        setValue(e.target.value);
    };
    return (
    <header >
      <section className={styles.leftHeader}>
        <h6>Header</h6>
        </section>
        <section className={styles.rightHeader}>
            <div className={styles.searchWrapper}>
                <div className={styles.searchIcon}>
                    <div >
                        <img src={search} alt="search" />
                    </div>
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>
              <div >
                  <h6>Header</h6>
              </div>
              <div >
                  <h6>Header</h6>
              </div>
        </section>
    </header>
  )
}
