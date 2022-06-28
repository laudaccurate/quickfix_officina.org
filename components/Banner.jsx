import React from "react";
import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
  useMantineTheme,
} from "@mantine/core";
import bg from "../public/images/img-4.jpg";

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: "absolute",
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));

const data = {
  image:
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  title: "Plan & save",
  description:
    "Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific",
  action: {
    label: "Book now",
    link: "#",
  },
};

export default function Banner() {
  const { image, title, description, action } = data;
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${bg.src})` }}
      className={cx(classes.card)}
      // {...others}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Text className="text-center text-white text-2xl font-bold">
          {title}
        </Text>

        <Text size="lg" className="text-gray-200 text-center text-base">
          {description}
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component="a"
          size="md"
          href={action.link}
        >
          {action.label}
        </Button>
      </div>
    </Card>
  );
}
