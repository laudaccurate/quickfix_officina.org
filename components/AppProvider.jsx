import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Router from "next/router";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import AppFooter from "./Footer";
import AppHeader from "./Header";

const AppProvider = ({ children }) => {
  const router = Router.useRouter();

  const error = {
    fontSize: "12px",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  };

  return (
    <>
      <Head>
        <title>Quickfix Officina</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

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
          colorScheme: "light",
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
              <AppHeader />
              <div className="min-h-[calc(100vh-130px)]">{children}</div>
              <AppFooter />
            </div>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
