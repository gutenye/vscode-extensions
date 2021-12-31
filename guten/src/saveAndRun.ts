import * as vscode from 'vscode'

export default function saveAndRun() {
  const document = vscode.window.activeTextEditor?.document
  if (!document) {
    return
  }

  const firstLine = document.lineAt(0).text
  const found = firstLine.match(/#!\/usr\/bin\/env (.*)/)
  const cmd = (found && found[1])?.trim()
  if (!cmd) {
    return
  }

  let terminal = vscode.window.activeTerminal
  if (!terminal) {
    terminal = vscode.window.createTerminal()
  }

  document.save()
  terminal.sendText(`${cmd} "${document.fileName}`, true)
  terminal.show()
}
