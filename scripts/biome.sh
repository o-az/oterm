#!/usr/bin/env bash

ARCHITECTURE=$(uname -m)

# if architecture is aarch64, call `./node_modules/@biomejs/cli-linux-arm64-musl/biome`
# otherwise call `biome`

if [ "$ARCHITECTURE" == "aarch64" ]; then
  ./node_modules/@biomejs/cli-linux-arm64-musl/biome "$@"
else
  biome "$@"
fi
