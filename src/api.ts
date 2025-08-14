const API_BASE_URL = "https://onethcorp.onrender.com/api";

export const signup = async (fullName: string, email: string, password: string, confirmPassword: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password, confirmPassword })
  });
  const text = await res.text();
  try { return JSON.parse(text); } 
  catch { throw new Error("Invalid server response"); }
};

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const text = await res.text();
  try { return JSON.parse(text); } 
  catch { throw new Error("Invalid server response"); }
};
  