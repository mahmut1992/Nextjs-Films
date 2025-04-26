import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with * by&nbsp;
      <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
        Fırat Şabahat
      </Link>
    </footer>
  );
}
