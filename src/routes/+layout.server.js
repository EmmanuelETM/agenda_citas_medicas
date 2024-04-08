console.log("layout.server.js loaded");

export const load = async ({ locals: { safeGetSession } }) => {
  const { session, user } = await safeGetSession()

  return {
    session,
    user,
  }
}