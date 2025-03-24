<template>
  <main class="text-white max-w-[72rem] mx-auto shadow-xl shadow-grey border-t border-[#01F2F2]">
    <section>
      <!-- Copy Trading Section-->
      <div class="hidden lg:flex flex-row items-center py-20 gap-10 max-w-6xl mx-auto">
        <div class="relative max-w-lg w-full lg:max-w-md">
          <NuxtImg src="/hand.png" class="w-full mx-auto" alt="Copy Trading" />
        </div>

        <div class="flex-1 text-left relative">
          <div class="text-center">
            <h1 class="text-7xl font-medium uppercase text-light-blue mb-4">
            COPY TRADING
          </h1>
          <p class="text-5xl mb-8 z-10">
            with <span class="text-white">Blackwell Invest</span>
          </p>
        </div>

          <!-- App Store & Google Play -->
          <div class="flex justify-center lg:justify-center gap-4 mb-3-5">
            <NuxtImg src="/google-play.jpg" class="h-12 rounded-lg" alt="Google Play" />
            <NuxtImg src="/app-store.jpg" class="h-12 rounded-lg" alt="App Store" />
            <NuxtImg src="/regular.png" class="regular" alt="regular" />
          </div>

          <!-- Choose & Trade Section-->
          <h2 class="text-4xl font-semibold text-light-blue mb-4">Choose & Trade</h2>
          <p class="text-5xl font-semibold gold mb-2">Ready-To-Go Strategies</p>
          <p class="text-lg mb-6 font-bold">
            Browse and copy hundreds of investment strategies developed by master traders! 
            Whether you are a pro or beginner, you can now trade quicker and more confidently.
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-4 text-lg py-[3px] border border-yellow-500 text-white rounded-lg">Forex</span>
            <span class="px-4 text-lg py-[3px] border border-orange-500 text-white rounded-lg">Precious Metals</span>
            <span class="px-4 text-lg py-[3px] border border-red-500 text-white rounded-lg">Oil</span>
            <span class="px-4 text-lg py-[3px] border border-blue-500 text-white rounded-lg">Indices</span>
          </div>
          <div v-if="!isLoggedIn">
            <button class="btn-register-color text-xl font-bold text-white px-6 py-3 rounded-lg">Register Now</button>
          </div>
          <p class="text-md mt-4 text-white">
            When you invest, your capital is at risk. Be prudent.
          </p>
        </div>

      </div>

      <!-- Mobile version：Copy Trading + photo + Choose & Trade -->
      <div class="flex flex-col lg:hidden items-center py-20 gap-10 max-w-6xl mx-auto text-center">
        
        <!-- Copy Trading Section-->
        <div class="order-1 relative">
          <h1 class="text-6xl font-medium uppercase text-light-blue mb-4">
            COPY TRADING
          </h1>
          <p class="text-4xl mb-8 z-10">
            with <span class="text-white">Blackwell Invest</span>
          </p>

          <div class="flex justify-center gap-4 mb-6">
            <NuxtImg src="/google-play.jpg" class="h-12 rounded-lg z-10" alt="Google Play" />
            <NuxtImg src="/app-store.jpg" class="h-12 rounded-lg z-10" alt="App Store" />
            <NuxtImg src="/regular.png" class="regular" alt="regular" />
          </div>
        </div>

        <!-- photo -->
        <div class="order-2 relative max-w-lg w-full">
          <NuxtImg src="/hand.png" class="w-full mx-auto" alt="Copy Trading" />
        </div>

        <!-- Choose & Trade Section-->
        <div class="order-3 text-end">
          <h2 class="text-4xl font-semibold text-light-blue mb-4">Choose & Trade</h2>
          <p class="text-5xl font-semibold gold mb-2">Ready-To-Go Strategies</p>
          <p class="text-lg mb-6">
            Browse and copy hundreds of investment strategies developed by master traders! 
            Whether you are a pro or beginner, you can now trade quicker and more confidently.
          </p>

          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="px-4 text-lg py-[3px] border border-yellow-500 text-white rounded-lg">Forex</span>
            <span class="px-4 text-lg py-[3px] border border-orange-500 text-white rounded-lg">Precious Metals</span>
            <span class="px-4 text-lg py-[3px] border border-red-500 text-white rounded-lg">Oil</span>
            <span class="px-4 text-lg py-[3px] border border-blue-500 text-white rounded-lg">Indices</span>
          </div>
          <div v-if="!isLoggedIn">
            <button class="btn-register-color text-xl font-bold text-white px-6 py-3 rounded-lg">Register Now</button>
          </div>
          <p class="text-md mt-4 text-white">
            When you invest, your capital is at risk. Be prudent.
          </p>
        </div>

      </div>
      <!-- Fast Matching Section -->
      <div class="text-center mt-10">
        <h2 class="text-4xl font-semibold text-light-blue mb-6">Fast Matching</h2>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-center pt-10 pb-[5rem] max-w-4xl mx-auto">
        <div class="relative max-w-sm w-full">
          <NuxtImg src="/fast-matching.png" class="w-[60%] webCenter" alt="Fast Matching" />
        </div>

        <div class="flex-1 text-left margin-l-web">
          <ul class="text-xl space-y-4 relative">
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              Spotlight
            </li>
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              Top Strategies
            </li>
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              Low Drawdown
            </li>
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              Medium Drawdown
            </li>
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              High Drawdown
            </li>
            <li class="flex items-center">
              <NuxtImg src="/arrow.png" class="w-15 h-5 mr-2" alt="Arrow" />
              New Strategies
            </li>
          </ul>
        </div>
      </div>
      <!-- Easy Analysis Section-->
      <div class="text-center mt-10">
        <h2 class="text-4xl font-semibold text-light-blue mb-6">Easy Analysis</h2>
        <p class="text-xl font-semibold gold mb-2">Instant Clarity on the Masters' profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place.</p>
      </div>
      <div class="relative flex justify-center items-center mt-10 mb-10">
        <NuxtImg src="/mobile-2.png" class="w-[20%]" alt="Mobile UI" />
        <!-- Mobile Function-->
        <NuxtImg src="/function-1.png" class="absolute top-[-6%] left-[26%] w-[25%] glow-effect" alt="Function 1" />
        <NuxtImg src="/function-2.png" class="absolute top-[16%] right-[30%] w-[20%] glow-effect" alt="Function 2" />
        <NuxtImg src="/function-3.png" class="absolute top-[34%] left-[30%] w-[20%] glow-effect" alt="Function 3" />
        <NuxtImg src="/function-4.png" class="absolute bottom-[16%] right-[30%] w-[20%] glow-effect" alt="Function 4" />
        <NuxtImg src="/function-5.png" class="absolute bottom-[-5%] left-[30%] w-[20%] glow-effect" alt="Function 5" />
      </div>
      <div class="trade-pro-section">
        <NuxtImg src="/bg-1.png" class="trade-pro-bg" alt="Background" />
      </div>
      <!-- Trade Like a Pro in Minutes Section-->
      <div class="text-center lg:text-center mt-[14rem]">
        <h2 class="text-4xl font-semibold text-light-blue mb-6">Trade Like a Pro in Minutes</h2>
      </div>
      <div class="text-white max-w-[72rem] mx-auto px-10 lg:px-16 rounded-lg pb-10">
        <div class="flex flex-col lg:flex-row items-center gap-10 py-10">
          <div class="flex-1">
            <div class="flex flex-col gap-4">
              <div v-for="(step, index) in steps" :key="index" 
                class="cursor-pointer px-6 py-4 border border-[#01F2F2] rounded-lg w-full lg:w-auto"
                :class="{'text-light-blue': activeStep === index}" 
                @click="activeStep = index">
                <span class="text-3xl font-normal text-yellow-400">{{ index + 1 }}</span>
                <span class="ml-2 text-xl" :class="{'text-white': activeStep !== index}">{{ step.title }}</span>
              </div>
            </div>
          </div>
          
          <div class="flex-1 flex justify-center lg:justify-center">
            <div class="p-4 rounded-lg shadow-lg max-w-[320px]">
              <img v-if="activeStep !== null" :src="steps[activeStep].image" alt="Step Image" 
                class="w-full h-auto rounded-md">
            </div>
          </div>
        </div>
        <div class="flex justify-center lg:justify-center gap-4 mb-3-5">
          <NuxtImg src="/google-play.jpg" class="h-12 rounded-lg" alt="Google Play" />
          <NuxtImg src="/app-store.jpg" class="h-12 rounded-lg" alt="App Store" />
        </div>
        </div>
        <!-- How to Link MT4 Account Section-->
        <div class="text-center lg:text-center mt-10">
          <h2 class="text-4xl font-semibold text-light-blue mb-6">How to Link MT4 Account</h2>
        </div>
        <div class="text-white max-w-[72rem] mx-auto px-10 lg:px-16 rounded-lg relative py-10">
          
          <div class="relative flex items-center justify-center">
            <button v-if="linkStep > 0" @click="prevStep" class="absolute left-0 w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-400"><Icon name="mdi:chevron-left" class="text-white text-3xl" />
            </button>
            
            <div class="overflow-hidden w-full max-w-4xl flex justify-center">
              <transition-group name="fade" tag="div" class="flex" :class="{'lg:flex-row lg:space-x-6': isDesktop}">
                <div v-for="(item, index) in visibleSteps" :key="index" class="w-full px-4 flex flex-col items-center">
                  <div class="border border-[#01F2F2] p-4 rounded-lg shadow-lg min-h-[380px] sm:max-w-[300px] flex flex-col items-center justify-between">
                    <img :src="item.image" alt="Step Image" class="w-full h-auto rounded-md max-w-xs">
                    <p class="mt-4 text-lg text-center font-bold text-[#01F2F2]">{{ item.content }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
            
            <button v-if="linkStep < link.length - stepCount" @click="nextStep" class="absolute right-0 w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-400"><Icon name="mdi:chevron-right" class="text-white text-3xl" />
            </button>
          </div>
          <div v-if="!isLoggedIn" class="text-center mt-6">
            <button class="btn-register-color text-xl font-bold text-white px-6 py-3 rounded-lg">Register Now</button>
          </div>
        </div>
      
      <div class="trade-pro-section">
        <NuxtImg src="/bg-1.png" class="trade-pro-bg" alt="Background" />
      </div>
      <div class="text-center lg:text-center mt-[14rem]">
        <h2 class="text-4xl font-semibold text-light-blue mb-6">Why Choose Us?</h2>
      </div>
      <div class="list-container">
        <div class="list-item" v-for="(item, index) in items" :key="index">
          <NuxtImg :src="item.icon" class="icon" alt="icon" />
          <div class="text-wrapper">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-description text-left">{{ item.description }}</p>
          </div>
        </div>
        <div v-if="!isLoggedIn">
          <button class="btn-register-color text-xl font-bold text-white px-6 py-3 rounded-lg">Register Now</button>
        </div>
      </div>
      <div class="trade-pro-section1">
        <div class="text-center lg:text-center pt-[11rem]">
          <h2 class="text-4xl font-semibold text-light-blue mb-6">Enquire Now</h2>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-full max-w-5xl bg-transparent text-center mb-10">
            <form @submit.prevent="submitForm" class="mt-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" class="input-field" />
                <input type="email" placeholder="Email" class="input-field" />
                <input type="tel" placeholder="Mobile No." class="input-field" />
                <select v-model="selectedCountry" class="input-field">
          <option value="">Select your country</option>
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.flag }} {{ country.name }}
          </option>
        </select>
              </div>
              <textarea placeholder="Enter your message here" class="input-field h-32"></textarea>
              <button class="btn-register-color text-xl font-bold text-white px-6 py-3 rounded-lg">Submit</button>
            </form>
          </div>
        </div>
    </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      activeStep: 0,
      countries: [],
      selectedCountry: "",
      isLoggedIn: false, 
      steps: [
        { 
          title: 'Install our app, “Blackwell Invest”', 
          image: '/guide-1.png'
        },
        { 
          title: 'Choose a signal Master and click “Copy”', 
          image: '/guide-2.png'
        },
        { 
          title: 'Set your trade size preferences', 
          image: '/guide-3.png'
        },
        { 
          title: 'Click “Agree and Copy”', 
          image: '/guide-4.png'
        }
      ],
      linkStep: 0,
      isDesktop: false,
      link: [
        { content: ' Select “BlackwellGlobalAsia-Live” server', image: '/step-1.png' },
        { content: 'Fill in your Blackwell Global trading account OR create a new account', image: '/step-2.png' },
        { content: 'Click “Copy Trades', image: '/step-3.png' },
        { content: 'Click “Agree and Copy', image: '/step-4.png' },
        { content: 'Confirm the trade settings', image: '/step-5.png' },
        { content: 'Ensure sufficient balance in your account', image: '/step-6.png' },
        { content: 'Monitor your trade performance', image: '/step-7.png' },
        { content: 'Enjoy successful copy trading!', image: '/step-8.png' }
      ],
      items: [
        {
          icon: '/icon-1.png',
          title: 'Regulated',
          description: 'The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict comliance for your peace of mind.'
        },
        {
          icon: '/icon-2.png',
          title: '0 Commissions',
          description: 'When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.'
        },
        {
          icon: '/icon-3.png',
          title: 'User friendly',
          description: 'With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpier. Trade smarter, not harder!'
        },
        {
          icon: '/icon-4.png',
          title: 'Tier 1 liquidity',
          description: 'Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.'
        }
      ]
    };
  },
  watch: {
    isDesktop(newValue) {
      this.linkStep = 0;
    }
  },
  computed: {
    stepCount() {
      return this.isDesktop ? 3 : 1;
    },
    visibleSteps() {
      return this.link.slice(this.linkStep, this.linkStep + this.stepCount);
    }
  },
  methods: {
    prevStep() {
      if (this.linkStep > 0) this.linkStep--;
    },
    nextStep() {
      if (this.linkStep < this.link.length - this.stepCount) this.linkStep++;
    },
    updateIsDesktop() {
      this.isDesktop = window.innerWidth >= 1024;
    }
  },
  async mounted() {
    this.updateIsDesktop();
    window.addEventListener("resize", this.updateIsDesktop);
    const storedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");
    this.isLoggedIn = !!storedUser.accessToken;
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      this.countries = data.map((country) => ({
        name: country.name.common,
        code: country.cca2,
        dial_code: country.idd?.root
          ? country.idd.root + (country.idd.suffixes?.[0] || "")
          : "",
        flag: country.flag || "",
      }));
    } catch (error) {
      console.error("Failed to load countries:", error);
    }

  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateIsDesktop);
  }
};
</script>

