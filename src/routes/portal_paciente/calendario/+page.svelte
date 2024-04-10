<script context="module">

</script>

<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid'; 
    import interactionPlugin from '@fullcalendar/interaction';

    export let data;

    let {supabase, session, cita} = data
    $: ({supabase, session, cita} = data)
    
    let calendar;


    onMount(() => {
    const calendarEl = document.getElementById('calendar');

    const eventos = cita.map(cita => ({
        title: cita.categoria,
        start: `${cita.fecha}T${cita.hora}`,
        extendedProps: {
            medico: cita.medico,
            motivo: cita.motivo,
            estado: cita.estado
        }
    }))


    if (calendarEl) {
        calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, interactionPlugin],
            initialView: 'dayGridMonth', // Vista inicial por defecto
            editable: true,
            selectable: true,
            views: {
                day: {
                    type: 'dayGrid',
                    buttonText: 'Day'
                },
            },
            events: eventos
        });

        calendar.render();
    } else {
        console.error('No se encontró el elemento con el ID "calendar" en el DOM.');
    }
    });
</script>

<div id="calendar" class="p-4 bg-white text-black shadow-md rounded-lg"></div>


<style>
    #calendar {
        width: 100%;
        height: 600px; /* Ajusta la altura según tus necesidades */
    }
</style>