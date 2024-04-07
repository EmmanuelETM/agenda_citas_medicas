<script>
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient";

    let show = false;
    let hidden = true;
    let NewPassword = "";
    let ConfirmPassword = "";

    function showPassword (){
        if (show){
            show = false
        }
        else{
            show = true
        }
    }

    async function ResetPassword(event){
        if (NewPassword !== ConfirmPassword){
            return alert("You're passwords are not the same!")
        }
        const {data, error} = await supabase
            .auth
            .updateUser({
                password: NewPassword
            })

        if (data){
            console.log(data)
            hidden = false;
        }
        if (error){
            console.log(error)
        }
    }

</script>

<section class="bg-gray-50 h-dvh dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Reset Password
              </h1>

              <!--Formulario-->
              {#if !hidden}
                <div class="px-4 py-4 bg-green-700 text-white px2 rounded-lg">
                    Success! Your Password has been restored! Proceed to <a href="/login"><b class="hover:underline">Log In</b></a>
                </div>
              {/if}
              <form method="post" on:submit|preventDefault={ResetPassword} class="space-y-4 md:space-y-6">
                  <div>
                        <label for="NewPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        {#if show}
                            <input type="text" bind:value={NewPassword}  name="NewPassword" id="NewPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        {:else}
                            <input type="password" bind:value={NewPassword}  name="NewPassword" id="NewPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        {/if}
                  </div>

                  <div>
                      <label for="ConfirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      {#if show}
                        <input type="text" bind:value={ConfirmPassword} name="ConfirmPassword" id="ConfirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      {:else}
                        <input type="password" bind:value={ConfirmPassword} name="ConfirmPassword" id="ConfirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      {/if}
                  </div>

                  <button type="button" on:click={showPassword}>
                        {show ? 'Show Password': 'Hide Password'}
                  </button>

                  <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    Confirm
                  </button>
                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log In</a>
                  </p>
              </form>


          </div>
      </div>
  </div>
</section>




