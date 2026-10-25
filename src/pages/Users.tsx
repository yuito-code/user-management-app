import { useState } from "react";
import { useUsers } from "../hooks/useUsers"
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { useUserContext } from "../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const {
    users,
    loading,
    error,
    handleCreateUser,
    handleDeleteUser,
  } = useUsers();

  const { user, logout } = useUserContext();

  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [formError, setFormError] = useState("");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormError("");

    if (!newName.trim()) {
      setFormError("名前を入力してください");
      return;
    }

    if (!newEmail.trim()) {
      setFormError("メールアドレスを入力してください");
      return;
    }

    const created = await handleCreateUser(newName, newEmail);
    if (!created) return;

    setNewName("");
    setNewEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-semibold">
            User Management
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user.name}
            </span>

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
              >
                ログアウト
              </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">
            ユーザー一覧
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            ユーザー情報の確認、追加、編集、削除ができます。
          </p>
        </div>

        {loading && (
          <p className="mb-4 text-sm text-gray-500">
            読み込み中...
          </p>
        )}

        {error && (
          <p className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <section className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">
            ユーザーを追加
          </h2>

          <UserForm
            newName={newName}
            newEmail={newEmail}
            onNameChange={setNewName}
            onEmailChange={setNewEmail}
            onSubmit={handleSubmit}
          />

          {formError && (
            <p className="mt-3 text-sm text-red-600">
              {formError}
            </p>
          )}
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4">
            <h2 className="mb-3 text-lg font-medium">
              登録ユーザー
            </h2>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="名前で検索"
              className="w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <UserList
            users={filteredUsers}
            onDelete={handleDeleteUser}
          />
        </section>
      </main>
    </div>
  );
};
export default Users;