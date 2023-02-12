<script lang="ts">
	import { Container } from 'sveltestrap';
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import EditButton from '$lib/components/blog/EditButton.svelte';
	import authStore from '$lib/stores/authStore';
	import { page } from '$app/stores';

	export let data: PageData;

	import headerData from '$lib/stores/headerData';

	$headerData.title = data.post?.title ?? '404';
	$headerData.subtitle = data.post?.subtitle ?? 'Post not found';
</script>

<Container>
	{#if $authStore.isLoggedIn}
		{#if $authStore.user?.uid == 'sqcpOdEU7QaniA4E5BPbu8YCiwS2'}
			<EditButton slug={$page.params.slug} />
		{/if}
	{/if}
	<p>{@html marked.parse(data.post?.content) ?? ''}</p>
</Container>
