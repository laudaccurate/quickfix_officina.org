import React from "react";
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
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
  { title: "Sales", icon: Devices, color: "violet" },
  { title: "Purchase", icon: Businessplan, color: "indigo" },
  { title: "Swap", icon: Repeat, color: "blue" },
  { title: "Repair", icon: Tool, color: "green" },
  { title: "Screens/Batteries", icon: BatteryCharging2, color: "cyan" },
  { title: "Accessories", icon: DeviceWatch, color: "teal" },
  { title: "Home Services", icon: HotelService, color: "red" },
  { title: "Office Services", icon: BuildingSkyscraper, color: "pink" },
  { title: "Delivery", icon: TruckDelivery, color: "orange" },
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
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
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
