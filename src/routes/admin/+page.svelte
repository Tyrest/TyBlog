<script lang="ts">
	import { Container } from 'sveltestrap';
	import PostView from '$lib/components/PostView.svelte';
	import CreateButton from '$lib/components/blog/CreateButton.svelte';
	import GoogleLogin from '$lib/components/auth/GoogleLogin.svelte';
	import authStore from '$lib/stores/authStore';
	import headerData from '$lib/stores/headerData';
	import type { PageData } from './$types';

	export let data: PageData;

	$headerData.title = 'Admin';
	$headerData.subtitle = 'Manage your blog posts';
</script>

<Container>
	{#if $authStore.isLoggedIn}
		{#if $authStore.user?.uid == 'sqcpOdEU7QaniA4E5BPbu8YCiwS2'}
			<CreateButton />
			<PostView header={'Your Blog Posts'} data={data.posts} />
		{/if}
	{:else}
		<GoogleLogin />
	{/if}
</Container>
