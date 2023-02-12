<script lang="ts">
	import { Form, FormGroup, FormCheck, Input, Button } from 'sveltestrap';
	import { createEventDispatcher } from 'svelte';
	import { marked } from 'marked';
	import TextArea from '$lib/components/TextAreaAutosize.svelte';
	import headerData from '$lib/stores/headerData';
	import { page } from '$app/stores';

	export let id = '';
	export let title: string, subtitle: string, content: string;

	const dispatcher = createEventDispatcher();
	function submitBlog() {
		console.log('dispatching submitBlog with payload', { id, title, subtitle, content });
		dispatcher('submitBlog', { id, title, subtitle, content });
	}

	let fullPreview = false;

	$: if (fullPreview) {
		$headerData.title = title;
		$headerData.subtitle = subtitle;
	} else {
		if ($page.route?.id?.endsWith('edit')) {
			$headerData.title = 'Edit';
			$headerData.subtitle = 'Edit a blog post';
		} else if ($page.route?.id?.endsWith('create')) {
			$headerData.title = 'Create';
			$headerData.subtitle = 'Create a new blog post';
		} else {
			$headerData.title = '404';
			$headerData.subtitle = 'Page not found';
		}
	}
</script>

<div class="create-blog">
	<FormCheck inline type="switch" label="Full Preview" bind:checked={fullPreview} />
	{#if !fullPreview}
		<Form>
			<FormGroup floating label="Title">
				<Input bind:value={title} placeholder="Enter a titles" />
			</FormGroup>
			<FormGroup floating label="Subtitle">
				<Input bind:value={subtitle} placeholder="Enter a subtitle" />
			</FormGroup>
		</Form>
		<h2>Markdown Content</h2>
		<TextArea bind:value={content} minRows={8} maxRows={40} />
	{/if}
	<div class="preview px-2">
		<p>{@html marked.parse(content) ?? ''}</p>
	</div>
	<Button on:click={submitBlog} color="primary">Submit</Button>
</div>

<style>
	:global(form) {
		color: black;
	}

	:global(.create-blog .preview) {
		min-height: 169px;
	}
</style>
