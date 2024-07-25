import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    NavbarBrand,
} from "@nextui-org/navbar";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
} from "@/components/icons";


export default function Footer() {
    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="flex flex-col md:flex-row items-center">
            <NavbarContent as="li" className="gap-3 lg:max-w-fit lg:hidden flex flex-col justify-center items-center w-full">
                <NextLink className="flex justify-start items-center gap-1" href="https://twitter.com/blessed_mayowa">
                    Design by <p className="text-primary">Mayowa</p>
                </NextLink>

                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                </Link>

                <NavbarItem className="flex gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarBrand as="li" className="hidden md:flex gap-3 max-w-fit">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="basis-full hidden md:flex" justify="center">
                <NextLink className="flex justify-start items-center gap-1" href="https://twitter.com/blessed_mayowa">
                    Design by <p className="text-primary">Mayowa</p>
                </NextLink>

            </NavbarContent>

            <NavbarContent
                className="md:flex basis-full hidden"
                justify="end"
            >
                <NavbarItem className="flex gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                    <GithubIcon className="text-default-500" />
                </Link>
            </NavbarContent> */}
        </NextUINavbar>
    )
}