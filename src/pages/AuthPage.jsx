import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AuthPage() {
  // Local state to store form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // --- Supabase functions ---
  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage("Signup error: " + error.message);
    else setMessage("Signup successful! Check your email to confirm.");
  }

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setMessage("Login error: " + error.message);
    else setMessage("Logged in successfully!");
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) setMessage("Logout error: " + error.message);
    else setMessage("You have logged out.");
  }

  // --- UI ---
  return (
    <div style={styles.container}>
      <h2>🔐 Supabase Auth</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={styles.buttonContainer}>
        <button onClick={handleSignup} style={styles.button}>
          Sign Up
        </button>
        <button onClick={handleLogin} style={styles.button}>
          Log In
        </button>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Log Out
        </button>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

// --- Inline styles ---
const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    background: "#111",
    padding: "20px",
    borderRadius: "12px",
    color: "#fff",
  },
  input: {
    display: "block",
    width: "90%",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#222",
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "6px",
    background: "#00b4d8",
    border: "none",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "8px 12px",
    borderRadius: "6px",
    background: "#ef233c",
    border: "none",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    color: "#00ff88",
  },
};
