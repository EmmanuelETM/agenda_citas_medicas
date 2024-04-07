export const load = async ({ locals: { safeGetSession } }) => {
    const { session, user } = await safeGetSession()
  
    // console.log('layout.server.js loaded');
    return {
      session,
      user,
    }
  }