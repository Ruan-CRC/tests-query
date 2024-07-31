import { createSeedClient } from "@snaplet/seed";
import { copycat } from '@snaplet/copycat'

import { v7 as uuid7, v4 as uuid4 } from 'uuid';

const seed: any = await createSeedClient();

// Truncate all tables in the database
await seed.$resetDatabase();

const generateData = (count: number, uuid: string) => {
  return Array.from({ length: count }, () => ({
    id: uuid === 'uuid4' ? uuid4() : uuid7(),
    // outros campos
  }));
};

await seed.postuuid4((x: any) => x(300, generateData(3, 'uuid4')));
await seed.postuuid7((x: any) => x(300, generateData(3, 'uuid7')));

process.exit(0);
