<script>
    import { enhance } from "$app/forms";
    import { json } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import {page} from "$app/stores"
    import { goto } from "$app/navigation";

    export let data

    let {supabase, session} = data
    $: ({supabase, session} = data)

    let cita_id = $page.params.cita_id;
    console.log(cita_id)

    let citas;
    let categorias;

    let hora = "";
    let date = "";
    let tipo_cita = "";
    let motivos = "";


    async function handleUpdate(event){

        const {data, error} = await supabase
            .from("cita")
            .update({
                fecha: date,
                time: hora,
                motivo: motivos,
                categoria_id: tipo_cita
            })
            .eq("cita_id", cita_id)
        if(data){
            console.log(data)
        }
        if(error){
            console.log(error);
        }
    }



    
  </script>

  
<section class="p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-0">
        <div class="grid grid-cols-12">
            <div class="col-start-4 col-end-10 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        
                        <h5 class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            Editar Cita 
                        </h5>
                        
                        <form on:submit={handleUpdate} class="flex flex-col space-y-4 md:space-y-6">
                            <div class="flex space-x-12">

                                <div class="flex flex-col ">
                                    <label for="Fecha" class="block mb-2 text-sm font-medium text-white dark:text-white">Fecha</label>
                                    <input type="Date" bind:value={date}  id="nombre" placeholder="Nombre" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                </div>
                                <div class="flex flex-col">
                                    <label for="Hora" class="block mb-2 text-sm font-medium text-white dark:text-white">Hora</label>
                                    <input type="Time" bind:value={hora} id="apellidos" placeholder="Apellido" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                </div>
                            </div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Cita</label>
                                <select id="countries" bind:value={tipo_cita} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="1">Consulta Medica</option>
                                    <option value="2">Servicio</option>
                                    <option value="3">Evaluacion Medica</option>
                                </select>                  
                            <div>
                                <label for="Motivo" class="block mb-2 text-sm font-medium text-white dark:text-white">Motivo</label>
                                <textarea id="message" bind:value={motivos} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</section>
