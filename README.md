# flux-async-todo-example

[facebook/flux](https://github.com/facebook/flux)と[facebook/react](https://github.com/facebook/react)を用いてTodoリストを作成する。  
初めに同期的にTodoをCRUD(作成・読込・更新・削除)するアプリケーションを作成した後、expressによるサーバで非同期にCRUDを行うアプリケーションへと変更する。

1. 同期処理によるTodoリスト
    1. AppContainerの作成
    2. TodoStoreの作成
    3. TodoListコンポーネントの作成
    4. Todoコンポーネントの作成
2. 非同期処理によるTodoリスト
    1. サーバの作成
    2. ActionDispatcherの作成
    3. TodoStoreの変更

