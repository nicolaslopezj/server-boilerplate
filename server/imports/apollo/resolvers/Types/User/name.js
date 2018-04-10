export default function(user, params, context) {
  if (!user.profile) return
  return user.profile.firstName || user.profile.name || null
}
