import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center leading-[3]">
        <h1 className={title()}>Staking</h1>{" "}
        <h1 className={title({ color: "violet" })}>powered by ERC6551</h1>
        <br />
        <h1 className={title({ size: "sm" })}>
          (Tokenbound Accounts)
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Using Tokenbound ERC6551 accounts on starknet
        </h2>
      </div>

      <div className="flex gap-3 max-w-md">
        <NextLink
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/stake"}
        >
          Stake
        </NextLink>
      </div>

      <div className="mt-8">
        <span>
          Learn more about tokenbound accounts <NextLink href="https://tokenbound.gitbook.io/starknet-tokenbound" target="_blank">here</NextLink>
        </span>
        {/* <Snippet hideCopyButton hideSymbol variant="bordered">
        </Snippet> */}
      </div>
    </section>
  );
}
