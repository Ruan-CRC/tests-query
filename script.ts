import ClientePG from "./clientPostgres";

const cli = new ClientePG()

const query = `CREATE TABLE public.postUUID7 (
      id uuid NOT NULL PRIMARY KEY,
      username text NOT NULL,
      email text NOT NULL
    );`;

const result = await cli.client.query(query)

console.log(result);
