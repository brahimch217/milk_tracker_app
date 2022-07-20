const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 1200,
        frame: true,
        darkTheme: true,
        autoHideMenuBar: true,
        fullscreen: false,
        title: "Milk Traker App",
        icon: "./views/images/profile/milk-logo-removebg-preview 1.png",
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL('http://localhost:3000/');
}
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});