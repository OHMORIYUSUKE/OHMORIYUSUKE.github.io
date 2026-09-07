# うーたんのポートフォリオ

Astro でつくった、Bento スタイルの個人ポートフォリオです。経歴・技術・登壇・寄稿・コミュニティ活動と、好きなアニメや音楽をカードとしてまとめています。

![ポートフォリオのプレビュー](./docs/images/portfolio-preview.jpg)

## Features

- レスポンシブな Bento レイアウトと淡い配色のダークモード
- 本人写真と表示名を切り替えるプロフィールカード
- OpenStreetMap / Leaflet による練馬区の地図と、雲・飛行機のアニメーション
- Speaker Deck、技術書、インタビュー、コミュニティなどの活動アーカイブ
- Spotify プレイリストの埋め込み
- GitHub Pages への自動デプロイ

## Getting started

```sh
npm install
npm run dev
```

開発サーバーは通常 `http://localhost:4321` で起動します。

## Commands

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | 開発サーバーを起動                           |
| `npm run build`   | 本番用の静的ファイルを `dist/` に生成        |
| `npm run preview` | ビルド結果をローカルで確認                   |
| `npm run lint`    | ESLint を実行                                |
| `npm run format`  | Prettier の整形状態を確認                    |
| `npm run check`   | Prettier、ESLint、Astro の静的チェックを実行 |

## Project structure

```text
src/
├── data/
│   ├── portfolio.ts  # プロフィール、リンク、活動データ
│   └── types.ts      # データ型
├── pages/
│   └── index.astro   # ページ構造
├── scripts/
│   └── portfolio.ts  # テーマ、地図、プロフィール切替
└── styles/
    └── global.css    # 共通スタイルとレスポンシブ設定
docs/
└── images/           # READMEなどのドキュメント用画像
```

コンテンツを変更するときは `src/data/portfolio.ts`、見た目を調整するときは `src/styles/global.css` を編集します。

プロフィール表示はクエリパラメータでも切り替えられます。`?profile=real` で本人情報、`?profile=alias` でハンドルネームを表示します。

## Deployment

`main` ブランチへの push で GitHub Actions が次を実行します。

1. Prettier / ESLint / Astro のチェック
2. Astro の静的ビルド
3. GitHub Pages へのデプロイ

GitHub の **Settings → Pages → Source** は **GitHub Actions** に設定してください。
