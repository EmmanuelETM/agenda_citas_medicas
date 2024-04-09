import { supabase, supabaseAdmin } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';



export async function POST(event) {
    try {
        const url = new URL(event.url);
        const formData = await event.request.json();
        const email = formData.email;
        const password = formData.password;
        const nombre = formData.nombre;
        const apellidos = formData.apellidos;
        const fecha_nacimiento = formData.fecha_nacimiento;
        const tipo_user = formData.tipo_user;
        // console.log(`${email}, ${password}, ${nombre}, ${apellidos}, ${fecha_nacimiento}, ${tipo_user}`)


        //Supabase auth.signUp
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${url.origin}/auth/callback`
            }
        });        

            if (error) {
                console.log(error)
                return Response.json({ status: 500, cool: "notverycool" });
            }
            if(user){
                return Response.json({ status: 200, cool: "verycool"});
            }        
            
            
        console.log("inserting data to table users");

        const { error: insertError } = await supabase
                .from('user')
                .insert([{  nombre: nombre, 
                            apellidos: apellidos, 
                            fecha_nacimiento: fecha_nacimiento, 
                            email: email, 
                            tipo_user: tipo_user 
                        }]);
                
        if (insertError) {
            return Response.json({ status: 500, body: { error: insertError.message } });
        }
            
        return Response.json({ status: 303, headers: { Location: '/portal_medico' } });

    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response.json({ status: 500, body: { error: 'Error interno del servidor' } });
    }
};
