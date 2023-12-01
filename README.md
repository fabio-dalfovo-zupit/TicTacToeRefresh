# TicTacToe Refresh

It's a refreshed version of my TocTacToe test project.
I want to start a new version with Angular version 16 and create a new project for each new evolution of Angular project.

Let's go!

## Nx

To support multiple versions of the same application, even with different frameworks/techniques, I decided to use the Nx monorepo tool, [link to Nx tool](https://nx.dev/).

To create a new **monorepo** project, you need to use the `npx create-nx-workspace@latest` command, but we have an existing application and want to migrate it to monorepo. To do this just `npx nx@latest init --integrated` inside the folder of the project.

## Angular projects

 - v16 - [link to README](./frontend/angular16/README.md)