<style lang="css" scoped>
.regular {
  position: absolute;
  top: 25%;
  right: 3%;
  z-index: -1;
  width: 10rem;
  height: 10rem;
}
.mb-3-5{
  margin-bottom: 3.5rem;
}
.self-start-nomobile {
  align-self: flex-start;
}
.btn-register-color{
  background: linear-gradient(to top, #c95a0b, #e56717, #ff7f30);
}
.webCenter{
  margin-left: auto;
}
.trade-pro-section {
    position: relative;
}

.trade-pro-bg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
    height: auto;
    z-index: -1;
}
.cursor-pointer {
  transition: background 0.3s, color 0.3s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.title {
  font-size: 24px;
  color: #00bfff;
  margin-bottom: 20px;
}
.list-container {
  text-align: center;
  padding: 4rem;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.list-item {
  display: flex;
  align-items: center;
  background: white;
  color: black;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.text-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.item-title {
  font-weight: bold;
  color: blue;
  min-width: 150px;
}

.item-description {
  color: black;
  flex-grow: 1;
  margin-left: 20px;
}
.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid grey;
  background-color: transparent;
  color: grey;
  border-radius: 6px;
  outline: none;
}

.input-field::placeholder {
  color: grey;
}
.trade-pro-section1 {
  position: relative;
  width: 100%;
  min-height: 400px;
  background-image: url('/bg-3.png');
  background-size: cover;
  background-position: top -50px;
  background-repeat: no-repeat;
}
@media screen and (min-width: 1025px) {
  .margin-l-web{
    margin-left:3rem;
  }
}
@media screen and (max-width: 1025px) {
  .regular {
    position: absolute;
    top: 0;
    right: -15%;
    z-index: -1;
    width: 12rem;
    height: 12rem;
  }
  .self-start-nomobile {
    align-self: center;
  }
  .webCenter{
    margin: auto;
  }
  .margin-l-web{
    margin-top:3rem;
  }
}
@media screen and (max-width: 768px) {
  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 2;
  }
  .order-3 {
    order: 3;
  }
  .text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
}
@media screen and (max-width: 570px) {
  .regular {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 12rem;
    height: 12rem;
  }
}
</style>
