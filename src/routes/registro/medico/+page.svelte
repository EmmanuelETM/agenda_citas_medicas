<script>
    import { onMount } from "svelte";
    
    let nombre = '';
    let apellidos = '';
    let email = '';
    let password = '';
    let fecha_nacimiento = '';
    let tipo_user = 1;
    let error = '';

    
    async function handleSignup(event) {
        event.preventDefault(); 

        const res = await fetch('/auth/signUp', {
            method: 'POST',
            body: new FormData(event.target) 
        });

        if (!res.ok) {
            const result = await res.json(); 
            error = result.error;
            console.log("error");
        } 
    }

  </script>

  
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style="background-color: #000033;">
        <h3 class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Registro Medico 
        </h3>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style="background-color: rgb(31 41 55);">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="flex flex-col space-y-4 md:space-y-6">
                    <div>
                        <label for="nombre" class="block mb-2 text-sm font-medium text-white dark:text-white">Nombre</label>
                        <input type="text" id="nombre" placeholder="Nombre" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div>
                        <label for="apellido" class="block mb-2 text-sm font-medium text-white dark:text-white">Apellido</label>
                        <input type="text" id="apellidos" placeholder="Apellido" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div>
                        <label for="fecha-nacimiento" class="block mb-2 text-sm font-medium text-white dark:text-white">Fecha de nacimiento</label>
                        <input type="date" id="fecha-nacimiento" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>                    
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                        <input type="email"  id="email" placeholder="test@example.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div>
                        <label for="Contraseña" class="block mb-2 text-sm font-medium text-white dark:text-white">Contraseña</label>
                        <input type="password" id="Contraseña" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
  </section>