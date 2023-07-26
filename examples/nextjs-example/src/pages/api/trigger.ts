import { client } from "@/trigger";

import "@/jobs/index";

import { createPagesRoute } from "@trigger.dev/nextjs";

const { handler, config } = createPagesRoute(client);

export { config };

export default handler;
