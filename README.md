<div align="center">
    <h1>⚜️ imr-db ⚜️</h1>
    <p>Infinite Magic Raid Web App, DB, and API</p>
    <div>
    <a href="https://github.com/petarzarkov/imr-db/actions/"><img src="https://github.com/petarzarkov/imr-db/actions/workflows/build.yml/badge.svg?branch=main" alt="Build status"></a>
    <a href="https://github.com/petarzarkov/imr-db/blob/main/LICENSE"><img src="https://img.shields.io/github/license/petarzarkov/imr-db" alt="License"></a>
    <p style="color: gray;">Stack</p>
    <a href="https://pnpm.io/" target="blank"><img title="pnpm" alt="pnpm" width="26" src="https://pnpm.io/img/favicon.png" /></a>
    <a href="https://www.javascript.com/"><img title="JavaScript" alt="JavaScript" width="26px" height="26px" src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" /></a>
    <a href="https://www.typescriptlang.org/"><img title="Typescript" alt="Typescript" width="26px" height="26px" src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" /></a>
    <a href="https://nodejs.org/en/"><img title="NodeJS" alt="NodeJS" width="26px" height="26px" src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" /></a>
    <a href="https://www.docker.com/"><img title="Docker" alt="Docker" width="26px" height="26px" src="https://github.com/get-icon/geticon/raw/master/icons/docker-icon.svg" /></a>
    <a href="https://jestjs.io/" title="Jest"><img src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg" alt="Jest" width="26px" height="26px"></a>
    <a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="26px" height="26px"></a>
    </div>
    <img alt="obraz" src="./imr.webp" />
</div>

## Development

-   `npm i -g pnpm@latest`
-   `pnpm i`
-   commands
    -   `pnpm run build`
    -   `pnpm run lint`
    -   `pnpm run lint:fix`

### Dev Setup

from root, in order:

-   `docker-compose up` - should start db
-   `npm run db:update`
-   `npm run dev`- starts services concurrently
-   open http://localhost:5058 to access the client or http://localhost:5058/api to check the agent docs
