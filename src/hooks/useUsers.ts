import { useEffect, useState } from 'react';
import type { User } from "../types";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userApi";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");

      try {
        const data = await getUsers();
        setUsers(data);
      } catch(error) {
        console.error(error);
        setError('ユーザーの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async (
    newName: string,
    newEmail: string
  ) => {
    setError("");

    try {
      const data = await createUser(newName, newEmail);

      setUsers((prevUsers) => [...prevUsers, data]);

      return true;
    } catch (error) {
      console.error(error);
      setError("ユーザーの取得に失敗しました");
      return false;
    }
  };

  const handleUpdateUser = async (id: number) => {
    setError("");

    try {
      const data = await updateUser(id, "村上");

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? { ...user, name: data.name}
            : user
        )
      );
    } catch (error) {
      console.log(error);
      setError("ユーザーの更新に失敗しました");
    }
  };

  const handleDeleteUser = async (id: number) => {
    setError("");
    try {
      await deleteUser(id);

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.error(error);
      setError("ユーザーの削除に失敗しました");
    }
  };

  return {
    users,
    loading,
    error,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
  };
};