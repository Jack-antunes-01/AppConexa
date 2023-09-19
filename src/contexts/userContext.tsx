import React, {
  Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';

import { UserModel } from '@app/models/user';

type UserContextValue = {
  user: UserModel,
  setUser: Dispatch<SetStateAction<UserModel>>;
};

export const UserContext = createContext<UserContextValue | null>(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserModel>({
    email: '',
    nome: '',
  });

  const userContextValue: UserContextValue = useMemo(() => ({
    user,
    setUser,
  }), [user]);

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
}

const useUserContext = (): UserContextValue => {
  const userContextState = useContext(UserContext);

  if (userContextState === null) {
    throw new Error("Can't use useUserContext on a component not wrapped by UserContextProvider");
  }

  return userContextState;
};

export { UserContextProvider, useUserContext };
