import * as vscode from 'vscode'
import { spawn } from 'child_process'

export default function makeExecutable() {
  const path = vscode.window.activeTextEditor?.document.fileName
  if (path) {
    spawn('chmod', ['+x', path])
  }
}
