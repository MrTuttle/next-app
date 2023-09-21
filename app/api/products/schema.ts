// app/api/products/schema.ts

import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  prics: z.number().min(1).max(100),
  // age: z.number(),
});
export default schema;
