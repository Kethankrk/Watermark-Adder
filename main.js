const {
    BrowserWindow,
    app,
    dialog,
    ipcMain,
    webContents,
} = require("electron");

const application = async () => {
    const mianWindow = new BrowserWindow({
        useContentSize: true,
    });

    mianWindow.loadFile("frontend/index.html");

    mianWindow.on("close", () => {
        app.quit();
    });
};

app.on("ready", application)

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });