<script>
    import Nav from "./components/nav.svelte";
    // @ts-ignore
    import Sidebar from "./components/sidebar.svelte"
    import Footer from "$lib/footer.svelte"
</script>

<div class="index">
    <!-- <Nav/> -->
    <Sidebar/>
    <slot/>
    <Footer/>
</div>

<style>
    .index{
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: minmax(129px, auto);
    }
</style>