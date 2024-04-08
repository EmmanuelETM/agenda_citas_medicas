import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_SERVICE_ROLE_KEY } from '$env/static/public'
import { createServerClient } from '@supabase/ssr'

export const handle = async ({ event, resolve }) => {

  const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: '/' })
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: '/' })
      },
    },
  })

  const supabaseAdmin = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_SERVICE_ROLE_KEY,  {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: '/' })
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: '/' })
      },
    }
  })

  event.locals.supabase = supabase
  event.locals.supabaseAdmin = supabaseAdmin
  
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    if (error) {
      return { session: null, user: null }
    }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()

    return { session, user }
  }

  event.locals.safeGetAdminSession = async () => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        return { session: null, user: null }
      }

      const {
        data: {session},
      } = await event.locals.supabaseAdmin.auth.getSession();
      
      return {session, user}
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}


// event.locals.supabase = supabase
// event.locals.supabaseAdmin = supabaseAdmin
