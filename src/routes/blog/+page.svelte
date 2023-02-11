<script lang="ts">
	import PostView from '$lib/components/PostView.svelte';
	import headerData from '$lib/stores/headerData';
	import background from '$lib/images/blurry-gradient-haikei.svg';
    import type { PageData } from './$types';

	export let data: PageData;

	$headerData.title = 'Blog Posts';
	$headerData.subtitle = "Tyler's Recent Blog Posts";
	$headerData.background = background;
</script>

<svelte:head>
	<title>Blogs</title>
	<meta name="description" content="Tyler's Blog Posts" />
</svelte:head>

<section>
	<PostView header={'Recent Posts'} data={data.posts}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
