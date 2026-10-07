<h1 align="center">user-management-app</h1>

<p align="center"> React + TypeScriptを使用して作成したユーザー管理Webアプリケーション </p>

<hr>

<h2>📌 概要</h2>

<p> REST APIを利用して、ユーザー情報の取得・登録・更新・削除（CRUD）を実装したWebアプリケーションです。 </p>

<p> ReactでのAPI通信、状態管理、コンポーネント分割、カスタムフックなどを学習することを目的として開発しました。 </p>

<hr>

<h2>🚀 使用技術</h2>

<ul> <li><strong>React</strong>：UI開発</li> <li><strong>TypeScript</strong>：型安全な開発</li> <li><strong>Vite</strong>：開発環境・ビルド</li> <li><strong>Fetch API</strong>：API通信</li> <li><strong>REST API</strong>：ユーザーデータの取得・操作</li> <li><strong>Git / GitHub</strong>：バージョン管理</li> </ul>

<hr>

<h2>✨ 主な機能</h2>

<ul> <li>👤 ユーザー一覧の取得</li> <li>➕ ユーザー登録</li> <li>✏️ ユーザー情報の更新</li> <li>🗑️ ユーザー削除</li> <li>🔍 ユーザー検索</li> <li>⏳ ローディング表示</li> <li>⚠️ エラー表示</li> </ul>

<hr>

<h2>🛠️ 実装で意識した点</h2>

<h3>1. API処理の分離</h3>

<p> API通信の処理を <code>services/userApi.ts</code> にまとめ、UI側の処理と分離しました。 </p>

<pre> UI ↓ useUsers ↓ userApi ↓ REST API </pre>

<h3>2. コンポーネント分割</h3>

<p>画面の役割に応じてコンポーネントを分割しています。</p>

<ul> <li><code>UserList.tsx</code>：ユーザー一覧・更新・削除</li> <li><code>UserForm.tsx</code>：ユーザー登録フォーム</li> </ul>

<h3>3. カスタムフック</h3>

<p> <code>useUsers.ts</code> を作成し、ユーザー情報の状態管理やAPI処理をまとめています。 </p>

<h3>4. TypeScript</h3>

<p> ユーザー情報やコンポーネントのPropsに型を定義し、型安全性を意識して実装しています。 </p>

<hr>

<h2>🌐 API</h2>

<p> <strong>JSONPlaceholder</strong> のREST APIを使用しています。 </p>

<ul> <li><strong>GET</strong>：ユーザー取得</li> <li><strong>POST</strong>：ユーザー登録</li> <li><strong>PATCH</strong>：ユーザー更新</li> <li><strong>DELETE</strong>：ユーザー削除</li> </ul>

<hr>

<h2>📂 プロジェクト構成</h2>

<pre> src/ │ ├── components/ │ ├── UserForm.tsx │ └── UserList.tsx │ ├── hooks/ │ └── useUsers.ts │ ├── services/ │ └── userApi.ts │ ├── types/ │ └── index.ts │ └── App.tsx </pre>

<h3>各フォルダの役割</h3>

<ul> <li><strong>components</strong>：画面を構成するUIコンポーネント</li> <li><strong>hooks</strong>：カスタムフック・状態管理</li> <li><strong>services</strong>：API通信処理</li> <li><strong>types</strong>：TypeScriptの型定義</li> </ul>

<hr>

<h2>💻 開発環境</h2>

<pre> npm install npm run dev </pre>

<p> ローカル環境で起動後、ブラウザから表示されたURLにアクセスしてください。 </p>

<hr>

<h2>🔗 GitHub</h2>

<p> <a href="https://github.com/yuito-code/user-management-app"> https://github.com/yuito-code/user-management-app</a> </p>

<hr>

<h2>📚 今後の改善</h2>

<ul> <li>入力値のバリデーション</li> <li>UI / UXの改善</li> <li>認証機能の追加</li> <li>実際のバックエンドAPIとの連携</li> </ul>
