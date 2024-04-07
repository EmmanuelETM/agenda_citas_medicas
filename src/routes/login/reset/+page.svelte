<script>
    import { goto } from "$app/navigation";
    export let form;   

</script>

<section class="bg-gray-50 h-dvh dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Reset Password
              </h1>

                {#if form}
                    {#if form.show}
                        {#if form.success}
                            <div class="px-4 py-4 bg-green-700 text-white px2 rounded-lg">
                                Success! Check your email to reset your password!
                            </div>
                        {:else}
                            <div class="px-4 py-4 bg-red-600 text-white px2 rounded-lg">
                                Error! Check your credentials!
                            </div>
                        {/if}
                    {/if}
                {/if}
              
              <form method="post" class="space-y-4 md:space-y-6">
                  <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email"  name="email" id="email" placeholder="example@test.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>

                  <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    Send Email
                  </button>
                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Return to Log In</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
