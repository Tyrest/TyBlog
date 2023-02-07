<script lang="ts">
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();
	export let title: string, subtitle: string, content: string;

	function createBlog() {
		console.log('dispatching createBlog with payload', { title, subtitle, content })
		dispatcher('createBlog', { title, subtitle, content });
		title = ''; subtitle = ''; content = '';
	}
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
	<h2>Markdown Content</h2>
	<Form>
		<textarea bind:value={content} class="form-control" placeholder="Enter some content" rows="8" />
		<Button on:click={createBlog} color="primary">Create</Button>
	</Form>
</div>

<style>
	:global(form) {
		color: black;
	}

	:global(form button) {
		margin-top: 2rem;
	}
</style>
