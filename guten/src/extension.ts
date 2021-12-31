import * as vscode from 'vscode'

import makeExecutable from './makeExecutable'
import saveAndRun from './saveAndRun'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('gutenye.makeExecutable', makeExecutable)
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('gutenye.saveAndRun', saveAndRun)
  )
}

export function deactivate() {}
