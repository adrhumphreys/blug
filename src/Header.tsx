import type { FC } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
type Props = {};

export const Header: FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <p className={styles.linkText}>
        <Link className={styles.link} href="/">
          Posts
        </Link>
      </p>
      <p className={styles.linkText}>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </p>
    </header>
  );
};
