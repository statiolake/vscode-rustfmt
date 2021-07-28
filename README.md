# vscode-rustfmt README

Register `rustfmt` as a formatter for Rust code.

Currently VSCode has a great extension for Rust, `vscode-rls`. However that extension doesn't have support for single `.rs` file. Especially formatting action does not triggered when file saved. This extension solves that problem.

## Features

* Format when editing single `.rs` file

## Requirements

You must have `rustfmt` in your PATH.

## Extension Settings

There is no settings now.

## Known Issues

No issues are known.

## Release Notes

### Version 0.1.2

Add `--edition 2018` flag.

### Version 0.1.1

Fix and issue related to not picking the local rustfmt.toml. (#2)

### Version 0.1.0

(This version is lost)

### Version 0.0.1

Initial release.
