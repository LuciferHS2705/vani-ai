async function handleSignup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert('Signup error: ' + error.message);
  } else {
    alert('Signup successful! Check your email for confirmation.');
  }
}
