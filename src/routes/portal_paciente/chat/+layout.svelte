<main class="p-4 md:ml-64 h-auto pt-20 dark">
    <div class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 mb-4">

        <!-- Sidebar -->
        <div class="mt-4 col-start-1 col-end-2 md:col-end-3 lg:col-start-2 lg:col-end-4 row-start-4 sm:row-start-1 bg-gray-900 text-white rounded-l-lg shadow-lg">
            <!-- Barra de búsqueda -->
            <div class="p-4">
                <input type="text" placeholder="Buscar chats..." class="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <!-- Lista de chats -->
            <div class="overflow-y-auto">
                <!-- Chat 1 -->
                <div class="p-4 cursor-pointer hover:bg-gray-800">Chat 1</div>
                <!-- Chat 2 -->
                <div class="p-4 cursor-pointer hover:bg-gray-800">Chat 2</div>
                <!-- Más chats... -->
            </div>
        </div>

        <div class="mt-4 col-start-2 col-end-5 md:col-start-3 md:col-end-9 lg:col-start-4 lg:col-end-12 row-start-4 sm:row-start-1">
            <!-- Contenedor del Chat -->
            <div class="flex flex-col h-[600px]  mx-auto bg-gray-800 text-white rounded-r-lg shadow-lg overflow-hidden">
                <!-- Header -->
                <div class="bg-gray-900 p-4">
                    <h2 class="text-xl font-medium">Chat 1</h2>
                </div>

                    <!-- Área de Mensajes -->
                <div class="flex-1 p-4 overflow-auto">
                    <!-- Mensaje recibido -->
                    <div class="flex items-end justify-start">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-700 text-white ">Hola, ¿cómo estás?</span></div>
                        </div>
                    </div>
                    <!-- Mensaje enviado -->
                    <div class="flex items-end justify-end">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Bien, ¿y tú?</span></div>
                        </div>
                    </div>
                    <!-- Más mensajes... -->
                </div>

                <form>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                            </svg>
                            <span class="sr-only">Upload image</span>
                        </button>
                        <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                            </svg>
                            <span class="sr-only">Add emoji</span>
                        </button>
                        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                            </svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</main>
<slot/>

