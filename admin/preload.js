// index.html ga faqat shu kichik API ochiladi (window.kpNet) — Node.js toʻgʻridan-toʻgʻri berilmaydi.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('kpNet', {
  start: port => ipcRenderer.invoke('net:start', port),
  info: () => ipcRenderer.invoke('net:info'),
  send: (id, msg) => ipcRenderer.send('net:send', id, msg),
  close: id => ipcRenderer.send('net:close', id),
  wol: mac => ipcRenderer.invoke('net:wol', mac),
  on: fn => ipcRenderer.on('net:ev', (e, ev) => fn(ev)),
  version: () => ipcRenderer.invoke('app:version')
});
