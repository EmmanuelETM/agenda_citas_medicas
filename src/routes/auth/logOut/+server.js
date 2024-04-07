import { supabase, supabaseAdmin } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';



export async function POST(event) {
    try {

        console.log("logout")
        const { user, error } = await supabase.auth.signOut({});   

        console.log("logout exec")
        
        if (error) {
            
            return Response.json({ status: 500, cool: "notverycool" });
        }
        if(user){
            return Response.json({ status: 200, cool: "verycool"});
        }        
            
        return Response.json({status:200, cool:"veryucool"});

    
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response.json({ status: 500, body: { error: 'Error interno del servidor' } });
    }
};