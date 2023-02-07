<script lang="ts">
	import { Button } from 'sveltestrap';
	import firebase from 'firebase/compat/app';
	import { setDoc } from 'firebase/firestore/lite';
	import { userDoc } from '$lib/Firebase.js';
	import { goto } from '$app/navigation';

	async function googleLogIn() {
		try {
			const provider = new firebase.auth.GoogleAuthProvider();

			let user = await firebase.auth().signInWithPopup(provider);

			if (user.user) {
				await setDoc(userDoc(user.user.uid), {
					username: user.user.displayName,
					email: user.user.email,
				});

				goto('/');
			} else {
				console.log('No user');
			}
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
