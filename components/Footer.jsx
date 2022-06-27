import React from "react";
import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import Logo from "./Headers";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 10,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={22} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={22} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={22} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
