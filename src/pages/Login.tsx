import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!name.trim()) {
      setError("名前を入力してください");
      return;
    }

    if(!email.trim()) {
      setError("メールアドレスを入力してください");
      return;
    }

    login({
      id: 1,
      name: name.trim(),
      email: email.trim(),
    });

    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-semibold">
            User Management
          </Link>

          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-blue-700"
          >
            ホームへ戻る
          </Link>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-65px)] items-center justify-center px-5 py-10">
        <section className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-2xl font-semibold">
            ログイン
          </h1>

          <p className="mb-6 text-sm leading-6 text-gray-500">
            名前とメールアドレスを入力してください。
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                名前
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="名前を入力"
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                メールアドレス
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              ログイン
            </button>
          </form>

          <div className="mt-6 border-t border-gray-100 pt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-blue-700"
            >
              ホームに戻る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;