import Search from "../../../common/Search";
import styles from "./Header.module.css"
import {useState} from "react";

export default function Header() {
    
    return (
    <header >
      <section className={styles.leftHeader}>
        <h6>Header</h6>
        </section>
        <section className={styles.rightHeader}>
            <Search />
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
