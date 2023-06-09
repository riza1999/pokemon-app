import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default MyApp;
