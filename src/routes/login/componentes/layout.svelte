<script>
    // @ts-ignore
    import Sidebar from "./components/sidebar.svelte"
    import Footer from "$lib/footer.svelte"
    import Header from "$lib/header.svelte";
</script>

<div class="index min-h-screen">
    <Sidebar/>
    <slot/>
</div>
<Footer/>
