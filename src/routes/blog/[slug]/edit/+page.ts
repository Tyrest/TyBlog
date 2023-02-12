import { getDoc, doc } from "firebase/firestore/lite";
import { blogCollection } from "$lib/Firebase";
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const docRef = doc(blogCollection, params.slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            post: docSnap.data(),
        };
    } else {
        console.log("No such document!");
        error(404, "Not found");
        return {};
    }
}) satisfies PageLoad;