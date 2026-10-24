import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-logo">User Management</h1>

        <nav className="home-nav">
          <Link to="/">ホーム</Link>
          <Link to="/users">ユーザー一覧</Link>
          <Link to="/Login">ログイン</Link>
        </nav>
      </header>

      <main>
        <section className="home-main">
          <h2>ユーザー管理システム</h2>

          <p>
            ユーザー情報の確認や検索、編集を行うための管理システムです。
            <br />
            登録されたユーザーの情報を一覧から確認できます。
          </p>

          <Link to="/users" className="home-button">
            ユーザー一覧を見る
          </Link>
        </section>

        <section className="home-features">
          <h2>主な機能</h2>

          <div className="feature-list">
            <article className="feature-card">
              <h3>ユーザー一覧</h3>
              <p>
                登録されているユーザーの名前やメールアドレスを確認できます。
              </p>
            </article>

            <article className="feature-card">
              <h3>ユーザー検索</h3>
              <p>
                名前を入力して、目的のユーザーを検索できます。
              </p>
            </article>

            <article className="feature-card">
              <h3>ユーザー編集</h3>
              <p>
                ユーザーの詳細情報を確認し、名前などを編集できます。
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="home-fotter">
        <p>© User Management System</p>
      </footer>
    </div>
  );
};

export default Home;