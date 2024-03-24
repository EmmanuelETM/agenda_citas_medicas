<script>
    import Table from "./components/table.svelte"
    import { Button } from 'flowbite-svelte';

</script>


<main class="p-4 md:ml-64 h-auto pt-20">
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

                <!-- Pagination -->
        <!-- <div class="col-start-1 col-end-2 row-start- row-end-3 sm:row-start-7 sm:row-end-8">
            <div class="flex flex-col items-center">
                <span class="text-sm text-gray-700 dark:text-black">
                    Showing <span class="font-semibold ">1</span> to <span class="font-semibold">10</span> of <span class="font-semibold">100</span> Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Prev
                </button>
                <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
                </div>
            </div>
        </div>   -->

        



        


        <div class="col-start-1 col-end-5 row-start-4 sm:row-start-12">
            <Table/>
        </div>
    </div>
</main>

 