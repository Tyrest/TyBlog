<script lang="ts">
	import { Container } from 'sveltestrap';
	import type { DocumentData } from 'firebase/firestore/lite';

	export let header: string;
	export let data: { id: string; data: () => DocumentData }[] = [];
</script>

<Container id="posts" class="post-view">
	<h1>{header}</h1>
	<hr />
	{#each data as post}
		<Container class="post-preview">
			<a href="/blog/{post.id}">
				<h2 class="post-title">{post.data().title}</h2>
				<p class="post-subtitle">{post.data().subtitle}</p>
			</a>
			<p class="post-meta text-muted">
				Posted on {post.data().timestamp.toDate().toString().substring(4, 10)}
			</p>
		</Container>
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
