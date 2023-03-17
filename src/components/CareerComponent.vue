<template>
  <div class="lg:hidden text-center font-sans mt-[10%]">
    <h2 class="xs:text-[24px] sm:text-[40px] font-semibold font-sans">
      Sme spoľahlivá firma s
    </h2>
    <h2
      class="xs:text-[24px] sm:text-[40px] font-semibold font-sans text-anthony-red"
    >
      individuálnym prístupom
    </h2>
    <h2 class="xs:text-[24px] sm:text-[40px] font-semibold font-sans">
      pre každého zákazníka
    </h2>
  </div>
  <div class="xs:hidden lg:block ml-[10%] mt-[5%] font-medium font-sans">
    <h2 class="2xl:text-5xl xl:text-4xl lg:text-3xl">
      Sme spoľahlivá firma s
      <span class="text-anthony-red">individuálnym</span>
    </h2>
    <h2 class="text-5xl xl:text-4xl lg:text-3xl mt-[1%]">
      <span class="text-anthony-red">prístupom</span> pre každého zákazníka
    </h2>
  </div>
  <div
    class="flex xs:flex-col lg:flex-row justify-content-evenly mt-[7%] xs:mx-[5%] xsm:mx-[10%] sm:mx-[15%] md:mx-[20%] lg:mx-0 font-sans"
  >
    <CardComponent class="xs:mb-[20%] lg:mb-0" />
    <CardComponent />
  </div>
  <div
    class="h-[359px] w-[90%] bg-anthony-white m-auto flex flex-col place-items-center font-sans"
  >
    <h2
      class="text-anthony-red 2xl:text-5xl xl:text-4xl lg:text-3xl font-medium mt-[5%]"
    >
      Kariéra u nás
    </h2>
    <p class="mx-[10%] font-sans lg:text-[18px] font-medium mt-[2%]">
      V ANTHONY TRANSPORT s.r.o hľadáme
      <span class="text-anthony-red">nových kolegov</span>, ktorým vieme
      ponúknuť prácu v priateľskom kolektíve a neformálnej atmosfére, možnosť
      pracovať od pondelka do piatku a víkendy doma. V prípade Vášho záujmu nás
      kontaktujte a radi Vám zodpovieme všetky Vaše otázky.
    </p>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: "CareerComponent",
  components: {
    CardComponent,
  },
  data: () => {
    return {
      team: [
        {
          name: "Mgr. Antónia Janiková",
          position: "Pani sefova hej",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
