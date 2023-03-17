<template>
  <div class="lg:ml-[10%] mt-[10%] flex flex-col font-sans">
    <h3
      class="2xl:text-[45px] xl:text-[38px] lg:text-[32px] xs:text-[32px] font-semibold xs:mx-auto lg:mx-0"
    >
      Kontakt
    </h3>
    <div
      class="flex lg:flex-row xs:flex-col lg:gap-[15%] lg:mt-[3%] xs:text-center lg:text-start"
    >
      <div>
        <h5
          class="2xl:text-[25px] xl:text-[22px] lg:text-[22px] xs:text-[22px] xs:mt-[2%] lg:mt-0 text-anthony-red"
        >
          Kontaktná osoba
        </h5>
        <h6
          class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] xs:text-[16px] lg:mt-[5%]"
        >
          Mgr. Antónia Janiková
        </h6>
        <h6
          class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] xs:text-[16px] mt-[1%]"
        >
          +421 905 885 694
        </h6>
      </div>
      <div>
        <h5
          class="2xl:text-[25px] xl:text-[22px] lg:text-[22px] xs:text-[22px] xs:mt-[2%] lg:mt-0 text-anthony-red"
        >
          Sidlo
        </h5>
        <h6
          class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] xs:text-[16px] mt-[1%]"
        >
          Cukrovarská 32/2
        </h6>
        <h6
          class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] xs:text-[16px] mt-[1%]"
        >
          075 01 Trebišov
        </h6>
      </div>
    </div>
    <GMapMap
      class="mt-[5%] 2xl:w-[600px] xl:w-[520px] lg:w-[416px] 2xl:h-[400px] xl:h-[350px] lg:h-[280px] xs:h-[200px] sm:h-[350px] sm:mx-[5%] lg:mx-0"
      :center="center"
      :zoom="15"
      map-type-id="terrain"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data: () => {
    return {
      center: { lat: 48.63717, lng: 21.7173 },
      markers: [
        {
          position: {
            lat: 48.63717,
            lng: 21.7173,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>

<style scoped></style>
