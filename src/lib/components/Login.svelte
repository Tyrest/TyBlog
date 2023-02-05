<script lang="ts">
    import { Row, Col } from 'sveltestrap';
</script>

<Row>
    <Col>
        <h1>Login with Google</h1>
    </Col>
</Row>

<Row>
    <Col>
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
    </Col>
</Row>