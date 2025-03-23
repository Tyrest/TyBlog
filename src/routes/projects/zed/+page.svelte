<script lang="ts">
	import { Container } from 'sveltestrap';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import headerData from '$lib/stores/headerData';

	// Import the blog post content
	import blogContent from './BLOGPOST.md?raw';

	// Set the header data for this page
	$headerData.title = 'Zed Editor';
	$headerData.subtitle = 'The Next-Generation Code Editor for Collaboration';

	let processedContent = '';

	onMount(() => {
		// Process the markdown content
		processedContent = marked.parse(blogContent);
	});
</script>

<Container class="project-container my-5">
	<p class="blog-content">
		{@html processedContent}
	</p>
</Container>
