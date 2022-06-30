import React from "react";
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
} from "@mantine/core";
import {
  Devices,
  Businessplan,
  Repeat,
  Tool,
  HotelService,
  BuildingSkyscraper,
  BatteryCharging2,
  TruckDelivery,
  DeviceWatch,
} from "tabler-icons-react";

const mockdata = [
  {
    title: "Sales",
    icon: Devices,
    color: "violet",
    style: {
      // backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
  },
  {
    title: "Purchase",
    icon: Businessplan,
    color: "indigo",
    style: {
      backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
  },
  {
    title: "Swap",
    icon: Repeat,
    color: "blue",
    style: {
      backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    },
  },
  {
    title: "Repair",
    icon: Tool,
    color: "green",
    style: {
      backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
    },
  },
  {
    title: "Screen/Battery",
    icon: BatteryCharging2,
    color: "cyan",
    style: {
      backgroundImage:
        "linear-gradient(19deg, #8c4f4b 0%, #DDD6F3 50%, #1736bc 100%)",
    },
  },
  {
    title: "Accessories",
    icon: DeviceWatch,
    color: "teal",
    style: {
      backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    },
  },
  {
    title: "Home Services",
    icon: HotelService,
    color: "red",
    style: {
      backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    },
  },
  {
    title: "Office Services",
    icon: BuildingSkyscraper,
    color: "pink",
    style: {
      backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
    },
  },
  {
    title: "Delivery",
    icon: TruckDelivery,
    color: "orange",
    style: {
      backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    },
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    padding: 5,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default function Features() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      style={item.style}
      className={classes.item}
    >
      <item.icon color={theme.white} size={32} />
      <Text className="text-white font-medium text-base" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder className={classes.card}>
      <Group position="center">
        <Text className="text-xl mt-3 font-semibold">Our Services</Text>
        {/* <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor> */}
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
