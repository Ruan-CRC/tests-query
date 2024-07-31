import ClientePG from "../clientPostgres";

try {
  const cli = new ClientePG()
  let query: string;

  query = `CREATE TABLE public.postUUID4 (
        id uuid NOT NULL PRIMARY KEY,
        username text NOT NULL,
        email text NOT NULL
      );`;

  // query = `CREATE TABLE public.postUUID7 (
  //   id uuid NOT NULL PRIMARY KEY,
  //   username text NOT NULL,
  //   email text NOT NULL
  // );`;

  await cli.client.query(query)

  console.log('Successfully query executed!')
} catch (error) {
  console.error(error)
}
