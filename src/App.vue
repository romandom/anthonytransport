<link rel="stylesheet" href="main.css">
<template>
  <nav
      class="sticky-top "
  >
    <div class="flex flex-row bg-color xs:justify-between lg:justify-start">
      <div class="xs:mt-[7%] sm:mt-[4%] lg:mt-[7%] ml-[5%] xs:w-[60%] sm:w-[45%] md:w-[40%] lg:w-[45%]">
        <img
            id="logo"
            class="w-[100%]"
            :class="
          this.shrink
            ? 'xs:scale-[0.8] xs:translate-y-[-20%] xs:translate-x-[-10%] lg:scale-[0.35] transition duration-1000 lg:translate-y-[-80%] lg:translate-x-[-25%]'
            : 'scale-100 transition duration-1000'
        "
            src="@/assets/logo_white.svg"
        />
      </div>
      <div
          v-if="$route.path == '/SK'"
          class="lg:flex flex-row 2xl:text-3xl xl:text-2xl lg:text-xl text-anthony-white font-semibold gap-4 mt-[2%] w-[50%] lg:ml-[-15%] xs:hidden"
      >
        <div
            class="hover:cursor-pointer"
            :class="about ? 'underline' : ''"
            @click="scroll('About')"
        >
          O NÁS
        </div>
        <div
            class="hover:cursor-pointer"
            :class="services ? 'underline' : ''"
            @click="scroll('Services')"
        >
          SLUŽBY
        </div>
        <div
            class="hover:cursor-pointer"
            :class="team ? 'underline' : ''"
            @click="scroll('Team')"
        >
          NÁŠ TÝM
        </div>
        <div
            class="hover:cursor-pointer"
            :class="vehicles ? 'underline' : ''"
            @click="scroll('Vehicles')"
        >
          GARÁŽ
        </div>
        <div
            class="hover:cursor-pointer"
            :class="contact ? 'underline' : ''"
            @click="scroll('Contact')"
        >
          KONTAKT
        </div>
      </div>
      <div
          v-if="$route.path == '/EN'"
          class="lg:flex flex-row 2xl:text-3xl xl:text-2xl lg:text-xl text-anthony-white font-semibold gap-4 mt-[2%] w-[50%] lg:ml-[-15%] xs:hidden"
      >
        <div
            class="hover:cursor-pointer"
            :class="about ? 'underline' : ''"
            @click="scroll('About')"
        >
          ABOUT
        </div>
        <div
            class="hover:cursor-pointer"
            :class="services ? 'underline' : ''"
            @click="scroll('Services')"
        >
          SERVICES
        </div>
        <div
            class="hover:cursor-pointer"
            :class="team ? 'underline' : ''"
            @click="scroll('Team')"
        >
          TEAM
        </div>
        <div
            class="hover:cursor-pointer"
            :class="vehicles ? 'underline' : ''"
            @click="scroll('Vehicles')"
        >
          VEHICLES
        </div>
        <div
            class="hover:cursor-pointer"
            :class="contact ? 'underline' : ''"
            @click="scroll('Contact')"
        >
          CONTACT
        </div>
      </div>
      <div class="flex flex-row lg:mt-[2.5%] xs:mr-[10%] lg:mr-0 xs:mt-[10%] sm:mt-[6%] xs:gap-4 sm:gap-10 lg:gap-4">
        <div>
          <img
              class="hover:cursor-pointer hover:border-2 hover:rounded-md"
              :class="this.$route.path === '/SK'? 'border-2 rounded-md': ''"
              src="@/assets/flags/slovak.svg"
              @click="switchLanguage('SK')"
          />
        </div>
        <div
            @click="switchLanguage('EN')">
          <img
              class="hover:cursor-pointer hover:border-2 hover:rounded-md"
              src="@/assets/flags/english.svg"
              :class="this.$route.path === '/EN'? 'border-2 rounded-md': ''"
          />
        </div>
        <!--      <div class="hover:cursor-pointer">-->
        <!--        <img-->
        <!--          class="hover:cursor-pointer hover:border-2 hover:rounded-md"-->
        <!--          src="@/assets/flags/german.svg"-->
        <!--        />-->
        <!--      </div>-->
      </div>
    </div>
  </nav>

  <section
      id="About"
      class="grad xs:h-[420px] xsm:h-[520px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[931px] mt-[-20%]  overflow-hidden">
    <div class="flex flex-row ml-[9.5%]">
      <div class="mt-[24%]">
        <img
            class="xs:block sm:hidden mt-[25%]"
            src="@/assets/objects/dash_mobile.svg"
        />
        <img class="xs:hidden sm:block sm:mt-[5%] md:mt-0" src="@/assets/objects/dash.svg"/>
      </div>
      <div class="xs:mx-[6%] lg:mx-[2%] mt-[24%]">
        <img
            class="xs:block sm:hidden mt-[25%] w-[100%]"
            src="@/assets/objects/dash_mobile.svg"
        />
        <img class="xs:hidden sm:block sm:mt-[5%] md:mt-0" src="@/assets/objects/dash.svg"/>
      </div>
      <div class="mt-[24%]">
        <img
            class="xs:block sm:hidden mt-[25%]"
            src="@/assets/objects/dash_mobile.svg"
        />
        <img class="xs:hidden sm:block sm:mt-[5%] md:mt-0" src="@/assets/objects/dash.svg"/>
      </div>
    </div>
    <div
        v-if="$route.path == '/SK'"
        class="flex-col text-anthony-white font-bold font-sans ml-[9.5%] xs:mt-[5%] xsm:mt-[2%] lg:mt-[2%]"
    >
      <h1 class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl">
        Medzinárodná a
      </h1>
      <h1
          class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl xs:mb-[-1%] xs:mt-[-3%] xl:mt-[0%] xsm:mb-0 xsm:mt-[-1%]"
      >
        vnútroštátna
      </h1>
      <h1 class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl">
        preprava
      </h1>
    </div>
    <div
        v-if="$route.path == '/EN'"
        class="flex-col text-anthony-white font-bold font-sans ml-[9.5%] xs:mt-[5%] xsm:mt-[2%] lg:mt-[2%]"
    >
      <h1 class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl">
        Domestic and
      </h1>
      <h1
          class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl xs:mb-[-1%] xs:mt-[-3%]  xl:mt-[0%]  xsm:mb-0 xsm:mt-[-1%]"
      >
        international
      </h1>
      <h1 class="xs:text-[25px] xsm:text-[30px] 2xl:text-5xl xl:text-4xl lg:text-3xl">
        transport
      </h1>
    </div>
    <div
        class="xs:w-[95%] xs:mt-[-12%] xsm:mt-[-18%] lg:mt-[-20%] lg:w-[80%] xl:mt-[-22%] 2xl:mt-[-23%] xl:w-[70%] 2xl:w-[72%] xs:ml-[30%] xsm:ml-[35%] lg:ml-[40%]">
      <img src="@/assets/kamion.png">
    </div>
  </section>
  <section class="2xl:h-[450px] xl:h-[320px] lg:h-[300px] xs:h-[520px] xsm:h-[450px] bg-black">
    <div class="xs:pt-[5%] 2xl:pt-[5%] lg:pt-0">
      <img src="@/assets/objects/red_dash.svg" class="dash-center"/>
    </div>
    <div
        class="flex xs:flex-col lg:flex-row class 2xl:text-xl xl:text-lg lg:text-base text-anthony-white justify-content-around xs:ml-[12%] lg:ml-0 xs:mr-[5%] lg:mr-0 lg:mx-[12%] xs:mt-[10%] lg:mt-[5%]"
    >
      <AboutComponent/>
    </div>
  </section>

  <section
      id="Services"
      class="bg-anthony-white mt-[5%] xl:h-[790px] lg:h-[730px] flex xs:flex-col lg:flex-row lg:justify-evenly lg:justify-content-center lg:ml-[10%] lg:mr-[5%]"
  >
    <OfferComponent/>
  </section>
  <section
      @scroll="handleScroll()"
      id="Team"
      class="bg-anthony-white-darker xl:h-[1284px] lg:h-[1100px] xs:h-[1400px] xsm:h-[1600px] sm:h-[1800px] md:h-[2000px] flex flex-col px-[5%]"
  >
    <CareerComponent/>
  </section>
  <section id="Vehicles" class="bg-anthony-white xs:h-[700px] xsm:h-[800px] lg:h-[969px] flex flex-col">
    <VehiclesComponent/>
  </section>
  <section
      id="Contact"
      class="bg-anthony-white-darker lg:h-[700px] xl:h-[850px] 2xl:h-[985px] flex xs:flex-col lg:flex-row"
  >
    <ContactComponent/>
    <div
        class="flex flex-col xs:w-[100%] lg:w-[40%] xs:text-center lg:text-start lg:ml-[8%] mt-[15%]"
    >
      <h4
          v-if="$route.path == '/SK'"
          class="2xl:text-[35px] xl:text-[30px] lg:text-[25px] xs:text-[22px] sm:text-[40px] mb-[6%]"
      >
        Formulár <span class="text-anthony-red">nezáväzného dopytu</span>
      </h4>
      <h4
          v-if="$route.path == '/EN'"
          class="2xl:text-[35px] xl:text-[30px] lg:text-[25px] xs:text-[22px] sm:text-[40px] mb-[6%]"
      >
        Contact <span class="text-anthony-red">our team</span>
      </h4>
      <div class="flex flex-row justify-between">
        <FormComponent/>
      </div>
    </div>
  </section>
  <FooterComponent/>
