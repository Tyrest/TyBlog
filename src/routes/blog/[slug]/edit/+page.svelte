<script lang="ts">
	import { Container } from 'sveltestrap';
	import EditBlog from '$lib/components/blog/EditBlog.svelte';
	import headerData from '$lib/stores/headerData';
	import { updateBlogPost } from '$lib/api/blog';
	import { page } from '$app/stores';

	import type { PageData } from './$types';

	export let data: PageData;

	$headerData.title = 'Create Post';
	$headerData.subtitle = 'Create a new blog post';
</script>

<Container>
	<EditBlog
		on:submitBlog={updateBlogPost}
		id={$page.params.slug}
		title={data.post?.title}
		subtitle={data.post?.subtitle}
		content={data.post?.content}
	/>
</Container>
