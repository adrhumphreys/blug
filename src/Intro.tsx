import { ReactNode } from "react";
import styles from "./Intro.module.css";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  children: ReactNode;
  subtitle?: string;
  isRed?: boolean;
  noPlane?: boolean;
  link?: string;
  linkTitle?: string;
}

export function Intro({
  children,
  subtitle,
  isRed,
  noPlane,
  link,
  linkTitle,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.intro, noPlane && styles.noPlane)}>
        {link && linkTitle && (
          <Link href={link} className={styles.link}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0H0v24h24z" />
                <path
                  fill="#008564"
                  fillRule="nonzero"
                  d="M7.99 11H20v2H7.99v3L4 12l3.99-4z"
                />
              </g>
            </svg>
            {linkTitle}
          </Link>
        )}
        <h1 className={styles.title}>{children}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {!noPlane && (
          <picture className={clsx(styles.picture, isRed && styles.red)}>
            <source
              media="(min-width: 1280px)"
              srcSet={
                isRed ? "/jetplane-desktop-red.svg" : "/jetplane-desktop.svg"
              }
            />
            <source
              media="(min-width: 1024px)"
              srcSet={
                isRed ? "/jetplane-tablet-red.svg" : "/jetplane-tablet.svg"
              }
            />
            <img
              src={isRed ? "/jetplane-mobile-red.svg" : "/jetplane-mobile.svg"}
              alt=""
            />
          </picture>
        )}
      </div>
    </div>
  );
}
