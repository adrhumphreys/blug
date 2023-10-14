import { Container } from "@/src/Container";
import { Intro } from "@/src/Intro";
import styles from "./page.module.css";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Intro subtitle="Developer of sorts">
        Kia Ora! I&apos;m&nbsp;Adrian.
      </Intro>
      <Container>
        <p className={styles.label}>Posts</p>
        <ul className={styles.posts}>
          {allPosts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((post) => (
              <li key={post._id} className={styles.post}>
                <h1 className={styles.title}>
                  <Link href={post.url}>{post.title}</Link>
                </h1>
                <p className={styles.description}>{post?.description}</p>
                <time className={styles.time}>
                  {new Date(post.date).toLocaleString("en-NZ", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
}
