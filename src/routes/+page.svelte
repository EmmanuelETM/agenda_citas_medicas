<script>
    import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';

  
    let count = 0;

    function increment(){
        count++;
    }



</script>

<div class="h-dvh bg-slate-800">
    <nav class="bg-gray-600">
        <a href="./">home</a>
        <a href="./portal_admin">admin</a>
        <a href="./portal_paciente">paciente</a>
        <a href="./portal_medico">medico</a>
        <a href="./login">login</a>
        <a href="./registro">registro</a>

    </nav>
</div>





