<script lang="ts">
	import { Container } from 'sveltestrap';
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

	import headerData from '$lib/stores/headerData';

	$headerData.title = data.post?.title ?? '404';
	$headerData.subtitle = data.post?.subtitle ?? 'Post not found';
</script>

<Container>
	<p>{@html marked.parse(data.post?.content) ?? ''}</p>
</Container>
