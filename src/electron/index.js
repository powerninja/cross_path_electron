// ./react-todo/src/electron/index.js
// Electron
import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';
import { shell } from 'electron';

import path from 'path';

// RootPath
const ROOT_PATH = path.resolve(__dirname, '../..');

// mainWindowのHTMLファイル
const rootPath = `file://${ROOT_PATH}/build/react/index.html`;

// アプリ起動時の処理
app.on('ready', (e) => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });
  mainWindow.loadURL(rootPath);

  // mainWindowが新しいウィンドウを開くために 'new-window' イベントを発行した時に発火するリスナーを設定
  mainWindow.webContents.on('new-window', function (e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });

  mainWindow.loadURL(rootPath);

  ipcMain.on('ondrop', (event, path) => {
    console.log(`Received dropped file path: ${path}`);
    // do something with the path
  });
});

// アプリ終了時の処理
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
