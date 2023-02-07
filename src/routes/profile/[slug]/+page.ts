import { query, where, getDocs } from "firebase/firestore/lite";
import { blogCollection } from "$lib/Firebase";
import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore/lite";
import type { PageLoad } from "./$types";

async function getBlogPosts(uid: string): Promise<{ id: string; data: () => DocumentData; }[]> {
    const q = query(blogCollection, where("owner", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
}

export const load = (async ({ params }) => {
    return {
        posts: await getBlogPosts(params.slug)
    };
}) satisfies PageLoad;