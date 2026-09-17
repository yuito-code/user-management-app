import { useEffect, useState } from "react";
import type { User } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const response = await fetch(
          'https://jsonplaceholder/typicode.com/users'
        );

        if(!response.ok) {
          throw new Error('ユーザーの取得に失敗しました');
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch {
        console.error(error);
        setError('ユーザー取得に失敗しました');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  },[]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      'https://jsonplaseholder.typicode.com/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
        }),
      }
    );

    const data: User = await response.json();

    setUsers((prevUsers) => [...prevUsers, data]);

    setNewName('')
    setNewEmail('');
  };

  const handleUpdate = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: '村上',
        }),
      }
    );

    const data: User = await response.json();

    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? data : user))
    );
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if(!response.ok) {
      throw new Error('ユーザーの削除に失敗しました');
    }

    setUsers((prevUsers) =>
      prevUsers.filter((User) => user.id !== id)
    );
  }

  if (loading){
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>ユーザー一覧</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="お名前を入力してください"
        />

        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="メールアドレスを入力してください"
        />

        <button type="submit">
          追加
        </button>
      </form>



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