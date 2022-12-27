<template>
  <section
    class="flex xs:flex-col lg:flex-row lg:justify-content-between xs:h-[200px] lg:gap-[25%] lg:h-[75px] bg-black"
  >
    <h2
      class="text-anthony-white 2xl:text-3xl xl:text-2xl lg:text-xl lg:ml-[8%] footer-center text-center"
    >
      © Anthony Transport
    </h2>
    <div
      class="flex xs:flex-col lg:flex-row text-anthony-white underline mr-[2.5%] xs:gap-[10px] lg:gap-[5%] lg:justify-content-between xs:w-full lg:w-[45%] footer-center"
    >
      <h3
        class="2xl:text-[20px] xl:text-[16px] lg:text-[12px] footer-center text-center"
      >
        Prepravne podmienky
      </h3>
      <h3
        class="2xl:text-[20px] xl:text-[16px] lg:text-[12px] footer-center text-center"
      >
        Zmluvne podmienky
      </h3>
      <h3
        class="2xl:text-[20px] xl:text-[16px] lg:text-[12px] footer-center text-center"
      >
        Prepravny certifikat
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-center {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
