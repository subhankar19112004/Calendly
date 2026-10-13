# Generating Prisma Client (Prisma ORM v7) (/docs/orm/v7/prisma-client/setup-and-configuration/generating-prisma-client)

> For the complete Prisma documentation index, see [llms.txt](https://www.prisma.io/docs/llms.txt). A markdown version of any docs page is available by appending `.md` to its URL.

Learn when and how to run prisma generate, configure the generator output, and import the generated client in your app.

Location: ORM > v7 > Prisma Client > Setup and Configuration > Generating Prisma Client

`prisma generate` creates Prisma Client from the models and generator configuration in your `schema.prisma` file.

## Define a generator [#define-a-generator]

In Prisma ORM v7, the `output` field is required:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "./generated"
}
```

## Generate the client [#generate-the-client]

Run the following command whenever you add models, change fields, or update generator settings:

  

#### bun

```bash
bunx prisma generate
```

#### pnpm

```bash
pnpm prisma generate
```

#### yarn

```bash
yarn prisma generate
```

#### npm

```bash
npx prisma generate
```

If you want the CLI-specific options such as `--watch` or `--generator`, see the [`prisma generate` command reference](https://www.prisma.io/docs/cli/v7/generate).

## Import the generated client [#import-the-generated-client]

Import Prisma Client from the output path you configured:

```ts
import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();
```

## When to run generate [#when-to-run-generate]

You should run `prisma generate` after:

* changing your Prisma schema
* updating generator configuration
* enabling features that affect the client API
* pulling schema changes from another branch or teammate

In many projects it also makes sense to run `prisma generate` in `postinstall` or before your production build so deployments always use a current client.

## Related pages [#related-pages]

* [Introduction to Prisma Client](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/introduction)
* [Generators in the Prisma schema](https://www.prisma.io/docs/orm/v7/prisma-schema/overview/generators)
* [Prisma CLI reference for generate](https://www.prisma.io/docs/cli/v7/generate)

## Related pages

- [`Configuring error formatting`](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/error-formatting): This page explains how to configure the formatting of errors when using Prisma Client
- [`Custom model and field names`](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/custom-model-and-field-names): Learn how you can decouple the naming of Prisma models from database tables to improve the ergonomics of the generated Prisma Client API
- [`Database connections`](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/databases-connections): Learn how to manage database connections and configure connection pools
- [`Database polyfills`](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/database-polyfills): Prisma Client provides features that are not achievable with relational databases. These features are referred to as "polyfills" and explained on this page.
- [`Introduction to Prisma Client`](https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/introduction): Learn how to set up and configure Prisma Client in your project