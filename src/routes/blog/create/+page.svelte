<script lang="ts">
	import { goto } from '$app/navigation';
	import { Container } from 'sveltestrap';
	import CreateBlog from '$lib/components/blog/CreateBlog.svelte';
	import { addDoc, serverTimestamp } from 'firebase/firestore/lite';
	import authStore from '$lib/stores/authStore';
	import { blogCollection } from '$lib/Firebase.js';

	async function createBlog(event: CustomEvent<{ title: string, subtitle: string, content: string }>) {
		if (!$authStore.isLoggedIn) {
			console.error('User not logged in');
			return;
		} else {
			if ($authStore.user?.uid != 'sqcpOdEU7QaniA4E5BPbu8YCiwS2') {
				console.error('User not authorized');
				return;
			} else {
				console.log({ ...event.detail, owner: $authStore.user, timestamp: serverTimestamp() });
				const docRef = await addDoc(blogCollection, {...event.detail, owner: $authStore.user?.uid, timestamp: serverTimestamp()});
				console.log('Document written with ID: ', docRef.id);
				goto('/blog/' + docRef.id);
			}
		}
	}
</script>

<Container>
	<CreateBlog on:createBlog={createBlog} title={""} subtitle={""} content={""}/>
</Container>
