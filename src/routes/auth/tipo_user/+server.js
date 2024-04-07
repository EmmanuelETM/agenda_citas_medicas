import { supabase, supabaseAdmin } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';


export async function POST(event) {
    try {
        const url = new URL(event.url);
        const formData = await event.request.json();
        const email = formData.email;
        const password = formData.password;
        let tipo_user = 1;
        

        // console.log(`${email}, ${password}`)
        console.log("desde auth/tipo_user")
        // Supabase tipo user
        const { data, error } = await supabase
            .from('user')
            .select('tipo_user')
            .eq('email', email)
            .single();

        if(data){
            tipo_user = data
        }
        if(error){
            console.log(error)
        }


        let respuesta = Response.json(tipo_user);

        return respuesta;


    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response.json({status:500});
    }
};
