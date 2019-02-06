// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function rangeWholeFile(doc: vscode.TextDocument): vscode.Range {
	let lastlinum = doc.lineCount - 1;
	let first = doc.lineAt(0).range.start.character;
	let last = doc.lineAt(lastlinum).range.end.character;
	return new vscode.Range(0, first, lastlinum, last);
}

function getFormattedString(doc: vscode.TextDocument): string {
	return "hello";
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.languages.registerDocumentFormattingEditProvider('rust', {
		provideDocumentFormattingEdits(doc: vscode.TextDocument): vscode.TextEdit[] {
			return [vscode.TextEdit.replace(rangeWholeFile(doc), getFormattedString(doc))];
		}
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
