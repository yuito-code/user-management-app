import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type LoginUser = {
  id: number;
  name: string;
  email: string;
};

type UserContextType = {
  user: LoginUser | null;
  login: (user: LoginUser) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<LoginUser | null>(null);

  const login = (user: LoginUser) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProviderの中で使用してください");
  }

  return context;
};