const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }
const {ipcMain} = require('electron')
const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

// Replace '..' with 'about-window'
const openAboutWindow = require('about-window').default

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 500,
    height: 800,
    minWidth: 500,
    minHeight: 500,
    maxWidth: 500,
    maxHeight: 900,
    acceptFirstMouse: true,
    titleBarStyle: 'hiddenInset'
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  const template = [
    {
      label: app.getName(),
      submenu: [
        {
          label: 'About',
          click: () =>
            openAboutWindow({
              icon_path: path.join(__dirname, '512.png'),
              copyright: 'Developed by BackSlash Linux',
              package_json_dir: __dirname,
              bug_report_url: 'https://bugs.launchpad.net/backslashlinux',
              homepage: 'https://www.backslashlinux.com',
              license: 'GPL-3.0',
              description: 'BackSlash Music is a simple and fast music player, built for BackSlash Linux Systems.',
              win_options: {
                height: 500,
                width: 400,
                maxHeight: 500,
                minWidth: 400,
                maxWidth: 400
              },
              
            })
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Website',
          click () { require('electron').shell.openExternal('https://www.backslashlinux.com') }
        }
      ]
    }
  ]
  
  if (process.platform === 'darwin') {
    template[0].submenu = [
      {
        label: 'About',
        click: () =>
          openAboutWindow({
          icon_path: path.join(__dirname, '512.png'),
              copyright: 'Developed by BackSlash Linux',
              package_json_dir: __dirname,
              bug_report_url: 'https://bugs.launchpad.net/backslashlinux',
              homepage: 'https://www.backslashlinux.com',
              license: 'GPL-3.0',
              description: 'BackSlash Music is a simple and fast music player, built for BackSlash Linux Systems.',
              win_options: {
                height: 500,
                width: 400,
                maxHeight: 500,
                minWidth: 400,
                maxWidth: 400
              },
          
        })
      },
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  
    // Window menu
    template[2].submenu = [
      {role: 'close'},
      {role: 'minimize'},
      {type: 'separator'},
      {role: 'front'}
    ]
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
