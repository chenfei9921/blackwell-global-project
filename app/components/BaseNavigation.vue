<template>
  <header class="py-4 relative dark-blue-background">
    <nav class="flex container items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex gap-1 items-center">
        <span class="text-2xl uppercase font-title">
          Blackwell <br> Global
        </span>
      </NuxtLink>
      
      <!-- Promotion Countdown (Desktop) -->
      <div v-if="isMobile !== null && !isMobile" class="promotion-container mx-auto">
        <div class="promotion-text text-center">
          <span class="promotion-subtitle uppercase">Promotion <br>Ends in</span>
        </div>
        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-number">{{ days }}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-number">{{ hours }}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-number">{{ minutes }}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-number">{{ seconds }}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white text-3xl ml-auto">
        <Icon name="mdi:menu" />
      </button>
      
      <!-- Desktop & Mobile Navigation -->
      <ul class="flex items-center space-x-4 ml-auto" :class="{'hidden md:flex': !isMenuOpen, 'absolute top-16 right-4 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden': isMenuOpen}">
        <li v-if="!isLoggedIn">
          <button @click="openRegisterModal" :class="{'button-register': isMobile !== null && !isMobile, 'text-black': isMobile}">Register Now</button>

        </li>

        <li v-if="!isLoggedIn">
          <button @click="openLoginModal" class="flex gap-1 items-center">
            <Icon v-if="isMobile !== null && !isMobile" name="mdi:account" class="icon-style" />
            <span  v-if="!(isMobile !== null && !isMobile)" class="text-black">Login</span>
          </button>
        </li>

        <li v-if="isLoggedIn">
          <button @click="logout" :class="{'button-register': isMobile !== null && !isMobile, 'text-black': isMobile}">Logout</button>
        </li>
      </ul>

      <!-- Login Modal -->
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <button @click="closeModal" class="absolute top-2 right-2">
            <Icon name="mdi:close" class="text-gray-500 hover:text-gray-700 text-2xl" />
          </button>
          <h2 class="text-xl font-bold mb-4 text-black">Login</h2>
          <LoginForm />
          <p class="mt-4 text-sm text-gray-500">
            Don't have an account?
            <button @click="openRegisterModal" class="text-red-500 hover:underline">Register here</button>
          </p>
        </div>
      </div>

      <!-- Resgister Modal -->
      <div v-if="showRegisterModal" @close="showRegisterModal = false" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <button @click="closeModal" class="absolute top-2 right-2">
            <Icon name="mdi:close" class="text-gray-500 hover:text-gray-700 text-2xl" />
          </button>
          <h2 class="text-xl font-bold mb-4 text-black">Register</h2>
          <RegisterForm @close="showRegisterModal = false"/>
          <p class="mt-4 text-sm text-gray-500">
            Already have an account?
            <button @click="openLoginModal" class="text-red-500 hover:underline">Login here</button>
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isMobile = ref(null);
const isAnnouncementVisible = ref(true);
const isLoggedIn = ref(false);

const showLoginModal = ref(false);
const showRegisterModal = ref(false);

const days = ref(30);
const hours = ref(30);
const minutes = ref(30);
const seconds = ref(30);

const countdown = () => {
const interval = setInterval(() => {
  if (seconds.value > 0) {
    seconds.value--;
  } else {
    if (minutes.value > 0) {
      minutes.value--;
      seconds.value = 59;
    } else if (hours.value > 0) {
      hours.value--;
      minutes.value = 59;
      seconds.value = 59;
    } else if (days.value > 0) {
      days.value--;
      hours.value = 23;
      minutes.value = 59;
      seconds.value = 59;
    } else {
      clearInterval(interval);
    }
  }
}, 1000);
};

const toggleMenu = () => {
isMenuOpen.value = !isMenuOpen.value;
};

const closeAnnouncement = () => {
isAnnouncementVisible.value = false;
};

const openLoginModal = () => {
showLoginModal.value = true;
showRegisterModal.value = false;
};

const openRegisterModal = () => {
showRegisterModal.value = true;
showLoginModal.value = false;
};

const closeModal = () => {
showLoginModal.value = false;
showRegisterModal.value = false;
};

const logout = () => {
  localStorage.removeItem("registeredUser");
  isLoggedIn.value = false;
  window.location.reload()
};

onMounted(() => {
isMobile.value = window.innerWidth < 768;
const storedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");
isLoggedIn.value = !!storedUser.accessToken;
countdown();
window.addEventListener('resize', handleResize);
handleResize();
});

onUnmounted(() => {
window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
isMobile.value = window.innerWidth < 768;
if (window.innerWidth >= 768) {
  isMenuOpen.value = false;
}
};
</script>



<style scoped>
.announcement-bar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px 40px 10px 10px;
  font-weight: bold;
  z-index: 10;
  background-color: #3C99DC;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.close-btn {
position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.close-btn:hover {
  opacity: 0.8;
}

.promotion-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: white;
  gap: 20%;
}
.promotion-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.promotion-subtitle {
  text-transform: uppercase;
}
.countdown {
  display: flex;
  align-items: center;
  gap: 20px;
}
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.countdown-number {
  font-size: 30px;
}
.countdown-separator {
  font-size: 24px;
  align-self: flex-start;
}
.countdown-label {
  margin-top: 2px;
}
.button-register {
  margin-left: auto;
  display: inline-block;
  background: linear-gradient(to top, #c95a0b, #e56717, #ff7f30);
  color: white;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.button-register:hover {
  opacity: 0.9;
}
.button-register:active {
  transform: scale(0.95);
}
.icon-style {
  font-size: 30px;
  color: #bbb;
  margin-top: 2px;
}
@media screen and (max-width: 767px) {
  .shadow-md {
    z-index: 11!important;
  }
}

@media screen and (max-width: 1200px) {
  .promotion-container {
    gap: 10%; 
  }

  .countdown-number {
    font-size: 26px; 
  }

  .countdown-label {
    font-size: 14px;
  }

  .button-register {
    padding: 10px 20px;
    font-size: 14px;
  }

  .icon-style {
    font-size: 28px;
  }
}

@media screen and (max-width: 1025px) {
  .promotion-container {
    gap: 5%; 
  }

  .countdown {
    gap: 10px; 
  }

  .countdown-number {
    font-size: 22px; 
  }

  .button-register {
    padding: 8px 18px;
    font-size: 13px;
  }
}
</style>
