# vscode-rustfmt

Register `rustfmt` as a formatter for Rust code.

Note: You basically doesn't need this extension since now you can use official [Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) extension to run formatter (even for single Rust file).

## Features

- Format when editing `.rs` file.

## Configurations

Include the following setting to your `settings.json`:

```
    "[rust]": {
        "editor.defaultFormatter": "statiolake.vscode-rustfmt",
        "editor.formatOnSave": true  //optional
    }
```

Alternatively, you can use official formatter:

```
    "[rust]": {
        "editor.defaultFormatter": "rust-lang.rust",
        "editor.formatOnSave": true  //optional
    }
```

## Requirements

You must have `rustfmt` in your PATH.

## Release Notes

### Version 0.1.3

Make `edition` flag configurable (defaults to 2021).

### Version 0.1.2

Add `--edition 2018` flag.

### Version 0.1.1

Fix and issue related to not picking the local rustfmt.toml. (#2)

### Version 0.1.0

(This version is lost)

### Version 0.0.1

Initial release.
