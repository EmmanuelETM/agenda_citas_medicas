import { redirect } from '@sveltejs/kit'
import { global_tipo_user } from '$lib/tipo_user.js'

export const load = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  let tipo;

  global_tipo_user.subscribe((value) => {
    tipo = value
  })

  // if the user is already logged in return them to the account page
  if (!session) {
    throw redirect(303, '/login')
  }

  return { url: url.origin }
}


