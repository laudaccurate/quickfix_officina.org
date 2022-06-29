import React from "react";
import { useInterval } from "@mantine/hooks";
import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
  useMantineTheme,
} from "@mantine/core";
import bg1 from "../public/images/img-4.webp";
import bg2 from "../public/images/img-2.webp";
import bg3 from "../public/images/img-5.webp";
import bg4 from "../public/images/img-3.webp";

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
    "We offer the best deals on sale, purchase, swap and repair of various Apple Devices and more. We are open for other businesses too. Hit us up..",
  action: {
    label: "Book now",
    link: "#",
  },
};

const images = [bg1, bg2, bg3, bg4];

export default function Banner() {
  const [image, setImage] = React.useState(0);
  const interval = useInterval(
    () => setImage((s) => (s < 3 ? s + 1 : 0)),
    10000
  );
  const { title, description, action } = data;
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  React.useEffect(() => {
    interval.start();
    return interval.stop();
  }, []);

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${images[image].src})` }}
      className={`${cx(classes.card)} transition-all duration-700`}
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

        <div className="w-full lg:mt-5 lg:w-3/5 text-center mx-auto">
          <Text size="lg" className="text-gray-200 text-base">
            {description}
          </Text>
        </div>

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
