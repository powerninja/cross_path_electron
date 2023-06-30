// ./react-todo/src/electron/index.js
// Electron
import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';

import log from 'electron-log';
import path from 'path';

// RootPath
const ROOT_PATH = path.resolve(__dirname, '../..');

// mainWindowのHTMLファイル
const rootPath = `file://${ROOT_PATH}/build/react/index.html`;

// アプリ起動時の処理
app.on('ready', (e) => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
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
