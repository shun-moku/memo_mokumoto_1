# memo

### アプリケーション概要
このアプリケーションは学習用のメモアプリで覚えたいことをメモし一定時間ごとに最表示させることで記憶の定着を図るために作成しました。

### アプリの操作方法
テスト用アカウントでログインした後”投稿する”をクリックすると新規投稿画面に遷移できます。
URLなどには保存しておきたいサイトや動画などのURLを貼り付け、下のメモ欄に覚えておきたいことをメモします。
URLは入力必須ではありません。
新規投稿が完了したらホーム画面に表示されますこの時点では左から二番目の"all"に全てのメモが表示されています。
ここのメモ欄をクリックすると記録が更新され最終更新から12時間後、1週間後、4習慣後にphase1, phase2, phase3にそれぞれ最表示されます。
これは記憶を効率よく定着させるためです。
テスト用アカウント
email: test@test.com
password: 111111

### 目指した課題解決
忙しくて時間がない人や、学習の効率化に悩んでいる人の課題を解決するため

### 要件定義

| 優先順位 |        機能        |                  目的                  |                                     詳細                                                 |                   ストーリー                                   |  見積もり  |
| ------- | ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------- |
|    3    |   メモ投稿機能      | アプリのメイン機能のため                  |                                投稿したメモを一覧表示させる                                   |   メモを投稿した後に更新日が古い順に上から表示させて復習をしやすくする   |  10(h)  |
|    3    | ユーザーログイン機能 | 自分の投稿のみが表示されるようにするため     | 現在ログインしているユーザーとメモを投稿したユーザーが一致する場合のみメモを表示させる                  |          メモを投稿するとホーム画面に自分のメモのみ表示される         |5(h)|
|    2    |     チェック機能    | 最終更新（最後に復習）した時間を記録するため  | メモの画面をクリックするとデータベースの最新更新時刻が更新され、自動的にメモを再表示させる時間を明確にする | それぞれのページに12時間後、1週間後、4週間後に再表示されるようになる    | 10(h)|




### 機能紹介


### データベース設計




# テーブル設計

## users テーブル

| Column     | Type   | Options     |
| ---------- | ------ | ----------- |
| email      | string | null: false |
| password   | string | null: false |
| name       | string | null: false |

### Association

- has_many :notes

## note テーブル

| Column     | Type       | Options                          |
| ---------- | ---------- | -------------------------------- |
| memo       | text       |                                  |
| url        | text       | null: false                      |
| checked    |            | null: false                      |

