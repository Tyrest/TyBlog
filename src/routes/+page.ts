import { query, getDocs } from "firebase/firestore/lite";
import { blogCollection } from "$lib/Firebase";
import type { DocumentData } from "firebase/firestore/lite";
import type { PageLoad } from "./$types";

async function getBlogPosts(): Promise<{ id: string; data: () => DocumentData; }[]> {
    const q = query(blogCollection);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
}

export const load = (async ({ params }) => {
    return {
        posts: await getBlogPosts()
    };
}) satisfies PageLoad;