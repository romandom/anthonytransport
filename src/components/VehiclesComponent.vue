<template>
  <div
    class="w-full lg:h-[10%] xs:h-[7%] md:h-[10%] bg-anthony-red xs:mt-[10%] lg:mt-[8%] flex place-items-center font-sans"
  >
    <h2
      v-if="$route.path == '/SK'"
      class="2xl:text-7xl xl:text-6xl lg:text-5xl xs:text-[32px] sm:text-[35px] md:text-[38px] font-bold text-anthony-white xs:m-auto lg:m-0 lg:ml-[13%]"
    >
      Vozový park
    </h2>
    <h2
      v-if="$route.path == '/EN'"
      class="2xl:text-7xl xl:text-6xl lg:text-5xl xs:text-[32px] sm:text-[35px] md:text-[38px] font-bold text-anthony-white xs:m-auto lg:m-0 lg:ml-[13%]"
    >
      Our car fleet
    </h2>
  </div>
  <div
    v-if="$route.path == '/SK'"
    class="xs:h-[548px] sm:h-[538px] w-[82.5%] my-auto lg:mt-[8%] lg:text-xl xl:text-2xl 2xl:text-3xl bg-anthony-white-darker mx-auto pl-[3%] pt-[5%] flex xs:flex-col lg:flex-row"
  >
    <div class="lg:w-[60%]">
      <p>
        Náš vozový park tvorí
        <span class="text-anthony-red">5 ťahačov značky Volvo FH-500</span>,
        ktoré je možné kombinovať v súprave:
      </p>
      <ul class="list-disc">
        <li>veľkokapacitnými návesmi walking floor (90m<sup>3</sup>)</li>
        <li>sklápacím návesom (55m<sup>3</sup>)</li>
      </ul>
      <p>
        Všetky naše vozidlá majú
        <span class="text-anthony-red">emisnú normu EURO 6. O</span> naše
        vozidlá dbáme a pravidelne podliehajú všetkým náležitým prehliadkam a
        servisu. Našu flotilu vozidiel obmieňame v pravidelných časových
        intervaloch, aby aj naši vodiči užívali komfortné vozidlá, ktoré sú v
        súlade s požiadavkami súčasnej doby.
      </p>
    </div>
    <div class="xs:w-[60%] md:w-[45%] xs:mx-auto lg:mx-0 lg:w-[40%] lg:px-[3%]">
      <img src="@/assets/tahac.svg" />
    </div>
  </div>
  <div
    v-if="$route.path == '/EN'"
    class="xs:h-[548px] sm:h-[538px] w-[82.5%] my-auto lg:mt-[8%] lg:text-xl xl:text-2xl 2xl:text-3xl bg-anthony-white-darker mx-auto pl-[3%] pt-[5%] flex xs:flex-col lg:flex-row"
  >
    <div class="lg:w-[60%]">
      <p>
        Our car fleet consists of
        <span class="text-anthony-red">5 Volvo FH-500 truck units</span>, which
        can be combined with:
      </p>
      <ul class="list-disc">
        <li>large capacity semi-trailers walking floor (90m<sup>3</sup>)</li>
        <li>tripper trailers (55m<sup>3</sup>)</li>
      </ul>
      <p>
        All our vehicles have the
        <span class="text-anthony-red">EURO 6 emission standard</span>. We
        thoroughly care for our vehicles and they regularly undergo all proper
        inspections and service. Our fleet is renewed in regular intervals to
        ensure that our drivers also get to enjoy comfortable vehicles that meet
        all the current requirements.
      </p>
    </div>
    <div class="xs:w-[60%] md:w-[45%] xs:mx-auto lg:mx-0 lg:w-[40%] lg:px-[3%]">
      <img src="@/assets/tahac.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "VehiclesComponent",
};
</script>

<style scoped></style>
