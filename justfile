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
    biome check . --write --unsafe

[group('cleanup')]
rm-dots:
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +
    sudo find . -type f -name "._*" -exec rm -r {} +

[group('cleanup')]
permissions:
    sudo chown -R $USER .
