import { getDoc, doc } from "firebase/firestore/lite";
import { db } from "$lib/Firebase";
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types";
import { auth } from "$lib/Firebase";

export const load = (async ({ params }) => {
    const docRef = doc(db, "blog", params.slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            post: docSnap.data()
        };
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        error(404, "Not found");
        return {};
    }
}) satisfies PageLoad;