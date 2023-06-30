// ./react-todo/src/electron/index.js
// Electron
import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';

import path from 'path';

// RootPath
const ROOT_PATH = 'file://' + path.resolve('');

// mainWindowのHTMLファイル(第4項で解説)
const rootPath = `${ROOT_PATH}/build/react/index.html`;

// アプリ起動時の処理
app.on('ready', (e) => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // デベロップツールの表示
  mainWindow.openDevTools();
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
