// Klub Pult Server — admin kompyuter uchun Windows ilovasi (Electron).
// index.html shu papkadan ochiladi; klient kompyuterlar server.js orqali ulanadi.
const { app, BrowserWindow, Menu, shell, ipcMain, dialog } = require('electron');
const path = require('path');
const { execFile } = require('child_process');
const net = require('./server');

if (!app.requestSingleInstanceLock()) app.quit();

let win, quitting = false;
function createWindow() {
  win = new BrowserWindow({
    width: 1400, height: 900, minWidth: 1024, minHeight: 640, show: false,
    title: 'Klub Pult', backgroundColor: '#1b1f24', autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, spellcheck: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'index.html'));
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') win.setFullScreen(!win.isFullScreen());
    if (i.type === 'keyDown' && i.control && i.shift && i.key.toLowerCase() === 'i') win.webContents.toggleDevTools();
  });
  // server yopilsa klientlar oflayn rejimga oʻtadi — tasodifan yopib qoʻymaslik uchun soʻraymiz
  win.on('close', e => {
    if (quitting) return;
    const r = dialog.showMessageBoxSync(win, { type: 'question', buttons: ['Yopish', 'Bekor qilish'], defaultId: 1, cancelId: 1,
      title: 'Klub Pult', message: 'Klub Pult yopilsinmi?', detail: 'Server toʻxtaydi: klient kompyuterlar vaqtni oʻzi sanashda davom etadi, lekin yangi buyruqlar bormaydi.' });
    if (r !== 0) e.preventDefault(); else quitting = true;
  });
}

function toUi(ev) { if (win && !win.isDestroyed()) win.webContents.send('net:ev', ev); }

ipcMain.handle('net:start', (e, port) => net.start(port, toUi).then(i => { if (i.running) allowFirewall(i.port); return i; }));
ipcMain.handle('net:info', () => net.info());
ipcMain.on('net:send', (e, id, msg) => net.send(id, msg));
ipcMain.on('net:close', (e, id) => net.close(id));
ipcMain.handle('net:wol', (e, mac) => net.wol(mac));
ipcMain.handle('app:version', () => app.getVersion());

// Windows Firewall: port uchun kiruvchi qoidani qoʻshishga urinish (administrator huquqi boʻlsa ishlaydi;
// boʻlmasa Windows oʻzi "Allow access" oynasini koʻrsatadi)
function allowFirewall(port) {
  if (process.platform !== 'win32') return;
  const name = `Klub Pult Server (TCP ${port})`;
  execFile('netsh', ['advfirewall', 'firewall', 'show', 'rule', `name=${name}`], err => {
    if (!err) return;
    execFile('netsh', ['advfirewall', 'firewall', 'add', 'rule', `name=${name}`, 'dir=in', 'action=allow', 'protocol=TCP', `localport=${port}`, 'profile=any'], () => {});
  });
}

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(createWindow);
app.on('before-quit', () => { quitting = true; net.stop(); });
app.on('window-all-closed', () => app.quit());
