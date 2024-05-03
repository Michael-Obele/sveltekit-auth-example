<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData
  import { page } from "$app/stores"
</script>

{#if $page.data.session}
  <h1>Protected page: Admin</h1>
  <p>
    This is a protected content. You can access this content because you are
    signed in.
  </p>
  <p>Session expiry: {$page.data.session?.expires}</p>
  <h3>Now Lets see if you're an Admin</h3>
  <h1>Register</h1>
  <form action="?/register" method="POST">
    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" required />
    </div>
    <div>
      <label for="email">EMAIL</label>
      <input id="email" name="email" type="email" required />
    </div>

    <button type="submit">Register</button>
  </form>
{:else}
  <h1>Access Denied</h1>
{/if}

{JSON.stringify($page)}
