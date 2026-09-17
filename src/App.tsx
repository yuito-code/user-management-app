import { useEffect, useState } from "react";
import type { User } from "./types";
import { getUsers, createUser, updateUser, deleteUser } from "./services/userApi";

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
      await deleteUser(id)

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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="名前"
        />

        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="メールアドレス"
        />

        <button type="submit">
          追加
        </button>
      </form>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前で検索"
      />

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>

          <button onClick={() => handleUpdate(user.id)}>
            名前変更
          </button>

          <button onClick={() => handleDelete(user.id)}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;