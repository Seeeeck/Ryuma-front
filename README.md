# test11

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Run json-server
```bash
$ json-server --watch --port 9002 db.json
```


## Nuxt.jsとは

[公式ドキュメント](https://ja.nuxtjs.org/guide)に詳しく書いていますが、Vue.js アプリケーションを構築するためのフレームワークです。

サーバーサイドレンダリングするアプリケーションの開発のために必要な設定があらかじめセットされているのが特徴です。

Nuxt.jsには主に以下のパッケージが含まれています。

- Vue3・・・Vue本体です。
- Vue-Router・・・Vueアプリケーションでのルーティングを管理するパッケージです。
- Vuex・・・Vue版のFluxです。
- Vue Server Renderer・・・Vueアプリケーションをサーバーサイドレンダリングするためのパッケージです。
- Vue-Meta・・・Vueアプリケーションのメタ情報を管理するパッケージです。

## サーバーサイドレンダリングとは？

Vue.jsなどでDOMの構築をクライアント側で行うと、サイトにアクセスした際に一瞬画面が表示されない状態になります。
サーバー側で初期状態のDOMレンダリングを完了した状態で返すことで、サイトにアクセスした際にすぐに画面を描画することができます。
これをサーバーサイドレンダリング(SSR)と呼びます。

## npmでNuxtのプロジェクトを作成

プロジェクトを作成したいフォルダに入って、npmコマンドでプロジェクトを作成します。

```bash
npm init nuxt-app <project-name>
```

すると、いくつか質問聞かれます。

```bash
create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in test11
? Project name: test11　　　　　　　　　　　'//Enter keyで次の質問に移動'
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Element
? Nuxt.js modules: 
❯◉ Axios - Promise based HTTP client    '//Space keyで選択'
 ◯ Progressive Web App (PWA)
 ◯ Content - Git-based headless CMS
```

質問に対して以下のように選択します。

```bash	
create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in test11
? Project name: test11
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Element
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? What is your GitHub username? `Your username on Github`  
? Version control system: Git
```

しばらくすると、プロジェクトが作成されます。

```bash
🎉  Successfully created project test11

  To get started:

	cd test11
	npm run dev

  To build & start for production:

	cd test11
	npm run build
	npm run start
```

プロジェクトを実行します。

```bash
cd `作成されたプロジェクトのフォルダ`

npm run dev
```

これでプロジェクトが起動されます。

**http://localhost:3000** で確認することができます。

## ディレクトリ構造

https://ja.nuxtjs.org/docs/2.x/directory-structure/nuxt

### pages

`pages` ディレクトリには、アプリケーションのビューとルートが格納されています。Nuxt.js はこのディレクトリ内のすべての `.vue` ファイルを読み込んで、ルーターの設定を自動的に作成します。

<img src="/Users/sunyuqiang/Library/Application Support/typora-user-images/image-20210605070741748.png" alt="image-20210605070741748" style="zoom:70%;float:left" />

```html
http://localhost:3000/             @/pages/index.vue

http://localhost:3000/test         @/pages/test/index.vue

http://localhost:3000/test/:id     @/pages/test/_id.vue     //動的なページ
```

idの部分は`this.$route.params.id`で取得することができます。

### layouts

レイアウトは Nuxt.js アプリケーションのルック&フィールを変えるとき、とても役に立ちます。例えばサイドバーを含めたいときや、モバイルとデスクトップのための別々のレイアウトを持ちたいときなどに有用です。

### カスタムレイアウト

`layout` ディレクトリの全てのファイル（*トップレベル*）は、ページコンポーネントの `layout` プロパティで使えるカスタムレイアウトが作られます。

ブログレイアウトを作成して `layouts/blog.vue` に保存しましょう。

layouts/blog.vue

```html
<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

その後、カスタムレイアウトを使用するためにページに教えなければなりません。

pages/posts.vue

```js
<script>
export default {
  layout: 'blog',
  // または
  layout (context) {
    return 'blog'
  }
}
</script>
```


