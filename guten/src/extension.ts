import * as vscode from 'vscode'
import { spawn } from 'child_process'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'gutenye.makeExecutable',
    () => {
      const path = vscode.window.activeTextEditor?.document.fileName
      if (path) {
        spawn('chmod', ['+x', path])
      }
    }
  )
  context.subscriptions.push(disposable)
}

export function deactivate() {}
