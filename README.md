<h1 align="center">React API Practice</h1>

<p align="center"> React + TypeScriptを使用して作成したユーザー管理Webアプリケーション </p>

📌 概要

REST APIを利用して、ユーザー情報の取得・登録・更新・削除（CRUD）を実装したWebアプリケーションです。

ReactでのAPI通信、状態管理、コンポーネント分割、カスタムフックなどを学習することを目的として開発しました。

🚀 使用技術
技術	内容
React	UI開発
TypeScript	型安全な開発
Vite	開発環境・ビルド
Fetch API	API通信
REST API	ユーザーデータの取得・操作
Git / GitHub	バージョン管理
✨ 主な機能
👤 ユーザー一覧の取得
➕ ユーザー登録
✏️ ユーザー情報の更新
🗑️ ユーザー削除
🔍 ユーザー検索
⏳ ローディング表示
⚠️ エラー表示
🛠️ 実装で意識した点
1. API処理の分離

API通信の処理を services/userApi.ts にまとめ、UI側の処理と分離しました。

UI
 ↓
useUsers
 ↓
userApi
 ↓
REST API
2. コンポーネント分割

画面の役割に応じてコンポーネントを分割しています。

UserList.tsx：ユーザー一覧・更新・削除
UserForm.tsx：ユーザー登録フォーム
3. カスタムフック

useUsers.ts を作成し、ユーザー情報の状態管理やAPI処理をまとめています。

4. TypeScript

ユーザー情報やコンポーネントのPropsに型を定義し、型安全性を意識して実装しています。

🌐 API

JSONPlaceholder のREST APIを使用しています。

操作	HTTPメソッド
ユーザー取得	GET
ユーザー登録	POST
ユーザー更新	PATCH
ユーザー削除	DELETE
💻 開発環境
npm install
npm run dev

ローカル環境で起動後、ブラウザから表示されたURLにアクセスしてください。

📂 プロジェクト構成
src/
├── components/
│   ├── UserForm.tsx
│   └── UserList.tsx
├── hooks/
│   └── useUsers.ts
├── services/
│   └── userApi.ts
├── types/
│   └── index.ts
└── App.tsx
🔗 Links
GitHub

<a href="https://github.com/yuito-code/react-api-practice"> https://github.com/yuito-code/react-api-practice </a>

Demo

🚧 デプロイ後にURLを追加予定

📚 今後の改善
入力値のバリデーション
UI / UXの改善
認証機能の追加
実際のバックエンドAPIとの連携

<p align="center"> <strong>React / TypeScript / REST API / GitHub</strong> </p>
