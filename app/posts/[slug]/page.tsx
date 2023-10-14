import { Container } from "@/src/Container";
import { Intro } from "@/src/Intro";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

interface Page {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }: Page) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return {};
  return { title: post.title };
};

export default function Page({ params }: Page) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return <p>four oh four</p>;

  const Content = getMDXComponent(post.body.code);

  return (
    <div>
      <Intro
        subtitle={post?.description}
        noPlane
        linkTitle="Go back to posts"
        link="/"
      >
        {post.title}
      </Intro>
      <Container>
        <Content />
      </Container>
    </div>
  );
}
