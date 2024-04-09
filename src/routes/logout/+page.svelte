<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    
    export let data;
    let {supabase, session} = data
    $: ({supabase, session} = data)

    onMount(async () => {
        const {error} = await supabase
            .auth
            .signOut()
        if(error){
            console.log(error)
        }
        goto("/login");
    })

</script>