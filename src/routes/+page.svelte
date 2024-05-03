<script>
  import {PUBLIC_AUTH_GITHUB_ID} from '$env/static/public'
  import {PUBLIC_AUTH_GITHUB_SECRET} from '$env/static/public'

  let value = PUBLIC_AUTH_GITHUB_ID
  let value2 = PUBLIC_AUTH_GITHUB_SECRET
</script>

<main>
  <h1>SvelteKit Auth Example</h1>
  <p>
    This is an example site to demonstrate how to use <a
      href="https://kit.svelte.dev/">SvelteKit</a
    >
    with <a href="https://sveltekit.authjs.dev">SvelteKit Auth</a> for authentication.
  </p>
</main>

<h3>{value}</h3>
<h3>{value2}</h3>

<style>
  main {
    flex: 1;
  }
</style>
