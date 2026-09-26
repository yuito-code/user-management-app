import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");

  const {login } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login({
      id: 1,
      name: "村上",
      email: email,
    });
    navigate("/users");
  };

  return (
    <div>
      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;