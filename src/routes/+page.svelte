<script>

    let count = 0;

    function increment(){
        count++;
    }
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<button on:click={increment}
class="rounded-full btn btn-primary">
    clicked {count}
    {count === 1 ? "time" : "times"}
</button>



<nav>
	<a href="/">home</a>
    <a href="/about">about</a>
    <a href="/portal_admin">admin</a>
</nav>