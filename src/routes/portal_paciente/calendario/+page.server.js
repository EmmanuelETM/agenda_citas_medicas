import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    
    let tipo = 0;

    if (!session) {
        throw redirect(303, '/login')
    }


    try{

        const {data: user_id, error} = await supabase
        .from('user')
        .select('user_id')
        .eq("email", session.user.email)

        if(error){
            console.log(error);
            return {
                error: error
            }
        }

        const {data: cita, error: cita_error} = await supabase
            .rpc('cita_consultar', {pvalor: user_id[0].user_id})

        if(cita){
            // console.log(cita)
            return {
                cita: cita
            }
        }
        if(error){
            console.log(cita_error)
            return {
                status: 500,
                error: error
            }
        }

    }catch(error){
        console.log(error)
        return {
            status: 500,
            error: error
        }
    }
}