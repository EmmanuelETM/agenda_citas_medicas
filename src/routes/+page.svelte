<script>
    import "../app.css";

    let count = 0;

    function increment(){
        count++;
    }
</script>


<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<button on:click={increment}>
    clicked {count}
    {count === 1 ? "time" : "times"}
</button>
