async function handleLogout() {
  const { error } = await supabase.auth.signOut();
  if (error) alert('Logout error: ' + error.message);
}
