const { app, BrowserWindow } = require("electron");

let win;
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true, // this will hide the menu bar

    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("src/index.html");
}
app.whenReady().then(createWindow);
app.on("quit", () => {
  win = null;
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
