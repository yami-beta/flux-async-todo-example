# flux-async-todo-example

[facebook/flux](https://github.com/facebook/flux)と[facebook/react](https://github.com/facebook/react)を用いてTodoリストを作成する。  
初めに同期的にTodoをCRUD(作成・読込・更新・削除)するアプリケーションを作成した後、expressによるサーバで非同期にCRUDを行うアプリケーションへと変更する。

1. 同期処理によるTodoリスト
    1. AppContainerの実装
    2. TodoStoreの実装
    3. TodoListコンポーネントの実装
    4. Todoコンポーネントの実装
    5. ActionDispatcherの実装
    6. TodoStoreの`reduce()`の実装
    7. CreateTodoコンポーネントの実装
2. 非同期処理によるTodoリスト
    1. サーバの実装
    2. ActionDispatcherの変更
    3. TodoStoreの変更

