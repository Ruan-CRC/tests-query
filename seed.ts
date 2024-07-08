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


const uuid7U = ['019089c2-f180-744c-a6e3-28aed205df79', '019089c2-c5a0-744c-a6df-ae3b5e74b5a8', '019089c2-7e3c-744c-a6e3-28aed205df79', '019089c2-7e3c-744c-a6e3-28aed205df79', '019089c2-7e3c-744c-a6e3-28aed205df79', '019089c2-7e3c-744c-a6e3-28aed205df79', '019089c2-7e3c-744c-a6e3-28aed205df79', '019089c2-7e3c-744c-a6e3-28aed205df79']

const uuid4U = ['38663d24-8a6e-47a2-a270-0b661e6f3435', '4cea6160-f9d8-4989-8145-2f00ec10626d', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b', 'f4b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b']
