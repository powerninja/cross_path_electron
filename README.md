# ファイルパス変換アプリ

このアプリケーションは Windows と MacOS のファイルパスを相互に変換する Electron アプリケーションです。ユーザーはテキストフィールドにパスを入力またはドラッグアンドドロップし、自動的にそのパスが対応する OS の形式に変換されます。そしてその変換されたパスはクリップボードにコピー可能です。

# 機能

- Windows と MacOS のパスを相互に変換します。
- ドラッグ＆ドロップによるパスの入力が可能です。
- 変換したパスはクリップボードにコピーできます。
- クリアボタンにより全てのフィールドをリセットできます。

# アプリケーションのダウンロード

## MacOS

[こちら](https://github.com/powerninja/cross_path_electron/releases/download/1.0.0/TrailMixer.zip)から zip ファイルをダウンロードし、ご利用ください。

## WindowsOS

準備中

# インストールと実行

まず、ローカルのマシンに Node.js と npm がインストールされていることを確認してください。

次に、以下のコマンドを使用してアプリケーションをクローンし、依存関係をインストールし、アプリケーションを起動します。

```bash
Copy code
git clone https://github.com/powerninja/cross_path_electron.git
cd cross_path_electron
npm install
npm start
```

# 使用方法

1. テキストフィールドにパスを入力するか、または Windows または Mac のファイルをテキストフィールドにドラッグ＆ドロップします。
2. 入力またはドロップされたパスが自動的に対応する OS の形式に変換されます。
3. 右側のアイコンをクリックすると、変換されたパスがクリップボードにコピーされます。

# 貢献

本アプリケーションの改善にご協力いただける方は、ぜひ GitHub リポジトリの [Issues](https://github.com/powerninja/cross_path_electron/issues) にフィードバックやバグ報告をお寄せください。
