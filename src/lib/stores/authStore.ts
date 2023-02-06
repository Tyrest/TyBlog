import { writable } from "svelte/store";
import type firebase from "firebase/compat/app";


const authStore = writable<{
    isLoggedIn: boolean;
    user: firebase.User | null;
    firebaseControlled: boolean;
}>({
    isLoggedIn: false,
    user: null,
    firebaseControlled: false,
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set,
};