<script lang="ts">
	import { Form, FormGroup, FormCheck, Input, Button, Row, Col } from 'sveltestrap';
	import { createEventDispatcher } from 'svelte';
	import { marked } from 'marked';
	import TextArea from '$lib/components/TextAreaAutosize.svelte';

	const dispatcher = createEventDispatcher();
	export let title: string, subtitle: string, content: string;

	function createBlog() {
		console.log('dispatching createBlog with payload', { title, subtitle, content });
		dispatcher('createBlog', { title, subtitle, content });
	}

	let fullPreview = false;
</script>

<div class="create-blog">
	<h1>Create a New Blog Post</h1>
	<Form>
		<FormGroup floating label="Title">
			<Input bind:value={title} placeholder="Enter a titles" />
		</FormGroup>
		<FormGroup floating label="Subtitle">
			<Input bind:value={subtitle} placeholder="Enter a subtitle" />
		</FormGroup>
	</Form>
	<Row>
		{#if !fullPreview}
			<Col>
				<h2>Markdown Content</h2>
				<TextArea bind:value={content} minRows={8} maxRows={40}></TextArea>
			</Col>
		{/if}
		<Col>
			<Row>
				<Col>
					<h2>Preview</h2>
				</Col>
				<Col class="text-end">
					<FormCheck
						inline
						label="Full Preview"
						bind:checked={fullPreview}
					/>
				</Col>
			</Row>
			<div class="preview px-2">
				<p>{@html marked.parse(content) ?? ''}</p>
			</div>
		</Col>
	</Row>
	<Button on:click={createBlog} color="primary">Create</Button>
</div>

<style>
	:global(form) {
		color: black;
	}

	:global(.create-blog .preview) {
		min-height: 169px;
	}
</style>
