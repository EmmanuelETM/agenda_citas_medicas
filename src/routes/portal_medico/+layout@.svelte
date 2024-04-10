<script>
    // @ts-ignore
    import Sidebar from "./components/sidebar.svelte"
    import Main from "./components/main.svelte"
    import Footer from "$lib/footer.svelte"
    import { onMount } from "svelte";

    export let data;
    let {supabase, session} = data
    $: ({supabase, session} = data)

    let email = session.user.email
    let name;
    

    onMount(async () => {
        try {
            const {data: user, error: user_error} = await supabase
                .from('user')
                .select(`nombre, apellidos`)
                .eq("email", session.user.email)

            if(user){
                console.log(user)
                name = user[0].nombre + ' ' + user[0].apellidos
            }
            if(user_error){
                console.log(user_error)
            }

        }catch(error){
            console.log(error)
        }
    })
    

</script>

<div class="index min-h-screen">
    <Sidebar {email} {name}/>
    <slot/>
</div>
<Footer/>