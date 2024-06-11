const { app, Tray, Menu } = require('electron');
const path = require('path');
const MouseController = require('./controller')

app.dock.hide();
let tray = null;
const mouseController = new MouseController();

app.whenReady().then(() => {
    let imagePath = path.join(__dirname, 'mouse@2x.png');
    tray = new Tray(imagePath);
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Start', type: 'radio', click: mouseController.start },
        { label: 'Stop', type: 'radio', checked: true, click: mouseController.stop },
        { label: 'Close', type: 'normal', click: app.quit },
    ])
    tray.setToolTip('Mouse Jiggler for Mac.')
    tray.setContextMenu(contextMenu)
})
