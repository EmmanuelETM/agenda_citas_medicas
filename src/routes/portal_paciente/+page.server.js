// import { fail, redirect } from '@sveltejs/kit'
// import { global_tipo_user } from "$lib/tipo_user";


// export const load= async ({ locals: { supabase, safeGetSession } }) => {
//     const { session } = await safeGetSession()
    
//     let tipo = 0;

//     if (!session) {
//         throw redirect(303, '/login')
//     }
//     // else{
//     //     global_tipo_user.subscribe((value) => {
//     //         tipo = value
//     //     })

//     //     if(tipo == 1){
//     //         throw redirect(305, '/portal_paciente')
//     //     }
//     //     else if(tipo == 2){
//     //         throw redirect(304, '/portal_medico')
//     //     }
//     //     else if(tipo == 3){
//     //         throw redirect(306, '/portal_admin')
//     //     }
//     // }

    

    

//     console.log(tipo)

//     return { session, profile }
// }