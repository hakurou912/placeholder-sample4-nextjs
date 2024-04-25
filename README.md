## About this

独学でNext.jsを学んでいます。  
成果物として、Parallel RoutesとIntercepting Routesを使ってモーダルを起動する画面を作成しました。  
ページの遷移なしで動的コンテンツをモーダル表示することが可能であることが分かりました。

使用したもの
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) - a free online REST API
- [Bootstrap@5.3.0](https://getbootstrap.jp/)  - スタイル適用、モーダル機能（js）
- Next.js 14.2.2


理解したこと
- Intercepting Routes  
本来ならページ遷移により表示する画面を、別のルートでインターセプト（妨害）して表示する仕組み。  
モーダル機能のように、画面遷移を伴わずに別ページの内容を表示させることが可能になる。  
インターセプトのルートには以下が有る。（今回は(.)を使用）  
(.) … 同じレベル  
(..) … 1つ上の階層  
(..)(..) … 2つ上の階層  
(...) … appディレクトリの階層  
  
- ファイルの命名規約（default）
- Next.js独自のコンポーネント（next/link）  
- Bootstrapのモーダルを利用した実装方法  
　最初はappフォルダ直下のpage.jsで実装したNextLinkにdata-bs-toggle,data-bs-targetを指定してモーダル起動を試みたが、  
　以下エラーにより表示できなかった。
　Uncaught TypeError: Cannot read properties of undefined (reading 'backdrop')  
　原因と対応方法を調査してみるも、有力な情報はなかったが、モーダル部分を実装しているpage.js内でクリックイベントを発火させると上手く表示出来た。  
　今回はこの方法だが、ChatGPTから提案された「react-bootstrap」というのを取り入れてみても良かったかもしれない。（npmでのパッケージインストール必要）  
- .envによる環境変数の管理（キーの先頭にNEXT_PUBLICを付ける。）


次回以降に学びたいこと、試したいこと
- API作成（作成、参照、更新、削除）  
- Next.js独自のfunction（NextResponse,NextRequest）  
- Next.js独自のコンポーネント（next/image,next/server）  
- 上記自作したAPIを使って画面表示、編集

参考
- [Intercepting Routes（公式サイト）](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)