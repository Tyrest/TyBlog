<script lang="ts">
	import { Row, Col, Button } from 'sveltestrap';
	import firebase from 'firebase/compat/app';

	async function googleLogIn() {
		try {
			const provider = new firebase.auth.GoogleAuthProvider();

			await firebase.auth().signInWithPopup(provider);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="login-with-google">
	<!-- button that calls firebase's login with redirect -->
	<Button on:click={googleLogIn} color="primary">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
			alt="Google logo"
		/>
		<span>Sign in with Google</span>
	</Button>
</div>

<style>
	.login-with-google {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-with-google button img {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
</style>
