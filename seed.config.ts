import { SeedPostgres } from "@snaplet/seed/adapter-postgres";
import { defineConfig } from "@snaplet/seed/config";
import postgres from "postgres";

export default defineConfig({
  adapter: () => {
    const client = postgres('postgresql://root:root@192.168.128.3:5432/lavajato');
    return new SeedPostgres(client);
  },
});
