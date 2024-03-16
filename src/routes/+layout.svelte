<script>
    import "../app.css"
    // import "tailwindcss/tailwind.css";
    import Footer from "$lib/footer.svelte";
    import Header from "$lib/header.svelte";
</script>

<!-- <Header/> -->

<main>

<nav>
	<a href="/">home</a>
    <a href="/about">about</a>
    <a href="/portal_admin">admin</a>
</nav>

<slot/>

</main>

<!-- <Footer/> -->
<style>
    nav{
        bottom: 0;
        left: 0;
    }
</style>

