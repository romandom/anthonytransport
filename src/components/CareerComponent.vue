<template>
  <div class="lg:hidden text-center font-sans mt-[10%]">
    <h2 class="xs:text-[24px] font-semibold font-sans">
      Sme spolahliva firma s
    </h2>
    <h2 class="xs:text-[24px] font-semibold font-sans text-anthony-red">
      individualnym pristupom
    </h2>
    <h2 class="xs:text-[24px] font-semibold font-sans">
      pre kazdeho zakaznika
    </h2>
  </div>
  <div class="xs:hidden lg:block ml-[10%] mt-[5%] font-medium font-sans">
    <h2 class="2xl:text-5xl xl:text-4xl lg:text-3xl">
      Sme spolahliva firma s
      <span class="text-anthony-red">individualnym</span>
    </h2>
    <h2 class="text-5xl xl:text-4xl lg:text-3xl mt-[1%]">
      <span class="text-anthony-red">pristupom</span> pre kazdeho zakaznika.
    </h2>
  </div>
  <div
    class="flex xs:flex-col lg:flex-row justify-content-evenly mt-[7%] xs:mx-[5%] xsm:mx-[10%] sm:mx-[15%] md:mx-[20%] font-sans"
  >
    <CardComponent class="xs:mb-[20%] lg:mb-0" />
    <CardComponent />
  </div>
  <div
    class="h-[359px] w-[90%] bg-anthony-white m-auto flex flex-col place-items-center font-sans"
  >
    <h2
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl font-medium mt-[3%]"
    >
      Kariera u nas
    </h2>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: "CareerComponent",
  components: {
    CardComponent,
  },
};
</script>

<style scoped></style>
