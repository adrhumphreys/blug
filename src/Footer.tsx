import type { FC } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import clsx from "clsx";

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={clsx(styles.line, styles.lineOne)}
        src="/footer-line-1.svg"
        alt=""
        width="231"
        height="194"
      />
      <Image
        className={clsx(styles.line, styles.lineTwo)}
        src="/footer-line-2.svg"
        alt=""
        width="99"
        height="378"
      />
      <footer className={styles.footer}>
        <p className={styles.content}>
          Check me out on{" "}
          <a className={styles.link} href="https://github.com/adrhumphreys/">
            Github
          </a>
          . <br /> Made in NZ, by Adrian <br />
          Get in touch via:{" "}
          <a className={styles.link} href="mailto:adrhumphreys@gmail.com">
            adrhumphreys@gmail.com
          </a>
          ,<br /> I would ❤️ to hear from you
        </p>
      </footer>
    </div>
  );
};
