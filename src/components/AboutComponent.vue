<template>
  <div
    v-if="$route.path == '/SK'"
    class="xs:w-[100%] lg:w-[60%] mx-auto font-sans text-white flex flex-col gap-4"
  >
    <h1 class="text-center">Kto sme?</h1>
    <p>
      Sme slovenská dopravná spoločnosť a zaoberáme sa vnútroštátnou nákladnou
      cestnou dopravou a medzinárodnou cestnou nákladnou dopravou. Na trhu
      pôsobíme od decembra 2011. Naše sídlo sa nachádza na východnom Slovensku
      vmeste Trebišov. Hlavným zámerom ANTHONY TRANSPORT s.r.o je preprava
      komodít, krmovín a paletového tovaru. Sme držiteľom certifikátu GMP+B4.
    </p>
  </div>
  <div
    v-if="$route.path == '/EN'"
    class="xs:w-[100%] lg:w-[60%] mx-auto font-sans text-white flex flex-col gap-4"
  >
    <h1 class="text-center">About us</h1>
    <p>
      We are a Slovak transportation company that focuses on domestic and
      international road freight transport. We have been operating on the market
      since December 2011. Our headquarters are located in eastern Slovakia in
      the city of Trebišov. The main focus of ANTHONY TRANSPORT s.r.o. is
      transportation of commodities, fodder and palletized goods. We hold the
      GMP+B4 certificate.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped></style>
