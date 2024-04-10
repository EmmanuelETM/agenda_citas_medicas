<script>
    import Buttons from "./components/buttons.svelte"
    import { onMount } from "svelte";


    export let data;

    let {supabase, session} = data
    $: ({supabase, session} = data)

    let facturas = [];

    let searchValue ='';

    onMount(async () => {

        try{
            const {data: user, error: user_error} = await supabase
                .from('user')
                .select('user_id')
                .eq("email", session.user.email)

            if(user_error){
                console.log(user_error)
            }

            const {data: factura, error: error_factura} = await supabase
                .rpc('paciente_facturas_consultar', {pvalor: "a", id: 2})

            if(error_factura){
                console.log(error_factura)
            }

            if(factura){
                // console.log(factura)
                facturas = factura
            }

        }catch(error){
            console.log(error)
        }
    })

    async function handleSearch(event){
        try{
            const {data: user, error: user_error} = await supabase
                .from('user')
                .select('user_id')
                .eq("email", session.user.email)

            if(user_error){
                console.log(user_error)
            }

            const {data: factura, error: error_factura} = await supabase
                .rpc('paciente_facturas_consultar', {pvalor: searchValue, id: user[0].medico_id})

            if(error_factura){
                console.log(error_factura)
            }

            if(factura){
                // console.log(factura)
                facturas = factura
            }

        }catch(error){
            console.log(error)
        }
    }

</script>

<section class="p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-0">
        <!-- Start coding here -->
        
        <!-- Table time -->

        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form on:submit|preventDefault={handleSearch} class="flex items-center">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative w-full">
                            <div class="text-white absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass "></i>
                            </div>
                            <input type="search" bind:value={searchValue} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." required />
                            
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>

                        </div>
                    </form>
                </div>
            </div>



            <!-- Table -->

            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Id Factura</th>
                            <th scope="col" class="px-4 py-3">Id Cita</th>
                            <th scope="col" class="px-4 py-3">Medico</th>
                            <th scope="col" class="px-4 py-3">Categoria</th>
                            <th scope="col" class="px-4 py-3">Fecha</th>
                            <th scope="col" class="px-4 py-3">Monto</th>
                            <th scope="col" class="px-4 py-3">Estado</th>
                            <th scope="col" class="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each facturas as factura}
                            <tr class="border-b dark:border-gray-700">
                                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{factura.factura_id}</th>
                                <td class="px-4 py-3">{factura.cita_id}</td>
                                <td class="px-4 py-3">{factura.medico}</td>
                                <td class="px-4 py-3">{factura.categoria}</td>
                                <td class="px-4 py-3">${factura.monto}</td>
                                <td class="px-4 py-3">{factura.fecha}</td>
                                <td class="px-4 py-3">{factura.estado}</td>
                                <td class="px-4 py-3">
                                    <button id="AddButton" type="button" class="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                        <i class="fa-solid fa-plus">&nbsp;&nbsp;</i>
                                        Pagar Cita
                                    </button>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>


            <!-- Pagination bottom pog -->
            <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                <ul class="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </section>