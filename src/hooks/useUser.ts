import { useEffect, useState } from "react";
import { getUser, updateUser } from "../services/userApi";
import type { User } from "../types";

export const useUser = (id: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(id);
        setUser(data);
      } catch (error) {
        console.error(error);
        setError("ユーザーの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdateUser = async (name: string) => {
    if (!user) return;

    try {
      const data = await updateUser(user.id, name);
      setUser((prev) =>
        prev ? { ...prev, name: data.name } : prev
      );
    } catch (error) {
      console.error(error);
      setError("ユーザーの更新に失敗しました");
    }
  };

  return {
    user,
    loading,
    error,
    handleUpdateUser,
  };
};