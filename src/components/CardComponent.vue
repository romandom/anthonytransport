<template>
  <!--<div class="w-[424px] h-[434px] bg-anthony-white shadow"></div>-->
  <div class="w-[499px] h-[511px] bg-anthony-white shadow font-sans">
    <img class="mt-[6%] mx-auto" :src="require('@/assets/photo.svg')" />
    <h3 class="text-anthony-red font-semibold mt-[3%] ml-[5%]">Jozko</h3>
    <h3 class="text-anthony-black font-semibold mt-[-1%] ml-[5%]">vodic</h3>
  </div>
</template>

<script>
export default {
  props: ["name", "position", "photo"],
};
</script>

<style scoped>
.shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