</template>

<script>
import CareerComponent from "@/components/CareerComponent";
import FooterComponent from "@/components/FooterComponent";
import FormComponent from "@/components/FormComponent";
import ContactComponent from "@/components/ContactComponent";
import VehiclesComponent from "@/components/VehiclesComponent";
import OfferComponent from "@/components/OfferComponent";
import AboutComponent from "@/components/AboutComponent";

export default {
  name: "App",
  components: {
    AboutComponent,
    OfferComponent,
    VehiclesComponent,
    ContactComponent,
    FooterComponent,
    FormComponent,
    CareerComponent,
  },
  data: () => {
    return {
      shrink: false,
      lastScrollPosition: 0,
      contact: false,
      contactStart: 0,
      contactEnd: 0,
      services: false,
      servicesStart: 0,
      servicesEnd: 0,
      about: false,
      aboutStart: 0,
      aboutEnd: 0,
      team: false,
      teamStart: 0,
      teamEnd: 0,
      vehicles: false,
      vehiclesStart: 0,
      vehiclesEnd: 0,
      menu: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.onScroll);
  },
  mounted() {
    this.getPos();
  },
  methods: {
    switchLanguage(language) {
      this.$router.push('/' + language)
    },
    getPos() {
      this.contactStart = document
          .getElementById("Contact")
          .getBoundingClientRect().top;
      this.contactEnd = document
          .getElementById("Contact")
          .getBoundingClientRect().bottom;

      this.servicesStart = document
          .getElementById("Services")
          .getBoundingClientRect().top;
      this.servicesEnd = document
          .getElementById("Services")
          .getBoundingClientRect().bottom;

      this.aboutStart = document
          .getElementById("About")
          .getBoundingClientRect().top;
      this.aboutEnd = document
          .getElementById("About")
          .getBoundingClientRect().bottom;

      this.vehiclesStart = document
          .getElementById("Vehicles")
          .getBoundingClientRect().top;
      this.vehiclesEnd = document
          .getElementById("Vehicles")
          .getBoundingClientRect().bottom;

      this.teamStart = document
          .getElementById("Team")
          .getBoundingClientRect().top;
      this.teamEnd = document
          .getElementById("Team")
          .getBoundingClientRect().bottom;
    },
    onScroll() {
      const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition == 0) {
        this.shrink = false;
        return;
      } // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (currentScrollPosition > 0) {
        this.shrink = true;
        return;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
    scroll(value) {
      const element = document.getElementById(value);
      element.scrollIntoView({behavior: "smooth"});
    },
    handleScroll() {
      const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
      if (
          currentScrollPosition > this.contactStart &&
          currentScrollPosition < this.contactEnd
      ) {
        this.contact = true;
        this.services = false;
        this.about = false;
        this.team = false;
        this.vehicles = false;
      }
      if (
          currentScrollPosition > this.aboutStart &&
          currentScrollPosition < this.aboutEnd
      ) {
        this.contact = false;
        this.services = false;
        this.about = true;
        this.team = false;
        this.vehicles = false;
      } else if (
          currentScrollPosition > this.servicesStart &&
          currentScrollPosition < this.servicesEnd
      ) {
        this.contact = false;
        this.services = true;
        this.about = false;
        this.team = false;
        this.vehicles = false;
      }
      if (
          currentScrollPosition > this.teamStart &&
          currentScrollPosition < this.teamEnd
      ) {
        this.contact = false;
        this.services = false;
        this.about = false;
        this.team = true;
        this.vehicles = false;
      }
      if (
          currentScrollPosition > this.vehiclesStart &&
          currentScrollPosition < this.vehiclesEnd
      ) {
        this.contact = false;
        this.services = false;
        this.about = false;
        this.team = false;
        this.vehicles = true;
      }
    },
  },
};
</script>

<style scoped>
.grad {
  background: linear-gradient(
      180deg,
      #b90010 18.39%,
      #630000 46.79%,
      #530404 59.56%,
      #050505 68.88%
  ),
  #ffffff;
}

.dash-center {
  margin-inline: auto;
}

@media only screen and (min-width: 1024px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #b90000 0%,
        #b70000 32%,
        transparent 0,
        transparent 100%
    );
  }
}

@media only screen and (max-width: 400px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #b80000 44.75%
    );
  }
}

@media only screen and (min-width: 400px) and (max-width: 500px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #b90000 44.75%
    );
  }
}

@media only screen and (min-width: 500px) and (max-width: 600px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #b30000 44.75%
    );
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #b30000 44.75%
    );
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #b30000 44.75%
    );
  }
}

@media only screen and (min-width: 850px) and (max-width: 1024px) {
  .bg-color {
    background: linear-gradient(
        180deg,
        #bc0000 0%,
        #a50000 44.75%
    );
  }
}
</style>
