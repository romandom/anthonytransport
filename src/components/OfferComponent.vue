<template>
  <div
    class="flex flex-col lg:w-[35%] xs:mt-[10%] md:mt-[5%] lg:mt-[8%] font-sans xs:text-center lg:text-start"
  >
    <h2
      v-if="$route.path == '/SK'"
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px] sm:text-[40px]"
    >
      Ponúkame prepravu
    </h2>
    <h2
      v-if="$route.path == '/EN'"
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px] sm:text-[40px]"
    >
      We offer shipping to
    </h2>
    <h2
      v-if="$route.path == '/SK'"
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px] sm:text-[40px]"
    >
      do viac ako 20 krajín
    </h2>
    <h2
      v-if="$route.path == '/EN'"
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px] sm:text-[40px]"
    >
      more than 20 countries
    </h2>
    <div class="lg:hidden w-[85%] xs:ml-[10%] lg:ml-0">
      <img class="w-[100%]" src="@/assets/europe.jpg" />
    </div>
    <div
      class="xs:hidden lg:block bg-black h-[4px] w-[75%] 2xl:mt-[4%] xl:mt-[3%]"
    ></div>
    <p
      v-if="$route.path == '/SK'"
      class="xs:mt-[10%] md:mt-[0%] lg:mt-[10%] xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[75%] 2xl:text-xl xl:text-lg lg:text-base"
    >
      Medzi najčastejšie krajiny, do ktorých
      <span class="text-anthony-red">prepravujeme</span> patrí napríklad
      Slovensko, Maďarsko, Česká Republika, Rakúsko, Taliansko, Poľsko a
      Slovinsko.<br /><span class="2xl:text-2xl xl:text-xl">
        Ročne prepravíme viac ako
        <span class="text-anthony-red">400</span> zakázok.
      </span>
    </p>
    <p
      v-if="$route.path == '/EN'"
      class="xs:mt-[10%] md:mt-[0%] lg:mt-[10%] xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[75%] 2xl:text-xl xl:text-lg lg:text-base"
    >
      The most common countries to which we ship
      <span class="text-anthony-red">ship include</span> for example Slovakia,
      Hungary, Czech Republic, Austria, Italy, Poland and Slovenia.<br /><span
        class="2xl:text-2xl xl:text-xl"
      >
        We transport more than
        <span class="text-anthony-red">400</span> orders annually.
      </span>
    </p>
    <p
      v-if="$route.path == '/EN'"
      class="2xl:text-2xl lg:text-xl font-medium xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[80%]"
    >
      We also deliver to other
      <span class="text-anthony-red">European countries,</span> so don't worry
      to contact our team.
    </p>
    <p
      v-if="$route.path == '/SK'"
      class="2xl:text-2xl lg:text-xl font-medium xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[80%]"
    >
      Doručujeme aj do ostatných
      <span class="text-anthony-red">európskych krajín,</span> tak sa nebojte
      napísať našemu týmu.
    </p>
  </div>
  <div class="flex flex-col font-sans">
    <div class="xs:hidden lg:block w-[100%]">
      <img class="w-[100%]" src="@/assets/europe.jpg" />
    </div>
    <div
      class="xs:hidden lg:flex flex-row text-map-color 2xl:text-lg lg:text-md lg:ml-[35%]"
    >
      <p v-if="$route.path == '/SK'">
        Dôležité dokumenty a kontakt nájdete nižšie
      </p>
      <p v-if="$route.path == '/EN'">
        You can find documents a contacts bellow
      </p>
      <div>
        <img src="@/assets/objects/arrow-down.png" class="w-[50%] mt-[5%]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferComponent",
};
</script>

<style scoped></style>
