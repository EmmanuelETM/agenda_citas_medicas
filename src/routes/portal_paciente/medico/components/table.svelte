<script>
    import { onMount } from "svelte";
    import Buttons from "./buttons.svelte"

    
</script>

<section class=" p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-0">
        <!-- Start coding here -->
        
        <!-- Table time -->

        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative w-full">
                            <div class="text-white absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass "></i>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." required />
                            
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
                            <th scope="col" class="px-4 py-3">Id Medico</th>
                            <th scope="col" class="px-4 py-3">Nombre</th>
                            <th scope="col" class="px-4 py-3">Especialidades</th>
                            <th scope="col" class="px-4 py-3">Procedimientos</th>
                            <th scope="col" class="px-4 py-3">Consultorios</th>
                            <th scope="col" class="px-4 py-3">Detalles</th>
                            <th scope="col" class="px-4 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td class="px-4 py-3">nombre</td>
                            <td class="px-4 py-3">
                                <button id="esp_button" data-modal-target="esp_modal" data-modal-toggle="esp_modal" type="button" class="hover:underline text-blue-500">
                                    Especialidades
                                </button>

                                <div id="esp_modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                
                                        <!-- Modal content -->
                                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
                                                                
                                        <!-- Modal header -->
                                            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                    Especialidades
                                                </h3>
                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="esp_modal">
                                                    <i class="fa-solid fa-x"></i>    
                                                    <span class="sr-only">Cerrar</span>                    
                                                </button>        
                                            </div>
                                            <!-- Modal body -->
                                                            
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-3">
                                                                Product name
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Silver
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                White
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop PC
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white dark:bg-gray-800">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Black
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Accessories
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $99
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>


                            <td class="px-4 py-3">
                                <button id="proc_button" data-modal-target="proc_modal" data-modal-toggle="proc_modal" type="button" class="hover:underline text-blue-500">
                                    Procedimientos
                                </button>

                                <div id="proc_modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                
                                        <!-- Modal content -->
                                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
                                                                
                                        <!-- Modal header -->
                                            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                    Procedimientos
                                                </h3>
                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="proc_modal">
                                                    <i class="fa-solid fa-x"></i>    
                                                    <span class="sr-only">Cerrar</span>                    
                                                </button>        
                                            </div>
                                            <!-- Modal body -->
                                                            
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-3">
                                                                Product name
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Silver
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                White
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop PC
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white dark:bg-gray-800">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Black
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Accessories
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $99
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="px-4 py-3">
                                <button id="cons_button" data-modal-target="cons_modal" data-modal-toggle="cons_modal" type="button" class="hover:underline text-blue-500">
                                    Consultorios
                                </button>

                                <div id="cons_modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                
                                        <!-- Modal content -->
                                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
                                                                
                                        <!-- Modal header -->
                                            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                    Consultorios
                                                </h3>
                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="cons_modal">
                                                    <i class="fa-solid fa-x"></i>    
                                                    <span class="sr-only">Cerrar</span>                    
                                                </button>        
                                            </div>
                                            <!-- Modal body -->
                                                            
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-3">
                                                                Product name
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Silver
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                White
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop PC
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white dark:bg-gray-800">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Black
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Accessories
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $99
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>


                            <td class="px-4 py-3">
                                <button id="det_button" data-modal-target="det_modal" data-modal-toggle="det_modal" type="button" class="hover:underline text-blue-500">
                                    Detalles
                                </button>

                                <div id="det_modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                
                                        <!-- Modal content -->
                                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
                                                                
                                        <!-- Modal header -->
                                            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                    Detalles
                                                </h3>
                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="det_modal">
                                                    <i class="fa-solid fa-x"></i>    
                                                    <span class="sr-only">Cerrar</span>                    
                                                </button>        
                                            </div>
                                            <!-- Modal body -->
                                                            
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-3">
                                                                Product name
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="px-6 py-3">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Silver
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                White
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Laptop PC
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white dark:bg-gray-800">
                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td class="px-6 py-4">
                                                                Black
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                Accessories
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                $99
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>



                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>

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