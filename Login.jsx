async function handleLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Login error: ' + error.message);
  } else {
    alert('Logged in successfully!');
  }
}
