import { fail, redirect } from '@sveltejs/kit'


export const load = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    
    let tipo = 0;

    if (!session) {
        throw redirect(303, '/login')
    }


    try{

        const {data: medico, error} = await supabase
            .rpc("get_medico_id", {pvalor: session.user.email})//{pvalor: session.user.email})

        if(error){
            console.log(error);
            return {
                status: 500, 
                cool: "notcoll"
            }
        }

        console.log(medico)

        const {data: cita, error: cita_error} = await supabase
            .rpc('m_cita_consultar', {pvalor: medico[0].medico_id})

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
            cool: "notcool"
        }
    }
}