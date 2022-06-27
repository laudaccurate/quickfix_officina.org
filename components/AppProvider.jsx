import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Router from "next/router";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import Footer from "./Footer";
import { HeaderMiddle as Header } from "./Headers";
// import AppHeader from "./Header";

const AppProvider = ({ children }) => {
  const router = Router.useRouter();

  const error = {
    fontSize: "12px",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  };

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>Quickfix Officina</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          styles={{
            PasswordInput: { error },
            TextInput: { error },
            NumberInput: { error },
            Textarea: { error },
          }}
          classNames={{
            Modal: {
              modal: "max-w-[min(95vw,700px)] w-full",
              title: "text-center w-full",
              header:
                "bg-primary text-center w-full rounded-md p-2 text-white font-bold",
              body: " border border-solid border-gray-200 rounded-md p-6",
              close: "text-white hover:text-primary",
            },
          }}
          theme={{
            fontFamily:
              'Roboto,-apple-system , BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: "10px",
            headings: {
              fontFamily:
                '"Roboto SlabVariable", Roboto,-apple-system , BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
            colorScheme: { colorScheme },
          }}
        >
          <NotificationsProvider autoClose={4000}>
            <ModalsProvider
              modalProps={{
                centered: true,
                classNames: {
                  modal: "max-w-[min(95vw,550px)] ",
                  body: "border-none !p-2",
                },
              }}
            >
              <div className="h-screen ">
                <Header />
                <div className="min-h-[calc(100vh-130px)]">{children}</div>
                <Footer />
              </div>
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
