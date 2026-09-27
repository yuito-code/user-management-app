import { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers"
import { Link } from "react-router-dom";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const {
    users,
    loading,
    error,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
  } = useUsers();

  const { user, logout } = useUserContext();

  useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user,navigate]);


  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [formError, setFormError] = useState("");


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    setFormError("");

    if(!newName.trim()) {
      setFormError("名前を入力してください");
      return;
    }

    if(!newEmail.trim()) {
      setFormError("メールアドレスを入力してください");
      return;
    }

    await handleCreateUser(newName, newEmail);

    setNewName("");
    setNewEmail("");
  };

  return (
    <div>
      <h1>ユーザー一覧</h1>

      <p>ログインユーザー: {user?.name}</p>

      <button
        onClick={() => {
          logout();
          navigate("./login");
        }}
        >
          ログアウト
      </button>

      <Link to="/">ホームへ</Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <UserForm
        newName={newName}
        newEmail={newEmail}
        onNameChange={setNewName}
        onEmailChange={setNewEmail}
        onSubmit={handleSubmit}
      />

      {formError && <p>{formError}</p>}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前で検索"
      />

      <UserList
        users={filteredUsers}
        onUpdate={handleUpdateUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default Users;