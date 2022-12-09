<template>
  <body
    id="grad"
    class="xl:h-[4458px] 2xl:h-[5573px] lg:h-[3566px] md:h-[2853px] sm:h-[2282px] xs:h-[1825px] font-sans"
  >
    <section class="2xl:h-[1390px]">
      <nav class="flex flex-row">
        <div class="mt-[7%] ml-[5%]">
          <img src="@/assets/logo_white.svg" />
        </div>
        <div
          class="flex flex-row 2xl:text-2xl xl:text-xl text-anthony-white font-semibold gap-4 mt-[2%] 2xl:ml-[-8%] xl:ml-[-15%]"
        >
          <div>O NAS</div>
          <div>SLUZBY</div>
          <div>NAS TYM</div>
          <div>KARIERA</div>
          <div>KONTAKT</div>
        </div>
        <div class="flex flex-row mt-[2.5%] gap-4 ml-[8%]">
          <div>
            <img
              class="hover:cursor-pointer hover:border-2 hover:rounded-md"
              src="@/assets/flags/slovak.svg"
            />
          </div>
          <div>
            <img
              class="hover:cursor-pointer hover:border-2 hover:rounded-md"
              src="@/assets/flags/english.svg"
            />
          </div>
          <div class="hover:cursor-pointer">
            <img
              class="hover:cursor-pointer hover:border-2 hover:rounded-md"
              src="@/assets/flags/german.svg"
            />
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
        class="flex-col text-anthony-white 2xl:text-4xl xl:text-3xl font-bold font-sans ml-[9.5%] mt-[2%]"
      >
        <h1>Medzinarodna a</h1>
        <h1>vnutrostatna</h1>
        <h1>preprava</h1>
      </div>
      <div class="mt-[25%]">
        <img src="@/assets/objects/red_dash.svg" class="dash-center" />
      </div>
      <div
        class="flex flex-row class 2xl:text-xl xl:text-lg text-anthony-white justify-content-around mx-[12%] mt-[3%]"
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
      class="bg-anthony-white mt-[5%] h-[790px] flex flex-row justify-content-center pl-[5%]"
    >
      <div class="flex flex-col w-[35%] mt-[8%]">
        <h2 class="text-anthony-red 2xl:text-5xl xl:text-4xl">
          Ponukame prepravu
        </h2>
        <h2 class="text-anthony-red 2xl:text-5xl xl:text-4xl">
          do 20 krajin Europy
        </h2>
        <div class="bg-black h-[4px] w-[75%] 2xl:mt-[4%] xl:mt-[3%]"></div>
        <p class="mt-[10%] w-[75%] 2xl:text-xl xl:text-lg">
          Lorem ipsum dolor sit amet,
          <span class="text-anthony-red">consectetur</span> adipiscing elit.
          Aenean suscipit scelerisque tortor ornare finibus<br /><span
            class="2xl:text-2xl xl:text-xl"
          >
            Blalalla <span class="text-anthony-red">400</span> zakazok
          </span>
        </p>
        <p class="2xl:text-2xl xl:text-xl font-medium w-[80%]">
          Pellentesque vel
          <span class="text-anthony-red">mauris a elit sodales</span> convallis
          sit amet sit amet odio.
        </p>
      </div>
      <div class="flex flex-col">
        <div class="w-[100%]">
          <img class="w-[100%]" src="@/assets/europe.jpg" />
        </div>
        <div
          class="flex flex-row text-map-color 2xl:text-lg xl:text-md ml-[35%]"
        >
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
    <section class="bg-anthony-white-darker h-[1284px] flex flex-col px-[5%]">
      <div class="ml-[10%] mt-[5%] font-medium">
        <h2 class="2xl:text-5xl xl:text-4xl">
          Sme spolahliva firma s
          <span class="text-anthony-red">individualnym</span>
        </h2>
        <h2 class="text-5xl xl:text-4xl mt-[1%]">
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
        <h2
          class="text-anthony-red 2xl:text-5xl xl:text-4xl font-medium mt-[3%]"
        >
          Kariera u nas
        </h2>
      </div>
    </section>
    <section class="bg-anthony-white h-[969px] flex flex-col">
      <div
        class="w-full h-[10%] bg-anthony-red mt-[8%] flex place-items-center"
      >
        <h2 class="2xl:text-7xl xl:text-6xl text-anthony-white ml-[13%]">
          Vozovy park
        </h2>
      </div>
      <div
        class="h-[538px] w-[82.5%] mt-[8%] bg-anthony-white-darker mx-auto"
      ></div>
    </section>
    <section class="bg-anthony-white-darker h-[985px] flex flex-row">
      <div class="ml-[10%] mt-[10%] flex flex-col">
        <h3 class="2xl:text-[45px] xl:text-[38px] font-semibold">Kontakt</h3>
        <div class="flex flex-row gap-[15%] mt-[3%]">
          <div>
            <h5 class="2xl:text-[25px] xl:text-[22px] text-anthony-red">
              Kontaktna osoba
            </h5>
            <h6 class="2xl:text-[20px] xl:text-[16px] mt-[5%]">
              Mgr. Antónia Janiková
            </h6>
            <h6 class="2xl:text-[20px] xl:text-[16px] mt-[1%]">
              +421 905 885 694
            </h6>
          </div>
          <div>
            <h5 class="2xl:text-[25px] xl:text-[22px] text-anthony-red">
              Sidlo
            </h5>
            <h6 class="2xl:text-[20px] xl:text-[16px] mt-[1%]">
              Cukrovarská 32/2
            </h6>
            <h6 class="2xl:text-[20px] xl:text-[16px] mt-[1%]">
              075 01 Trebišov
            </h6>
          </div>
        </div>
        <GMapMap
          class="mt-[5%] 2xl:w-[600px] xl:w-[520px] 2xl:h-[400px] xl:h-[350px]"
          :center="center"
          :zoom="7"
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

      <div class="flex flex-col w-[40%] ml-[8%] mt-[15%]">
        <h4 class="2xl:text-[35px] xl:text-[30px] mb-[6%]">
          Formular <span class="text-anthony-red">nezavazneho dopytu</span>
        </h4>
        <div class="flex flex-row justify-between">
          <div class="flex flex-col w-[80%]" v-if="!clicked">
            <div class="mr-[10%]">
              <label for="lname" class="font-[600] mb-[1%]"
                >Meno a priezvisko</label
              >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Meno a priezvisko"
                v-model="name"
                class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[1.5%] pl-[10px]"
              />
            </div>
            <div class="flex flex-row mt-[2%] justify-content-between">
              <div class="w-[45%]">
                <label for="name" class="font-[600] mb-[1%]">Email</label>
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  class="block bg-white w-full shadow-sm focus:outline-none py-[2%] pl-[10px]"
                  :class="
                    !validEmail(email) && emailBlured
                      ? 'bg-warning bg-no-repeat bg-[] border-bln-error input'
                      : ''
                  "
                  v-model="email"
                  v-on:blur="emailBlured = true"
                />
                <div
                  v-if="!validEmail(email) && emailBlured"
                  class="text-bln-error"
                >
                  Nesprávny formát e-mailovej adresy
                </div>
              </div>
              <div class="w-[45%]">
                <label for="name" class="font-[600] mb-[1%]"
                  >Telefonne cislo</label
                >
                <input
                  required
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Telefonne cislo"
                  class="block bg-white w-full shadow-sm focus:outline-none py-[2%] pl-[10px]"
                  v-model="mobile"
                />
              </div>
            </div>
            <div class="flex flex-row mt-[2%] justify-content-between">
              <div class="w-[45%]">
                <label for="lname" class="font-[600] mb-[1%]"
                  >Mesto odvozu</label
                >
                <input
                  type="text"
                  id="cityDep"
                  name="cityDep"
                  placeholder="Mesto odvozu"
                  v-model="cityDep"
                  class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
                />
              </div>
              <div class="w-[45%]">
                <label for="lname" class="font-[600] mb-[1%]"
                  >Adresa odvozu</label
                >
                <input
                  type="text"
                  id="cityDep"
                  name="cityDep"
                  placeholder="Adresa odvozu"
                  v-model="cityDep"
                  class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
                />
              </div>
            </div>
            <div class="flex flex-row mt-[2%] justify-content-between">
              <div class="w-[45%]">
                <label for="lname" class="font-[600] mb-[1%]"
                  >Mesto privozu</label
                >
                <input
                  type="text"
                  id="cityAr"
                  name="cityAr"
                  placeholder="Mesto privozu"
                  v-model="cityAr"
                  class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
                />
              </div>
              <div class="w-[45%]">
                <label for="lname" class="font-[600] mb-[1%]"
                  >Adresa privozu</label
                >
                <input
                  type="text"
                  id="addArr"
                  name="addArr"
                  placeholder="Adresa privozu"
                  v-model="addArr"
                  class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
                />
              </div>
            </div>
            <label for="lname" class="font-[600] mt-[2%] mb-[1%]">Správa</label>
            <textarea
              type="text"
              id="lname"
              name="lastname"
              placeholder="Správa"
              v-model="message"
              class="block bg-white w-full shadow-sm focus:outline-none focus:ring-1 pl-[10px] pt-[1%] pb-[3%]"
            />
            <div class="mt-[2%]">
              <input
                type="checkbox"
                id="horns"
                name="horns"
                v-model="checkBox"
              />
              <label for="horns" class="mt-[2%]">&nbsp;Súhlasim so&nbsp;</label>
              <span class="underline hover:cursor-pointer text-anthony-red"
                >spracovaním osobných údajov</span
              >
            </div>
            <div class="w-[100%] mt-[5%]">
              <button
                @click="clicked = true"
                class=""
                :disabled="
                  !(
                    this.name.length > 0 &&
                    validEmail(this.email) &&
                    emailBlured &&
                    checkBox
                  )
                "
              >
                Odoslať
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-row justify-content-between h-[75px] bg-black">
      <h2
        class="text-anthony-white 2xl:text-3xl xl:text-2xl ml-[5%] footer-center"
      >
        © Anthony Transport 2022
      </h2>
      <div
        class="flex flex-row text-anthony-white underline mr-[2.5%] justify-content-between w-[40%] footer-center"
      >
        <h3 class="2xl:text-[20px] xl:text-[16px] footer-center">
          Prepravne podmienky
        </h3>
        <h3 class="2xl:text-[20px] xl:text-[16px] footer-center">
          Zmluvne podmienky
        </h3>
        <h3 class="2xl:text-[20px] xl:text-[16px] footer-center">
          Prepravny certifikat
        </h3>
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
  data: () => {
    return {
      email: "",
      emailBlured: false,
      valid: false,
      submitted: false,
      name: "",
      message: "",
      checkBox: false,
      clicked: false,
      mobile: "",
      cityDep: "",
      cityAr: "",
      addDep: "",
      addArr: "",
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
  methods: {
    validate: function () {
      this.emailBlured = true;
      if (this.validEmail(this.email)) {
        this.valid = true;
      }
    },
    validEmail: function (email) {
      const re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    submit: function () {
      this.validate();
      if (this.valid) {
        //THIS IS WHERE YOU SUBMIT DATA TO SERVER
        this.submitted = true;
      }
    }, //end submit
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
.footer-center {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
