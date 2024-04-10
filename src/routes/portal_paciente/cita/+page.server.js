import { fail, redirect } from '@sveltejs/kit'
import { global_tipo_user } from "$lib/tipo_user";
import { preventDefault } from '@fullcalendar/core/internal';


export const load = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    
    let tipo = 0;

    if (!session) {
        throw redirect(303, '/login')
    }

}
