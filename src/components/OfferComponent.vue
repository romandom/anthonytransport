<template>
  <div
    class="flex flex-col lg:w-[35%] xs:mt-[10%] lg:mt-[8%] font-sans xs:text-center lg:text-start"
  >
    <h2
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px]"
    >
      Ponukame prepravu
    </h2>
    <h2
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl xs:text-[25px]"
    >
      do 20 krajin Europy
    </h2>
    <div class="lg:hidden w-[85%] xs:ml-[10%] lg:ml-0">
      <img class="w-[100%]" src="@/assets/europe.jpg" />
    </div>
    <div
      class="xs:hidden lg:block bg-black h-[4px] w-[75%] 2xl:mt-[4%] xl:mt-[3%]"
    ></div>
    <p
      class="mt-[10%] xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[75%] 2xl:text-xl xl:text-lg lg:text-base"
    >
      Lorem ipsum dolor sit amet,
      <span class="text-anthony-red">consectetur</span> adipiscing elit. Aenean
      suscipit scelerisque tortor ornare finibus<br /><span
        class="2xl:text-2xl xl:text-xl"
      >
        Blalalla <span class="text-anthony-red">400</span> zakazok
      </span>
    </p>
    <p
      class="2xl:text-2xl lg:text-xl font-medium xs:ml-[5%] lg:ml-0 xs:mr-[5%] lg:mr-0 xs:w-[90%] lg:w-[80%]"
    >
      Pellentesque vel
      <span class="text-anthony-red">mauris a elit sodales</span> convallis sit
      amet sit amet odio.
    </p>
  </div>
  <div class="flex flex-col font-sans">
    <div class="xs:hidden lg:block w-[100%]">
      <img class="w-[100%]" src="@/assets/europe.jpg" />
    </div>
    <div
      class="xs:hidden lg:flex flex-row text-map-color 2xl:text-lg lg:text-md lg:ml-[35%]"
    >
      <p>Dolezite dokumenty a formular najdete nizsie</p>
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
