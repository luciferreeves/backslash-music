const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'dist')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'BackSlash-Music-win32-ia32/'),
    authors: 'BackSlash Linux',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'backslash-music.exe',
    setupExe: 'BackSlashMusic.exe',
    setupIcon: path.join(rootPath, '512.ico')
  })
}