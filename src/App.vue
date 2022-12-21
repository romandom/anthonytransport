<template>
  <body
    id="grad"
    class="xl:h-[4458px] 2xl:h-[5573px] lg:h-[4200px] md:h-[2853px] sm:h-[2282px] xs:h-[1825px] font-sans"
  >
    <nav class="sticky-top flex flex-row bg-color">
      <div class="mt-[7%] ml-[5%] w-[45%]">
        <img
          id="logo"
          class="w-[100%]"
          :class="
            this.shrink
              ? 'scale-[0.35] transition duration-1000 translate-y-[-80%] translate-x-[-25%]'
              : 'scale-100 transition duration-1000'
          "
          src="@/assets/logo_white.svg"
        />
      </div>
      <div
        class="flex flex-row 2xl:text-3xl xl:text-2xl lg:text-xl text-anthony-white font-semibold gap-4 mt-[2%] w-[50%] lg:ml-[-15%]"
      >
        <div class="hover:cursor-pointer" @click="scroll('About')">O NAS</div>
        <div class="hover:cursor-pointer" @click="scroll('Services')">
          SLUZBY
        </div>
        <div class="hover:cursor-pointer" @click="scroll('Team')">NAS TYM</div>
        <div class="hover:cursor-pointer" @click="scroll('Vehicles')">
          GARAZ
        </div>
        <div class="hover:cursor-pointer" @click="scroll('Contact')">
          KONTAKT
        </div>
      </div>
      <div class="flex flex-row mt-[2.5%] gap-4">
        <div>
          <img
            class="hover:cursor-pointer hover:border-2 hover:rounded-md"
            src="@/assets/flags/slovak.svg"
          />
        </div>
        <div>
          <img
            class="hover:cursor-pointer hover:border-2 hover:rounded-md"
            src="@/assets/flags/english.svg"
          />
        </div>
        <div class="hover:cursor-pointer">
          <img
            class="hover:cursor-pointer hover:border-2 hover:rounded-md"
            src="@/assets/flags/german.svg"
          />
        </div>
      </div>
    </nav>
    <section id="About" class="2xl:h-[1390px]">
      <div class="flex flex-row ml-[9.5%] mt-[3%]">
        <div>
          <img src="@/assets/objects/dash.svg" />
        </div>
        <div class="mx-[2%]">
          <img src="@/assets/objects/dash.svg" />
        </div>
        <div>
          <img src="@/assets/objects/dash.svg" />
        </div>
      </div>
      <div
        class="flex-col text-anthony-white 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold font-sans ml-[9.5%] mt-[2%]"
      >
        <h1>Medzinarodna a</h1>
        <h1>vnutrostatna</h1>
        <h1>preprava</h1>
      </div>
      <div class="mt-[25%]">
        <img src="@/assets/objects/red_dash.svg" class="dash-center" />
      </div>
      <div
        class="flex flex-row class 2xl:text-xl xl:text-lg lg:text-base text-anthony-white justify-content-around mx-[12%] mt-[3%]"
      >
        <AboutComponent />
      </div>
    </section>
    <section
      id="Services"
      class="bg-anthony-white mt-[5%] h-[790px] flex flex-row justify-content-center pl-[5%]"
    >
      <OfferComponent />
    </section>
    <section
      @scroll="handleScroll"
      id="Team"
      class="bg-anthony-white-darker h-[1284px] flex flex-col px-[5%]"
    >
      <CareerComponent />
    </section>
    <section id="Vehicles" class="bg-anthony-white h-[969px] flex flex-col">
      <VehiclesComponent />
    </section>
    <section
      id="Contact"
      class="bg-anthony-white-darker h-[985px] flex flex-row"
    >
      <ContactComponent />
      <div class="flex flex-col w-[40%] ml-[8%] mt-[15%]">
        <h4 class="2xl:text-[35px] xl:text-[30px] lg:text-[25px] mb-[6%]">
          Formular <span class="text-anthony-red">nezavazneho dopytu</span>
        </h4>
        <div class="flex flex-row justify-between">
          <FormComponent />
        </div>
      </div>
    </section>
    <FooterComponent />
  </body>
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
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
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
      element.scrollIntoView({ behavior: "smooth" });
    },
    handleScroll() {
      const top = document.getElementById("Team").getBoundingClientRect().top;
      const bottom = document
        .getElementById("Team")
        .getBoundingClientRect().bottom;
      console.log(top);
      console.log(bottom);
    },
  },
};
</script>

<style scoped>
#grad {
  background: linear-gradient(
      179.84deg,
      #b90000 0.66%,
      #630000 9.46%,
      #530404 12.67%,
      #050505 15.02%
    ),
    #ffffff;
}
.dash-center {
  margin-inline: auto;
}
.bg-color {
  background: linear-gradient(
    180deg,
    #b90000 0%,
    #ae0000 32%,
    transparent 0,
    transparent 100%
  );
}
.footer-center {
  margin-top: auto;
  margin-bottom: auto;
}
.logo {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.logo.logo--hidden {
  width: 50%;
}
</style>
