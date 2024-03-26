<!-- LoginForm.svelte -->
<script>
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
    let username = '';
    let password = '';
  
    async function handleSubmit() {
      // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
      console.log('Username:', username);
      console.log('Password:', password);
    }
  </script>
  <Header></Header>
  
  <div class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
      <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" bind:value={username} required />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" bind:value={password} required />
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click={handleSubmit}>Iniciar sesión</button>
    <a href="/registro" class="block text-center mt-2 text-sm text-blue-700 underline">Registrarse</a>
  </div>
  
<Footer></Footer>