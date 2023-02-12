import { query, orderBy, limit, startAfter, where, getDocs } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { doc, addDoc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore/lite";
import { blogCollection } from "$lib/Firebase";
import { auth } from "$lib/Firebase";
import { goto } from "$app/navigation";

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

export async function createBlogPost(event: CustomEvent<{ title: string, subtitle: string, content: string }>) {
    console.log(event.detail);
    if (!auth.currentUser) {
        console.error('User not logged in');
        return;
    } else {
        console.log({ ...event.detail, owner: auth.currentUser, timestamp: serverTimestamp() });
        const docRef = await addDoc(blogCollection, { ...event.detail, owner: auth.currentUser.uid, timestamp: serverTimestamp() });
        if (docRef.id) {
            console.log('Document written with ID: ', docRef.id);
            goto('/blog/' + docRef.id);
        } else {
            console.error('Error adding document: ', docRef);
        }
    }
}

export async function updateBlogPost(event: CustomEvent<{ id: string, title: string, subtitle: string, content: string }>) {
    console.log(event.detail);
    if (!auth.currentUser) {
        console.error('User not logged in');
        return;
    } else {
        await setDoc(doc(blogCollection, event.detail.id), { ...event.detail, owner: auth.currentUser.uid, timestamp: serverTimestamp() });
        console.log('Document updated with ID: ', event.detail.id);
        goto('/blog/' + event.detail.id);
    }
}

export async function deleteBlogPost(event: CustomEvent<{ id: string }>) {
    console.log(event.detail);
    if (!auth.currentUser) {
        console.error('User not logged in');
        return;
    } else {
        if (confirm('Are you sure you want to delete this post?')) {
            await deleteDoc(doc(blogCollection, event.detail.id));
            console.log('Document deleted with ID: ', event.detail.id);
            goto('/blog');
        }
    }
}
