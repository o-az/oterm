set shell := ["fish", "-c"]
set dotenv-load := true
set positional-arguments := true
set allow-duplicate-recipes := true
set allow-duplicate-variables := true

default: fmt

[group('lint')]
fmt:
    just --fmt --unstable
    nixfmt *.nix **/*.nix **/**/*.nix --width=100
    /bin/sh ./scripts/biome.sh check . --write --unsafe

[group('cleanup')]
rm-dots:
    sudo find . -type f -name "._*" -exec rm -r {} +
