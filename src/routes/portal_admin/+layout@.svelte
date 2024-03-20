<script>
    // @ts-ignore
    import Sidebar from "./components/sidebar.svelte"
    import Main from "./components/main.svelte"
    import Footer from "$lib/footer.svelte"
</script>

<div class="index">
    <!-- <Nav/> -->
    <Sidebar/>
    <slot/>
    <Footer/>
</div>

<!-- <style>
    .index{
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: minmax(75px, auto);
    }
</style> -->