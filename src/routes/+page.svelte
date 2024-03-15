<script>

    let count = 0;

    function increment(){
        count++;
    }
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<button on:click={increment}
class="rounded-full bg-cyan-700">
    clicked {count}
    {count === 1 ? "time" : "times"}
</button>



