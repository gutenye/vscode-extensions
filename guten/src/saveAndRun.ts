import { window } from 'vscode'

export default function saveAndRun() {
  const document = window.activeTextEditor?.document
  if (!document) {
    return
  }

  const firstLine = document.lineAt(0).text
  const found = firstLine.match(/#!\/usr\/bin\/env (.*)/)
  const cmd = (found && found[1])?.trim()
  if (!cmd) {
    return
  }

  let terminal = window.activeTerminal
  if (!terminal) {
    terminal = window.createTerminal()
  }

  document.save()
  terminal.show(true)
  terminal.sendText(`${cmd} "${document.fileName}`, true)
  // terminal.sendText(`                ${cmd} "${document.fileName}`, true) // space for missing text
}
