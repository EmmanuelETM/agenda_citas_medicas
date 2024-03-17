<script>
    import "../app.css"
    // import "tailwindcss/tailwind.css";
    import Footer from "$lib/footer.svelte";
    import Header from "$lib/header.svelte";
</script>

<!-- <Header/> -->

<main>
<slot/>

</main>

<!-- <Footer/> -->
<style>
    nav{
        bottom: 0;
        left: 0;
    }
</style>

