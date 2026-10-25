import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <div className="bg-blue-600 p-4 text-white">
        Tailwindのテスト
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">名前</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="名前を入力"
          />
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="メールアドレスを入力"
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;