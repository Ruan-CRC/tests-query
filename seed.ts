import { createSeedClient } from "@snaplet/seed";
import { copycat } from '@snaplet/copycat'

import { v7 as uuid7, v4 as uuid4 } from 'uuid';

const seed: any = await createSeedClient();

// Truncate all tables in the database
await seed.$resetDatabase();

// Seed 500 posts with UUID v7
setInterval(async () => {
  await seed.postuuid7((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid7() }));
  await seed.postuuid7((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid7() }));
  await seed.postuuid7((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid7() }));
  await seed.postuuid7((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid7() }));
}, 100)


// Seed 100 posts with UUID v4
setInterval(async () => {
  await seed.postuuid4((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid4() }));
  await seed.postuuid4((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid4() }));
  await seed.postuuid4((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid4() }));
  await seed.postuuid4((x: (arg0: number, arg1: { id: string; }) => any) => x(1, { id: uuid4() }));
}, 100)
