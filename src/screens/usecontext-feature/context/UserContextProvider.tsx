import { createContext, useState } from 'react';

export type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  // setUserをマウスホバーすれば型推論による型名が表示される
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

// 1.userContextにデータがあるかnullチェックする場合
// export const UserContext = createContext<UserContextType | null>(null);
// 2.userContextにデータがあるかnullチェックしない場合
export const UserContext = createContext({} as UserContextType);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
