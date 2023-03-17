<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col text-white ml-[13%] pt-[3%] xs:text-[20px] font-sans font-medium"
    >
      <p class="hover:cursor-pointer">O NÁS</p>
      <p class="hover:cursor-pointer">SLUŽBY</p>
      <p class="hover:cursor-pointer">NÁŠ TÝM</p>
      <p class="hover:cursor-pointer">GARÁŽ</p>
      <p class="hover:cursor-pointer">KONTAKT</p>
    </div>
    <div
      class="flex flex-row justify-content-center gap-[10%] w-full mt-[3%] mb-[5%]"
    >
      <div>
        <img class="hover:cursor-pointer" src="@/assets/flags/slovak.svg" />
      </div>
      <div>
        <img class="hover:cursor-pointer" src="@/assets/flags/english.svg" />
      </div>
      <div class="hover:cursor-pointer">
        <img class="hover:cursor-pointer" src="@/assets/flags/german.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileMenu",
};
</script>

<style scoped></style>
