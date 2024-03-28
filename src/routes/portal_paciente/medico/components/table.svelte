<script>
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
                            <th scope="col" class="px-4 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">300</td>
                            <td class="px-4 py-3">$2999</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$1499</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone 14</th>
                            <td class="px-4 py-3">Phone</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">1237</td>
                            <td class="px-4 py-3">$999</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPad Air</th>
                            <td class="px-4 py-3">Tablet</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">4578</td>
                            <td class="px-4 py-3">$1199</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series S</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">56</td>
                            <td class="px-4 py-3">$299</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Sony</td>
                            <td class="px-4 py-3">78</td>
                            <td class="px-4 py-3">$799</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$699</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch SE</th>
                            <td class="px-4 py-3">Watch</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">657</td>
                            <td class="px-4 py-3">$399</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">NIKON D850</th>
                            <td class="px-4 py-3">Photo</td>
                            <td class="px-4 py-3">Nikon</td>
                            <td class="px-4 py-3">465</td>
                            <td class="px-4 py-3">$599</td>
                            <td class="px-4 py-3">
                                <Buttons/>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Monitor BenQ EX2710Q</th>
                            <td class="px-4 py-3">TV/Monitor</td>
                            <td class="px-4 py-3">BenQ</td>
                            <td class="px-4 py-3">354</td>
                            <td class="px-4 py-3">$499</td>
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