<script>
    import { goto } from "$app/navigation";
    import {global_tipo_user} from "$lib/tipo_user.js"
    export let data;

	let { supabase, session } = data
	$: ({ supabase, session } = data)

    let hidden = true;
    let show = false;
    let email = "";
    let password = "";
    let tipo;

    function showPassword(){
        if(show){
            show = false;
        }
        else{
            show = true
        }
        
    }

    async function handleLogin(event){

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });        
        
        if(data){
            console.log(data);
        }
        if (error){
            console.log(error);
            hidden = false
        }

        const { data: tipo_user, error: user_error } = await supabase
            .from('user')
            .select('tipo_user')
            .eq('email', email)
            .single();

            
        if(tipo_user){
            tipo = tipo_user.tipo_user;
            // console.log(tipo);
        }
        if(user_error){
            console.log(user_error)
        }

        if(data && !error && tipo_user && !user_error){
            if (tipo == 1) {
                $global_tipo_user = 1
                goto("/portal_paciente")
            }
            else if(tipo == 2){
                $global_tipo_user = 2
                goto("/portal_medico")
            }
            else if(tipo == 3){
                $global_tipo_user = 3
                goto("/portal_admin")
            }
        }

    }
</script>

<section class="bg-gray-50 h-dvh dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
              </h1>

              <!--Formulario-->


                {#if !hidden}
                    <div class="px-4 py-4 bg-red-700 text-white px2 rounded-lg">
                        Error! Check your credentials
                    </div>
                {/if}

              <form method="post" on:submit|preventDefault={handleLogin} class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" bind:value={email}  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      {#if show}
                            <input type="text" bind:value={password}  name="NewPassword" id="NewPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      {:else}
                            <input type="password" bind:value={password}  name="NewPassword" id="NewPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      {/if}
                  </div>

                    <div class="flex">
                        <button type="button" on:click={showPassword} class="flex-1 justify-start text-left">
                            {show ? 'Hide Password': 'Show Password'}
                        </button>

                        <div class="items-center justify-left">
                            <a href="/login/reset" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                    </div>
                  
                  <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Iniciar Sesion</button>
                  
                  <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                      Aun no ha registrado su cuenta? <a href="/registro" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrar</a>
                  </p>
              </form>


          </div>
      </div>
  </div>
</section>




