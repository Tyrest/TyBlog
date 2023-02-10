<script lang="ts">
	import { Container } from 'sveltestrap';
	import PostView from '$lib/components/PostView.svelte';
    import AdminButtons from '$lib/components/blog/AdminButtons.svelte';
	import GoogleLogin from '$lib/components/auth/GoogleLogin.svelte';
	import authStore from '$lib/stores/authStore';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Container>
    {#if $authStore.isLoggedIn}
        {#if $authStore.user?.uid == 'sqcpOdEU7QaniA4E5BPbu8YCiwS2'}
            <AdminButtons />
            <PostView header={'Your Blog Posts'} data={data.posts} />
        {/if}
    {:else}
        <GoogleLogin />
    {/if}
</Container>
