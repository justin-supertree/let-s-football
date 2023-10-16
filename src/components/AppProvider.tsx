import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { store } from "@/store";
import styles from "@/styles";

import type { ReactNode } from "react";

import "react-toastify/dist/ReactToastify.css";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Global styles={styles} />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ChakraProvider>
    </Provider>
  );
};

export default AppProvider;
