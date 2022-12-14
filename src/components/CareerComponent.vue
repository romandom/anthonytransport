<template>
  <div class="ml-[10%] mt-[5%] font-medium font-sans">
    <h2 class="2xl:text-5xl xl:text-4xl">
      Sme spolahliva firma s
      <span class="text-anthony-red">individualnym</span>
    </h2>
    <h2 class="text-5xl xl:text-4xl mt-[1%]">
      <span class="text-anthony-red">pristupom</span> pre kazdeho zakaznika.
    </h2>
  </div>
  <div class="flex flex-row justify-content-evenly mt-[7%] font-sans">
    <CardComponent />
    <CardComponent />
  </div>
  <div
    class="h-[359px] w-[90%] bg-anthony-white m-auto flex flex-col place-items-center font-sans"
  >
    <h2 class="text-anthony-red 2xl:text-5xl xl:text-4xl font-medium mt-[3%]">
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
