<template>
    <form class="space-y-4 md:space-y-6" @submit.prevent="register">
      <!-- Error & Succ Message -->
      <div v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>
      <div v-if="successMessage" class="text-green-500 text-sm">{{ successMessage }}</div>

      <!-- First Name -->
      <div>
        <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First Name
        </label>
        <input v-model="firstName" type="text" name="firstName" id="firstName" required placeholder="Enter your First Name"
          class="input-field" />
      </div>

      <!-- Last Name -->
      <div>
        <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Last Name
        </label>
        <input v-model="lastName" type="text" name="lastName" id="lastName" required placeholder="Enter your Last Name"
          class="input-field" />
      </div>
  
      <!-- Email -->
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input v-model="email" type="email" name="email" id="email" required placeholder="name@company.com"
          class="input-field" />
      </div>
  
      <!-- Country -->
      <div>
        <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Country
        </label>
        <select v-model="selectedCountry" class="input-field">
          <option value="">Select your country</option>
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.flag }} {{ country.name }}
          </option>
        </select>
      </div>
  
      <!-- Mobile Number -->
      <div>
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mobile Number
        </label>
        <div class="flex">
          <select v-model="selectedDialCode" class="input-field w-1/4">
            <option v-for="country in countries" :key="country.dial_code" :value="country.dial_code">
              {{ country.flag }} {{ country.dial_code }}
            </option>
          </select>
          <input v-model="phone" type="tel" name="phone" id="phone" placeholder="Enter your phone number"
            class="input-field w-3/4" />
        </div>
      </div>
  
      <!-- Password -->
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input v-model="password" type="password" name="password" id="password" required placeholder="••••••••"
          class="input-field" />
      </div>
  
      <!-- Confirm Password -->
      <div>
        <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm Password
        </label>
        <input v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword" required
          placeholder="••••••••" class="input-field" />
      </div>
  
      <!-- Sign Up Button -->
      <button type="submit" class="w-full button-signup" :disabled="loading">
        {{ loading ? "Signing Up..." : "Sign Up" }}
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref, onMounted, defineEmits } from "vue";
  import { useAuth } from "#imports";
  
  const auth = useAuth();
  const emit = defineEmits(["close"]);
  
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const phone = ref("");
  const selectedCountry = ref("");
  const selectedDialCode = ref("");
  
  const errorMessage = ref("");
  const successMessage = ref("");
  const loading = ref(false);
  
  const countries = ref([]);
  
  // Country
  onMounted(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      countries.value = data.map((country) => ({
        name: country.name.common,
        code: country.cca2,
        dial_code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
        flag: country.flag,
      }));
    } catch (error) {
      console.error("Failed to load countries:", error);
    }
  });
  
  
  const register = async () => {
    errorMessage.value = "";
    successMessage.value = "";
    loading.value = true;
  
    if (password.value !== confirmPassword.value) {
      errorMessage.value = "Passwords do not match!";
      loading.value = false;
      return;
    }
  
    try {
      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        country: selectedCountry.value,
        accessToken: "fake-token-" + Date.now(),
      };
  
      localStorage.setItem("registeredUser", JSON.stringify(user));
      
    successMessage.value = "Registration successful!";
  
      await loginUser(email.value, password.value);
      setTimeout(() => {
        emit("close"); 
      }, 1000);
    } catch (error) {
        console.log(errorMessage.value)
      if (errorMessage.value !== "CredentialsSignin") {
        errorMessage.value = error.message;
      } 
    } finally {
      loading.value = false;
    }
  };
  const loginUser = async (email, password) => {
  try {
    console.log("开始登录:", email, password);

    const res = await auth.signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error !== "CredentialsSignin") {
      throw new Error(res.error);
    }

    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      throw new Error("登录失败");
    }

    const userData = JSON.parse(storedUser);
    const userToken = userData.accessToken;

    if (userToken) {
      successMessage.value = "Login successful!";
      emit("close");
      setTimeout(() => {
        alert(`Hi ${firstName.value} ${lastName.value}, Welcome to Blackwell, Please verify your email immediately.`);
        window.location.reload();
      }, 1000);
    } else {
      throw new Error("登录失败");
    }
  } catch (error) {
    errorMessage.value = error.message;
    console.error("登录错误:", error.message);
  }
};
  </script>
  
  <style lang="css">
  .input-field {
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    color: #1f2937;
    padding: 10px;
    border-radius: 6px;
    width: 100%;
  }
  
  .button-signup {
    margin-left: auto;
    display: inline-block;
    background: linear-gradient(to top, #c95a0b, #e56717, #ff7f30);
    color: white;
    padding: 12px 28px;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
  }
  .button-signup:hover {
    opacity: 0.9;
  }
  .button-signup:active {
    transform: scale(0.95);
  }
  </style>
  