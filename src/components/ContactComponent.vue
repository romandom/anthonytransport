<template>
  <div class="ml-[10%] mt-[10%] flex flex-col font-sans">
    <h3 class="2xl:text-[45px] xl:text-[38px] lg:text-[32px] font-semibold">
      Kontakt
    </h3>
    <div class="flex flex-row gap-[15%] mt-[3%]">
      <div>
        <h5
          class="2xl:text-[25px] xl:text-[22px] lg:text-[22px] text-anthony-red"
        >
          Kontaktna osoba
        </h5>
        <h6 class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] mt-[5%]">
          Mgr. Antónia Janiková
        </h6>
        <h6 class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] mt-[1%]">
          +421 905 885 694
        </h6>
      </div>
      <div>
        <h5
          class="2xl:text-[25px] xl:text-[22px] lg:text-[22px] text-anthony-red"
        >
          Sidlo
        </h5>
        <h6 class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] mt-[1%]">
          Cukrovarská 32/2
        </h6>
        <h6 class="2xl:text-[20px] xl:text-[16px] lg:text-[16px] mt-[1%]">
          075 01 Trebišov
        </h6>
      </div>
    </div>
    <GMapMap
      class="mt-[5%] 2xl:w-[600px] xl:w-[520px] lg:w-[416px] 2xl:h-[400px] xl:h-[350px] lg:h-[280px]"
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
