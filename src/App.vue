<template>
  <body
    id="grad"
    class="xl:h-[4458px] 2xl:h-[5573px] lg:h-[3566px] md:h-[2853px] sm:h-[2282px] xs:h-[1825px] font-sans"
  >
    <section class="2xl:h-[1390px]">
      <nav class="flex flex-row">
        <div class="mt-[7%] ml-[5%]">
          <img src="@/assets/logo_white.svg" />
        </div>
        <div
          class="flex flex-row 2xl:text-2xl xl:text-xl text-anthony-white font-semibold gap-4 mt-[2%] 2xl:ml-[-8%] xl:ml-[-15%]"
        >
          <div>O NAS</div>
          <div>SLUZBY</div>
          <div>NAS TYM</div>
          <div>KARIERA</div>
          <div>KONTAKT</div>
        </div>
        <div class="flex flex-row mt-[2.5%] gap-4 ml-[8%]">
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
        class="flex-col text-anthony-white 2xl:text-4xl xl:text-3xl font-bold font-sans ml-[9.5%] mt-[2%]"
      >
        <h1>Medzinarodna a</h1>
        <h1>vnutrostatna</h1>
        <h1>preprava</h1>
      </div>
      <div class="mt-[25%]">
        <img src="@/assets/objects/red_dash.svg" class="dash-center" />
      </div>
      <div
        class="flex flex-row class 2xl:text-xl xl:text-lg text-anthony-white justify-content-around mx-[12%] mt-[3%]"
      >
        <AboutComponent />
      </div>
    </section>
    <section
      class="bg-anthony-white mt-[5%] h-[790px] flex flex-row justify-content-center pl-[5%]"
    >
      <OfferComponent />
    </section>
    <section class="bg-anthony-white-darker h-[1284px] flex flex-col px-[5%]">
      <CareerComponent />
    </section>
    <section class="bg-anthony-white h-[969px] flex flex-col">
      <VehiclesComponent />
    </section>
    <section class="bg-anthony-white-darker h-[985px] flex flex-row">
      <ContactComponent />
      <div class="flex flex-col w-[40%] ml-[8%] mt-[15%]">
        <h4 class="2xl:text-[35px] xl:text-[30px] mb-[6%]">
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
      center: { lat: 48.63717, lng: 21.7173 },
      markers: [
        {
          position: {
            lat: 48.63717,
            lng: 21.7173,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {},
};
</script>

<style>
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
.footer-center {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
