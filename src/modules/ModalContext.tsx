import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextValue {
  onModal: boolean;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  item?: ModalItem;
  setItem: React.Dispatch<React.SetStateAction<ModalItem | undefined>>;
}
const ModalContext = createContext<ModalContextValue>({
  onModal: false,
  setOnModal: () => {},
  setItem: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export interface ModalItem {
  title: string;
  url: string;
  about: JSX.Element;
  skile: string[];
  img: string[];
  git: string;
}

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [onModal, setOnModal] = useState(false);
  const [item, setItem] = useState<ModalItem | undefined>(undefined);

  const value = { onModal, setOnModal, item, setItem };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
