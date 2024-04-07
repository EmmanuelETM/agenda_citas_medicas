import { redirect } from '@sveltejs/kit'

export const load = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/')
  }

  return { url: url.origin }
}
