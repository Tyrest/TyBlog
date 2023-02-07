<script lang="ts">
	import { Container } from 'sveltestrap';
	import type { DocumentData } from 'firebase/firestore/lite';

	export let header: string;
	export let data: { id: string; data: () => DocumentData; }[];
</script>

<Container class="post-view">
	<h1>{header}</h1>
	<hr />
	{#each data as post}
		<div class="post-preview">
			<a href="/blog/{post.id}">
				<h2 class="post-title">{post.data().title}</h2>
				<h3 class="post-subtitle">{post.data().subtitle}</h3>
			</a>
			<p class="post-meta">Posted by <a href="/profile/{post.data().owner}">{post.data().owner}</a> on {post.data().timestamp}</p>
		</div>
		<hr />
	{/each}
</Container>

<!-- <style>
	.post-view {
		font-family: var(--font-mono);
		font-weight: 600;
		font-size: 1rem;
        padding: 5rem 0rem;
	}

	.post-preview {
		font-family: var(--font-mono);
		font-weight: 600;
		font-size: 1rem;
	}

	/* .post-preview a {
		color: var(--color-text);
	} */
</style> -->
