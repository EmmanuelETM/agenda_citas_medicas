<script>
    import Nav from "./components/nav.svelte";
    import Footer from "$lib/footer.svelte"
</script>

<div class="index">
    <Nav/>
    <!-- <Sidemenu/> -->
    <slot/>
    <Footer/>
</div>

<style>
    .index{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(129px, auto);
    }
</style>