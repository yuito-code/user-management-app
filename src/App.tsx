import { useEffect, useState } from "react";
import type { User } from "./types";
import { getUsers, createUser, updateUser, deleteUser } from "./services/userApi";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setError('ユーザーの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await createUser(newName, newEmail);
      setUsers((prevUsers) => [...prevUsers, data]);

      setNewName('');
      setNewEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const data = await updateUser(id,'村上');

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
        user.id === id
          ? { ...user, name: data.name}
          :user
        )
      );
    } catch (error) {
    console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <UserForm
        newName={newName}
        newEmail={newEmail}
        onNameChange={setNewName}
        onEmailChange={setNewEmail}
        onSubmit={handleSubmit}
      />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前で検索"
      />

      <UserList
        users={filteredUsers}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;