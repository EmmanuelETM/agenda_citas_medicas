<script>
    import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

	export let data
  
    let count = 0;

    function increment(){
        count++;
    }
</script>




<nav>
	<a href="./">home</a>
    <a href="./about">about</a>
    <a href="./portal_admin">admin</a>
    <a href="./portal_paciente">paciente</a>
    <a href="./portal_medico">medico</a>
    <a href="./login">login</a>
    <a href="./registro">registro</a>

</nav>


