// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as childProcess from "child_process";

import * as vscode from "vscode";
import { z } from "zod";

const schema = z.object({
  path: z.string(),
  edition: z.union([z.literal("2015"), z.literal("2018"), z.literal("2021")])
});

type Config = z.infer<typeof schema>;

function getConfig(): Config {
  const config = vscode.workspace.getConfiguration("rustfmt");
  return schema.parse({
    path: config.get("path"),
    edition: config.get("edition")
  });
}

function rangeWholeFile(doc: vscode.TextDocument): vscode.Range {
  const lastlinum = doc.lineCount - 1;
  const first = doc.lineAt(0).range.start.character;
  const last = doc.lineAt(lastlinum).range.end.character;
  return new vscode.Range(0, first, lastlinum, last);
}

function getFormattedString(doc: vscode.TextDocument): string {
  const workspaceDir = vscode.workspace.getWorkspaceFolder(doc.uri);
  const config = getConfig();
  return childProcess
    .execFileSync(config.path, ["--edition", config.edition], {
      encoding: "utf-8",
      input: doc.getText(),
      cwd: workspaceDir?.uri.fsPath
    })
    .toString();
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const formatProvider = {
    provideDocumentFormattingEdits(
      doc: vscode.TextDocument
    ): vscode.TextEdit[] {
      return [
        vscode.TextEdit.replace(rangeWholeFile(doc), getFormattedString(doc))
      ];
    }
  };

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      "rust",
      formatProvider
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
