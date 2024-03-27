<script>
  import Header from "$lib/header.svelte"
  import Footer from "$lib/footer.svelte"

  let usuario = '';
  let password = '';

  /**
     * @param {{ preventDefault: () => void; }} event
     */
  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('usuario:', usuario);
    console.log('Password:', password);

    // Agrega la lógica de autenticación aquí si es necesario
  }

  function validateForm() {
    return usuario && password;
  }
</script>
<Header></Header>

<section class="bg-gray-50 dark:bg-gray-900" style="background-color: #000033;">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
          Log In  
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style="background-color: rgb(31 41 55);">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#" on:submit={handleSubmit}>
                  <div>
                      <label for="usuario" class="block mb-2 text-sm font-medium text-white dark:text-white">Usuario</label>
                      <input type="usuario" name="usuario" id="usuario" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arturo" required>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Iniciar Sesion</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Eres nuevo? <a href="./registro" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate Aquí</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<Footer></Footer>