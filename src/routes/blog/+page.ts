import { getBlogPosts } from "$lib/api/blog";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    return {
        posts: await getBlogPosts()
    };
}) satisfies PageLoad;