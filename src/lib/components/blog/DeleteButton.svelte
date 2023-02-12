<script lang="ts">
	import { Container } from 'sveltestrap';
	import { deleteBlogPost } from '$lib/api/blog';

	export let slug: string;

	const deletePost = async () => {
		await deleteBlogPost(new CustomEvent('deleteBlog', { detail: { id: slug } }));
	};
</script>

<Container class="text-end">
	<button on:click={deletePost}>
		<span class="fa-stack fa-lg">
			<i class="fa fa-circle fa-stack-2x" />
			<i class="fa fa-trash fa-stack-1x fa-inverse" />
		</span>
	</button>
</Container>

<style>
	:global(button) {
		all: unset;
		color: var(--color-theme-1);
		text-decoration: none;
		transition: 0.3s ease;
	}

	:global(button:hover) {
		color: var(--color-theme-1-weak);
		text-decoration: none;
	}
</style>
