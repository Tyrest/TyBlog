<script>
	import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	const googleLogIn = () => {
		signInWithRedirect(auth, new GoogleAuthProvider());
	};
</script>

<div class="login-with-google">
	<!-- button that calls firebase's login with redirect -->
	<button on:click={() => googleLogIn()}>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
			alt="Google logo"
		/>
		<span>Sign in with Google</span>
	</button>
</div>
