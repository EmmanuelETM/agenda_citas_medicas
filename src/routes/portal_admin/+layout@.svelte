<script>


    // @ts-ignore
    import Sidebar from "./components/sidebar.svelte"
    import Main from "./components/main.svelte"
    import Footer from "$lib/footer.svelte"

</script>

<div class="index min-h-screen">
    <Sidebar/>
    <slot/>
</div>
<Footer/>

