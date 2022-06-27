import React from "react";
import {
  createStyles,
  Header,
  Group,
  Collapse,
  Burger,
  // Container,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/qf-logo.png";

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    [theme.fn.smallerThan("md")]: {
      padding: "0.7rem 1rem",
    },
    textTransform: "uppercase",
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/register",
    label: "register",
  },
  {
    link: "/login",
    label: "login",
  },
  {
    link: "/contact",
    label: "Contact Us",
  },
];

export default function AppHeader() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link href={link.link} key={link.label} passHref>
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={() => toggleOpened(false)}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header>
      <div className="px-10 my-auto">
        <div style={{ paddingBottom: 5 }}>
          <div className={classes.inner}>
            <Link href="/" passHref>
              <div className="mt-3">
                <a href="/a">
                  <Image src={logo} alt="logo" width={80} height={80} />
                </a>
              </div>
            </Link>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
            />
          </div>
          <Collapse
            in={opened}
            className={classes.burger}
            // transitionDuration={300}
            // transitionTimingFunction="linear"
          >
            {items}
          </Collapse>
        </div>
      </div>
    </Header>
  );
}
