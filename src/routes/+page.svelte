<script>
	import Counter from '$lib/components/Counter.svelte';
	import PostView from '$lib/components/PostView.svelte';

	import authStore from '$lib/stores/authStore';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Tyler's Blog" />
</svelte:head>

<section>
	<h1>
		Hello
		{#if $authStore.isLoggedIn}
			{#if $authStore.user}
				{@html $authStore.user.displayName}!
			{/if}
		{:else}
			World!
		{/if}
	</h1>

	<p>This is just a place for me to document my journey as a developer.</p>

	<!-- <PostView /> -->

	<Counter />
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
