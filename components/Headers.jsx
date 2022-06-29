import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Collapse,
  Burger,
} from "@mantine/core";
import { useBooleanToggle, useWindowScroll } from "@mantine/hooks";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import logo from "../public/images/qf-logo.png";
// import { ThemeSwitch } from "./ThemeSwitch";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 320,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 320,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    scrollBehavior: "smooth",
    display: "block",
    lineHeight: 1,
    padding: "10px 15px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.largerThan("sm")]: {
      padding: "12px 15px",
    },

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#services",
    label: "Our Services",
  },
  {
    link: "#contact",
    label: "Contact Us",
  },
];

const socials = [
  {
    icon: <BrandTwitter size={22} />,
    link: "https://twitter.com/DodooRegwels",
    label: "Twitter",
  },
  {
    icon: <BrandYoutube size={22} />,
    link: "https://www.instagram.com/quickfix_officina/",
    label: "Youtube",
  },
  {
    icon: <BrandInstagram size={22} />,
    link: "https://www.instagram.com/quickfix_officina/",
    label: "Instagram",
  },
];

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="mt-4">
        <a href="/a">
          <Image src={logo} alt="logo" width={80} height={80} />
        </a>
      </div>
    </Link>
  );
}

export function HeaderMiddle() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [scroll, scrollTo] = useWindowScroll();
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    // <Link key={link.label} href={link.link} passHref>
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        // event.preventDefault();

        setActive(link.link);
        toggleOpened(false);
      }}
    >
      {link.label}
    </a>
    // </Link>
  ));

  return (
    <Header
      className={`${
        scroll.y >= 60 && "shadow-md"
      } fixed border-0 transition-all duration-300`}
    >
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Logo />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {socials.map((item) => (
            <ActionIcon size="lg" key={item.label}>
              <Link href={item.link} passHref>
                <a target="_blank" className="text-primary">
                  {item.icon}
                </a>
              </Link>
            </ActionIcon>
          ))}
        </Group>
      </Container>
      <Collapse
        in={opened}
        className="pt-5 mb-3"
        // transitionDuration={300}
        // transitionTimingFunction="linear"
      >
        {items}
      </Collapse>
    </Header>
  );
}
