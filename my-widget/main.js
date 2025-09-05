
// note that this code is only used in Electron apps
// this is just so it can be a widget type
// this does not to be used if runnign on browser
// this code was found on github
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: false,
    alwaysOnTop: true,
    frame: true, 
    webPreferences: {
      nodeIntegration: true,   
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "file.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
