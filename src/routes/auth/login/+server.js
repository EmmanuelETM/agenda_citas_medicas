import { supabase, supabaseAdmin } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';


export async function POST(event) {
    try {
        const url = new URL(event.url);
        const formData = await event.request.json();
        const email = formData.email;
        const password = formData.password;
        let tipo_user = 1;



        console.log("inicio login")
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });        
        
        if (error) {
            console.log(error)
            return Response.json({ status: 500, cool: "notverycool" });
        }

        return Response.json({status: 200, cool:"verycool"})
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response.json({ status: 500, body: { error: 'Error interno del servidor' } });
    }
};
