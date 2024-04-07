<script>
    import { goto } from "$app/navigation";

    let email = "";
    let password = "";
    let tipo_json = {};

    async function handleLogin(event){
        
        let formData = JSON.stringify({
            email: email,
            password: password
        })


        const res = await fetch('/auth/logIn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: formData,
        });
        
        if(!res.ok){
            const data = await res.json();
            console.error('Error login')
        }else if(res.ok){
            console.log(res);
            
            const user_tipo = await fetch('/auth/tipo_user', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: formData
            })
            if(!user_tipo.ok){
                const data = await res.json();
                console.log(data);
                console.log(res);
            }
            if(user_tipo.ok){
                const data = await user_tipo.json();
                tipo_json = data;
                // console.log(tipo_json);
            }
        }

        // console.log(tipo_json.tipo_user);
        if(tipo_json.tipo_user === 1){
            goto('/portal_paciente/')
        }
        else if(tipo_json.tipo_user === 2){
            goto('/portal_medico')
        }else{
            goto('/portal_admin')
        }

    }
</script>

<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
              </h1>

              <!--Formulario-->

              <form method="post" on:submit|preventDefault={handleLogin} class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" bind:value={email}  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" bind:value={password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Iniciar Sesion</button>
                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Aun no ha registrado su cuenta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrar</a>
                  </p>
              </form>


          </div>
      </div>
  </div>
</section>




