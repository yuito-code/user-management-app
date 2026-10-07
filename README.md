React API Practice

React + TypeScriptを使用して作成したユーザー管理Webアプリケーションです。

REST APIを利用して、ユーザー情報の取得・登録・更新・削除（CRUD）を実装しています。

概要

ReactでのAPI通信や状態管理、コンポーネント設計について学習することを目的として開発しました。

開発を進める中で、API処理とUI処理を分離し、コンポーネントやカスタムフックを用いてコードを整理しています。

使用技術
・ React
・ TypeScript
・ Vite
・ REST API
・ Fetch API
・ Git / GitHub
・ Visual Studio Code

主な機能
・ ユーザー一覧の取得
・ ユーザーの登録
・ ユーザー情報の更新
・ ユーザーの削除
・ ユーザー検索
・ ローディング表示
・ エラー表示

 プロジェクト構成
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

設計・実装で意識した点
API処理の分離

API通信の処理を services/userApi.ts にまとめ、UI側のコードと分離しています。

 components
     ↓
  useUsers
     ↓
  userApi
     ↓
    API
コンポーネント分割

ユーザー一覧とユーザー登録フォームをそれぞれコンポーネントとして分離し、役割を整理しています。

UserList.tsx：ユーザー一覧・更新・削除
UserForm.tsx：ユーザー登録フォーム
カスタムフック

useUsers.ts にユーザー情報の状態管理やAPI処理をまとめ、App.tsx の処理を整理しています。

TypeScript

User 型やコンポーネントのPropsに型を定義し、型安全性を意識して実装しています。

API

JSONPlaceholderのREST APIを使用しています。

GET：ユーザー取得
POST：ユーザー登録
PATCH：ユーザー更新
DELETE：ユーザー削除

今後の改善
バリデーションの追加
UI / UXの改善
認証機能の追加
実際のバックエンドAPIとの連携

開発環境
npm install
npm run dev

ブラウザで表示されたURLにアクセスしてください。

GitHub

https://github.com/yuito-code/react-api-practice
