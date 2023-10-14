import { Container } from "@/src/Container";
import { Intro } from "@/src/Intro";

export default function Page() {
  return (
    <div>
      <Intro subtitle="Personal projects I’ve been working on" isRed>
        Projects
      </Intro>
      <Container>
        <ul>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/compliments.jar.nz">
                Compliments
              </a>
              :
            </strong>{" "}
            A quick react app to share compliments from the Reply All podcast.
            You can view it <a href="https://compliments.jar.nz">here</a>{" "}
            (Protip, you can change the name).
          </li>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/silverstripe-fixtures">
                Fixtures
              </a>
              :
            </strong>{" "}
            A module that allows users to create fixtures for automated testing.
            Silverstripe projects have traditionally loaded fixtures via yaml
            files. We had a need to create fixtures programmatically, so I made
            a module to achieve it. This supports dependencies using a very
            basic implementation of Kahn’s algorithm.
          </li>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/impetuous">Impetuous</a>:
            </strong>{" "}
            A module to statically cache responses via middleware in
            Silverstripe. Designed to be extended upon allowing projects to use
            it with different circumstances/context around cache lifetime and
            invalidation strategy.
          </li>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/telescope">Telescope</a>:
            </strong>{" "}
            A reimplementation of Laravels Telescope in Silverstripe. Front end
            is written as a SPA in React.
          </li>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/recipes">Recipes</a>:
            </strong>{" "}
            A recipe website built for my partner. Uses Gatsby for the frontend
            and stores files in markdown. Makes use of Netlify CMS for easy
            editing and free hosting. View it <a href="http://jar.nz">here</a>.
          </li>
          <li>
            <strong>
              <a href="https://github.com/adrhumphreys/safe-zone">Safezone</a>:
            </strong>{" "}
            Basic react app used to create “safe zones” for images based on
            ratios
          </li>
        </ul>
        <h2 id="some-of-the-open-source-contributions-ive-made">
          Some of the open source contributions I’ve made:
        </h2>
        <ul>
          <li>
            <a href="https://github.com/silverstripe/silverstripe-assets/pull/415">
              Silverstripe Assets (recursive performance issue)
            </a>
            : Read more about it <a href="/posts/silverstripe-assets/">here</a>.
          </li>
          <li>
            <a href="https://github.com/silverstripe/silverstripe-assets/pull/364">
              Silverstripe Assets (<code>Folder::find_or_make</code> bug fix)
            </a>
            : This was found when trying to track down why folders were being
            duplicated in the database.
          </li>
          <li>
            <a href="https://github.com/silverstripe/silverstripe-cms/pull/2493">
              Silverstripe CMS (Increase performance of the CMS through caching)
            </a>
            : When profiling the CMS performance for a client web site, I found
            that 7ish% of the time taken for a request was generating CSS
            classes for page icons.
          </li>
          <li>
            <a href="https://github.com/silverstripe/silverstripe-cms/pull/2476">
              Silverstripe CMS (Reduce complexity)
            </a>
            : Removed code for checking if an item was archived that was
            implemented differently elsewhere.
          </li>
          <li>
            <a href="https://github.com/silverstripe/silverstripe-versioned/pull/243">
              Silverstripe Versioned (Fix incorrect state)
            </a>
            : When <code>DataObjects</code> were archived the instance of the{" "}
            <code>DataObject</code> would retain their previous version.
          </li>
          <li>
            <a href="https://github.com/dnadesign/silverstripe-populate/pull/32">
              DNA Design Populate (Add support for Fluent)
            </a>
            : Projects using fluent wouldn’t have their data correctly purged
            which meant exceptions would be thrown when trying to rebuild the
            data
          </li>
        </ul>
      </Container>
    </div>
  );
}
