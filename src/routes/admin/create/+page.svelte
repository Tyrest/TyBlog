<script lang="ts">
	import { Container } from 'sveltestrap';
	import EditBlog from '$lib/components/blog/EditBlog.svelte';
	import headerData from '$lib/stores/headerData';
	import { createBlogPost } from '$lib/api/blog';

	$headerData.title = 'Create Post';
	$headerData.subtitle = 'Create a new blog post';
</script>

<Container>
	<EditBlog on:submitBlog={createBlogPost} title={""} subtitle={""} content={""}/>
</Container>
