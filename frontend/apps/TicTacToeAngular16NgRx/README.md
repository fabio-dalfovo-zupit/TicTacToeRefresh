# Angular v16 with NgRx

Create a new project `npx nx generate @nx/angular:application --name=TicTacToeAngular16NgRx --bundler=esbuild --directory=apps/TicTacToeAngular16NgRx --standalone=false --projectNameAndRootFormat=as-provided --skipTests=true --unitTestRunner=none --no-interactive --dry-run `.
This time the command is different and more complex because we have created a new Angular project in the Nx workspace.

### Components

There are 3 base components
- Board
- Cell
- Status display
