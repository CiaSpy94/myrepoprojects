const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('run-command', (event, command) => {
  exec(command, { shell: 'C:\\Program Files\\Git\\bin\\bash.exe' }, (error, stdout, stderr) => {
    event.sender.send('command-output', error ? stderr : stdout);
  });
});