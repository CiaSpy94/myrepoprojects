const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  runCommand: (cmd) => ipcRenderer.send('run-command', cmd),
  onOutput: (callback) => ipcRenderer.on('command-output', (event, output) => callback(output))
});