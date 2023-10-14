import { Container } from "@/src/Container";
import { Intro } from "@/src/Intro";

export default function Page() {
  return (
    <div>
      <Intro subtitle="I prefer mail">Contact me.</Intro>
      <Container>
        <p>Howdy,</p>
        <p>
          Uhm like the details are in the footer, this page is here to make the
          header look better
        </p>
        <p>
          But feel free to send me an email, to ask for my postal address, I
          promise I&apos;ll write back
        </p>
        <p>Kind regards,</p>
        <p> Adrian</p>
      </Container>
    </div>
  );
}
