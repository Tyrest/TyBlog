<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import './styles.css';

	import firebase from 'firebase/app';
	import 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyDZD-A4O-O0Z4d1PeKxhu3OYqztb43hFZo',
			authDomain: 'tyblog-2e646.firebaseapp.com',
			projectId: 'tyblog-2e646',
			storageBucket: 'tyblog-2e646.appspot.com',
			messagingSenderId: '124483800186',
			appId: '1:124483800186:web:953ecba0408a3ab5103fc3',
			measurementId: 'G-PFRYMRT56E'
		};

		firebase.initializeApp(firebaseConfig);
	});
</script>

<div class="app">
	<Navbar />

	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
