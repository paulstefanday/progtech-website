# Migration `20200622214551-added-created-at-field`

This migration has been generated by Paul at 6/22/2020, 9:45:51 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Submissions" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "form" SET DEFAULT E'UNASSSIGNED',
ALTER COLUMN "owner" SET DEFAULT E'UNASSSIGNED';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200622210004-added-correct-default..20200622214551-added-created-at-field
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -29,12 +29,13 @@
   MOIRA
 }
 model Submissions {
-  id          Int     @default(autoincrement()) @id
+  id          Int      @default(autoincrement()) @id
   name        String?
   email       String?
-  form        Form    @default(UNASSSIGNED)
-  owner       Team    @default(UNASSSIGNED)
+  form        Form     @default(UNASSSIGNED)
+  owner       Team     @default(UNASSSIGNED)
   data        Json
   privateData Json
+  createdAt   DateTime @default(now())
 }
```


