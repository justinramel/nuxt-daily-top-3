import {getTop3} from "~/lib/prisma";

export default defineEventHandler(async () => {
    return await getTop3();
})