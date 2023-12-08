/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";

import axiosWithConfig, { setAxiosConfig } from "@/utils/apis/axiosWithConfig";

interface Context {
  token: string;
  changeToken: (token?: string) => void;
  id: string;
  changeIdUser: (user_id?: string) => void;
  username: string;
  changeUsername: (username?: string) => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  token: "",
  changeToken: () => {},
  id: "",
  changeIdUser: () => {},
  username: "",
  changeUsername: () => {},
};

const TokenContext = createContext<Context>(contextValue);

export function TokenProvider({ children }: Readonly<Props>) {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [id, setIdUser] = useState(localStorage.getItem("id") ?? "");
  const [username, setUsername] = useState(
    localStorage.getItem("username") ?? ""
  );

  useEffect(() => {
    setAxiosConfig(token);
  }, [token]);

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        changeToken();
      }

      return Promise.reject(error);
    }
  );

  const changeToken = useCallback(
    (token?: string) => {
      const newToken = token ?? "";
      setToken(newToken);
      if (token) {
        localStorage.setItem("token", newToken);
      } else {
        localStorage.removeItem("token");
      }
    },
    [token]
  );

  const changeIdUser = useCallback(
    (id?: string) => {
      const newIdUser = id ?? "";
      setIdUser(newIdUser);
      if (id) {
        localStorage.setItem("id", JSON.stringify(newIdUser));
      } else {
        localStorage.removeItem("id");
      }
    },
    [id]
  );

  const changeUsername = useCallback(
    (username?: string) => {
      const newUser = username ?? "";
      setUsername(newUser);
      if (username) {
        localStorage.setItem("username", JSON.stringify(newUser));
      } else {
        localStorage.removeItem("username");
      }
    },
    [username]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      id,
      username,
      changeToken,
      changeIdUser,
      changeUsername,
    }),
    [token, id, username, changeUsername, changeToken, changeIdUser]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }

  return context;
}
