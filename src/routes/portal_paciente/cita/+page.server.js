import { fail, redirect } from '@sveltejs/kit'


export const load = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    
    let tipo = 0;

    if (!session) {
        throw redirect(303, '/login')
    }

}
