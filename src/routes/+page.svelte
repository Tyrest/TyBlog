<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import PostView from '$lib/components/PostView.svelte';
	import { Container } from 'sveltestrap';
	import headerData from '$lib/stores/headerData';
	import background from '$lib/images/blob-scene-haikei.svg';
	import type { PageData } from './$types';

	export let data: PageData;

	$headerData.title = 'TyBlog';
	$headerData.subtitle = "A home for Tyler's thoughts";
	$headerData.background = background;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Tyler's Blog" />
</svelte:head>

<section>
	<Container class="text-center my-5">
		<h1>Hello, World!</h1>

		<p>This is just a place for me to document my journey as a developer.</p>
	</Container>

	<PostView header={'Recent Posts'} data={data.posts} />
</section>

<style>
	:global(.hello-world) {
		margin-top: 2rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
