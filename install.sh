#!/usr/bin/env bash

rm -r node_modules .next --force
mkdir log

printf "\nInstalling packages...\n" && \
yarn install && \

printf "All done...\n"