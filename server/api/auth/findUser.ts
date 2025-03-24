export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);
  
    let users;
    try {
      users = JSON.parse(localStorage.getItem("users") || "[]");
    } catch (error) {
      users = [];
    }
  
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (!user) {
      return { error: "User not found" };
    }
  
    return { user };
  });
  