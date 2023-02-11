import { query, orderBy, limit, startAfter, where, getDocs } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { blogCollection } from "$lib/Firebase";

export async function getBlogPosts(num_posts = 64, startItem: unknown[] | undefined = undefined): Promise<{ id: string; data: () => DocumentData }[]> {
    let q;
    if (startItem) {
        q = query(blogCollection, orderBy('timestamp', 'desc'), limit(num_posts), startAfter(startItem));
    } else {
        q = query(blogCollection, orderBy('timestamp', 'desc'), limit(num_posts));
    }
    const querySnapshot = await getDocs(q);
    // for (const doc of querySnapshot.docs) {
    //     console.log(doc.id, " => ", doc.data());
    // }
    return querySnapshot.docs;
}

export async function getBlogPost(id: string): Promise<{ id: string; data: () => DocumentData } | undefined> {
    const q = query(blogCollection, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
        return querySnapshot.docs[0];
    } else {
        return undefined;
    }
}