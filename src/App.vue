<template>
  <body id="grad" class="xl:h-[4644px] 2xl:h-[5573px] font-sans">
    <section>
      <nav class="flex flex-row">
        <div class="mt-[7%] ml-[5%]">
          <img src="@/assets/logo_white.svg" />
        </div>
        <div
          class="flex flex-row 2xl:text-2xl text-anthony-white font-semibold gap-4 mt-[2%] ml-[-8%]"
        >
          <div>O NAS</div>
          <div>SLUZBY</div>
          <div>NAS TYM</div>
          <div>KARIERA</div>
          <div>KONTAKT</div>
        </div>
        <div class="flex flex-row mt-[2.5%] gap-4 ml-[8%]">
          <div>
            <img src="@/assets/flags/slovak.svg" />
          </div>
          <div>
            <img src="@/assets/flags/english.svg" />
          </div>
          <div>
            <img src="@/assets/flags/german.svg" />
          </div>
        </div>
      </nav>
      <div class="flex flex-row ml-[9.5%] mt-[3%]">
        <div>
          <img src="@/assets/objects/dash.svg" />
        </div>
        <div class="mx-[2%]">
          <img src="@/assets/objects/dash.svg" />
        </div>
        <div>
          <img src="@/assets/objects/dash.svg" />
        </div>
      </div>
      <div
        class="flex-col text-anthony-white 2xl:text-4xl font-bold font-sans ml-[9.5%] mt-[2%]"
      >
        <h1>Medzinarodna a</h1>
        <h1>vnutrostatna</h1>
        <h1>preprava</h1>
      </div>
      <div class="mt-[35%]">
        <img src="@/assets/objects/red_dash.svg" class="dash-center" />
      </div>
      <div
        class="flex flex-row class text-xl text-anthony-white justify-content-around mx-[12%] mt-[3%]"
      >
        <div class="w-[35%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla finibus nibh diam, vel imperdiet magna pellentesque ut.
            Phasellus tristique, ligula at eleifend aliquam, diam ipsum rutrum
            massa
          </p>
        </div>
        <div class="w-[35%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla finibus nibh diam, vel imperdiet magna pellentesque ut.
            Phasellus tristique, ligula at eleifend aliquam, diam ipsum rutrum
            massa
          </p>
        </div>
      </div>
    </section>
    <section
      class="bg-anthony-white mt-[5%] h-[15%] flex flex-row justify-content-center pl-[5%]"
    >
      <div class="flex flex-col w-[35%] mt-[8%]">
        <h2 class="text-anthony-red text-5xl">Ponukame prepravu</h2>
        <h2 class="text-anthony-red text-5xl">do 20 krajin Europy</h2>
        <div class="bg-black h-[4px] w-[75%] mt-[4%]"></div>
        <p class="mt-[10%] w-[75%] text-xl">
          Lorem ipsum dolor sit amet,
          <span class="text-anthony-red">consectetur</span> adipiscing elit.
          Aenean suscipit scelerisque tortor ornare finibus<br /><span
            class="text-2xl"
          >
            Blalalla <span class="text-anthony-red">400</span> zakazok
          </span>
        </p>
        <p class="text-2xl font-medium w-[80%]">
          Pellentesque vel
          <span class="text-anthony-red">mauris a elit sodales</span> convallis
          sit amet sit amet odio.
        </p>
      </div>
      <div class="flex flex-col">
        <div>
          <img src="@/assets/europe.jpg" />
        </div>
        <div class="flex flex-row text-map-color 2xl:text-lg ml-[35%]">
          <p>Dolezite dokumenty a formular najdete nizsie</p>
          <div>
            <img
              src="@/assets/objects/arrow-down.png"
              class="w-[50%] mt-[5%]"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-anthony-white-darker h-[25%] flex flex-col px-[5%]">
      <div class="ml-[10%] mt-[5%] font-medium">
        <h2 class="text-5xl">
          Sme spolahliva firma s
          <span class="text-anthony-red">individualnym</span>
        </h2>
        <h2 class="text-5xl mt-[1%]">
          <span class="text-anthony-red">pristupom</span> pre kazdeho zakaznika.
        </h2>
      </div>
      <div class="flex flex-row justify-content-evenly mt-[7%]">
        <CardComponent />
        <CardComponent />
      </div>
      <div
        class="h-[359px] w-[90%] bg-anthony-white m-auto flex flex-col place-items-center"
      >
        <h2 class="text-anthony-red text-5xl font-medium mt-[3%]">
          Kariera u nas
        </h2>
      </div>
    </section>
    <section class="bg-anthony-white h-[20%] flex flex-col">
      <div
        class="w-full h-[10%] bg-anthony-red mt-[8%] flex place-items-center"
      >
        <h2 class="text-7xl text-anthony-white ml-[13%]">Vozovy park</h2>
      </div>
    </section>
  </body>
</template>

<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: "App",
  components: {
    CardComponent,
  },
};
</script>

<style>
#grad {
  background: linear-gradient(
      179.84deg,
      #b90000 0.66%,
      #630000 9.46%,
      #530404 12.67%,
      #050505 15.02%
    ),
    #ffffff;
}
.dash-center {
  margin-inline: auto;
}
</style>
