import ClientePG from "../clientPostgres";

try {
  const cli = new ClientePG()

  const query = `CREATE TABLE public.postUUID4 (
        id uuid NOT NULL PRIMARY KEY,
        username text NOT NULL,
        email text NOT NULL
      );`;

  const result = await cli.client.query(query)

  if (result) {
    console.log('Successfully query executed!')
  }
} catch (error) {
  console.error(error)
}
