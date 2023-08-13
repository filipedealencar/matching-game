import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setUserData: Dispatch<SetStateAction<UserData>>;
  userData: UserData;
}

interface GlobalProps {
  children: ReactNode;
}

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

interface UserData {
  name: string;
  level: number | undefined;
  time: Time | null;
  score: number;
}

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    level: undefined,
    time: null,
    score: 0,
  });

  return (
    <GlobalContext.Provider
      value={{
        setUserData,
        userData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
