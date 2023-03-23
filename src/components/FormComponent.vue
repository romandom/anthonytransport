<template>
  <form
    ref="form"
    class="flex flex-col lg:w-[80%] xs:w-full font-sans"
    v-if="!clicked"
  >
    <div
      class="xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 lg:mr-[10%] xs:w-full"
    >
      <label v-if="$route.path == '/SK'" for="lname" class="font-[600] mb-[1%]"
        >Meno a priezvisko</label
      >
      <label v-if="$route.path == '/EN'" for="lname" class="font-[600] mb-[1%]"
        >Name and surname</label
      >
      <input
        v-if="$route.path == '/SK'"
        type="text"
        id="name"
        name="name"
        placeholder="Meno a priezvisko"
        v-model="name"
        class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[1.5%] pl-[10px]"
      />
      <input
        v-if="$route.path == '/EN'"
        type="text"
        id="name"
        name="name"
        placeholder="Name and surname"
        v-model="name"
        class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[1.5%] pl-[10px]"
      />
    </div>
    <div class="flex xs:flex-col lg:flex-row mt-[2%] justify-content-between">
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 lg:mx-0 xs:w-full"
      >
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
          v-if="!validEmail(email) && emailBlured && $route.path == '/SK'"
          class="text-bln-error"
        >
          Nesprávny formát e-mailovej adresy
        </div>
        <div
          v-if="!validEmail(email) && emailBlured && $route.path == '/EN'"
          class="text-bln-error"
        >
          Wrong email format
        </div>
      </div>
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 lg:mx-0 xs:mt-[2%] lg:mt-0"
      >
        <label v-if="$route.path == '/SK'" for="name" class="font-[600] mb-[1%]"
          >Telefónne číslo</label
        >
        <label v-if="$route.path == '/EN'" for="name" class="font-[600] mb-[1%]"
          >Mobile number</label
        >
        <input
          v-if="$route.path == '/SK'"
          required
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Telefonne cislo"
          class="block bg-white w-full shadow-sm focus:outline-none py-[2%] pl-[10px]"
          v-model="mobile"
        />
        <input
          v-if="$route.path == '/EN'"
          required
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Mobile number"
          class="block bg-white w-full shadow-sm focus:outline-none py-[2%] pl-[10px]"
          v-model="mobile"
        />
      </div>
    </div>
    <div class="flex xs:flex-col lg:flex-row mt-[2%] justify-content-between">
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 lg:mx-0"
      >
        <label
          v-if="$route.path == '/SK'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Mesto odvozu</label
        >
        <label
          v-if="$route.path == '/EN'"
          for="lname"
          class="font-[600] mb-[1%]"
          >City of pickup</label
        >
        <input
          v-if="$route.path == '/SK'"
          type="text"
          id="cityDep"
          name="cityDep"
          placeholder="Mesto odvozu"
          v-model="cityDep"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
        <input
          v-if="$route.path == '/EN'"
          type="text"
          id="cityDep"
          name="cityDep"
          placeholder="City of pickup"
          v-model="cityDep"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
      </div>
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 xs:mt-[2%] lg:mt-0"
      >
        <label
          v-if="$route.path == '/SK'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Adresa odvozu</label
        >
        <label
          v-if="$route.path == '/EN'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Address of pickup</label
        >
        <input
          v-if="$route.path == '/SK'"
          type="text"
          id="cityDep"
          name="cityDep"
          placeholder="Adresa odvozu"
          v-model="addDep"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
        <input
          v-if="$route.path == '/EN'"
          type="text"
          id="cityDep"
          name="cityDep"
          placeholder="Address of pickup"
          v-model="addDep"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
      </div>
    </div>
    <div class="flex xs:flex-col lg:flex-row mt-[2%] justify-content-between">
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0"
      >
        <label
          v-if="$route.path == '/SK'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Mesto privozu</label
        >
        <label
          v-if="$route.path == '/EN'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Import city</label
        >
        <input
          v-if="$route.path == '/SK'"
          type="text"
          id="cityAr"
          name="cityAr"
          placeholder="Mesto privozu"
          v-model="cityAr"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
        <input
          v-if="$route.path == '/EN'"
          type="text"
          id="cityAr"
          name="cityAr"
          placeholder="Import city"
          v-model="cityAr"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
      </div>
      <div
        class="lg:w-[45%] xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0 xs:mt-[2%] lg:mt-0"
      >
        <label
          v-if="$route.path == '/SK'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Adresa privozu</label
        >
        <label
          v-if="$route.path == '/EN'"
          for="lname"
          class="font-[600] mb-[1%]"
          >Address of import</label
        >
        <input
          v-if="$route.path == '/SK'"
          type="text"
          id="addArr"
          name="addArr"
          placeholder="Adresa privozu"
          v-model="addArr"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
        <input
          v-if="$route.path == '/EN'"
          type="text"
          id="addArr"
          name="addArr"
          placeholder="Address of import"
          v-model="addArr"
          class="block bg-white w-full border-[1.5px] shadow-sm focus:outline-none focus:ring-1 py-[2%] pl-[10px]"
        />
      </div>
    </div>
    <div class="xs:px-[5%] xsm:px-[10%] sm:px-[20%] md:px-[25%] lg:px-0">
      <label
        v-if="$route.path == '/SK'"
        for="lname"
        class="font-[600] mt-[2%] mb-[1%]"
        >Správa</label
      >
      <label
        v-if="$route.path == '/EN'"
        for="lname"
        class="font-[600] mt-[2%] mb-[1%]"
        >Text</label
      >
      <textarea
        v-if="$route.path == '/SK'"
        type="text"
        id="lname"
        name="lastname"
        placeholder="Správa"
        v-model="message"
        class="block bg-white w-full shadow-sm focus:outline-none focus:ring-1 pl-[10px] pt-[1%] pb-[3%]"
      />
      <textarea
        v-if="$route.path == '/EN'"
        type="text"
        id="lname"
        name="lastname"
        placeholder="Text"
        v-model="message"
        class="block bg-white w-full shadow-sm focus:outline-none focus:ring-1 pl-[10px] pt-[1%] pb-[3%]"
      />
    </div>
    <div class="mt-[2%]">
      <input type="checkbox" id="horns" name="horns" v-model="checkBox" />
      <label v-if="$route.path == '/SK'" for="horns" class="mt-[2%]">
        &nbsp;Súhlasim so&nbsp;
      </label>
      <span
        v-if="$route.path == '/SK'"
        class="underline hover:cursor-pointer text-anthony-red"
        >spracovaním osobných údajov</span
      >
      <label v-if="$route.path == '/EN'" for="horns" class="mt-[2%]">
        &nbsp;I agree to&nbsp;
      </label>
      <span
        v-if="$route.path == '/EN'"
        class="underline hover:cursor-pointer text-anthony-red"
        >the processing of personal data</span
      >
    </div>
    <div class="w-[100%] mt-[5%]">
      <button
        v-if="$route.path == '/SK'"
        @click="sendEmail()"
        class="button"
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
      <button
        v-if="$route.path == '/EN'"
        @click="sendEmail()"
        class="button"
        :disabled="
          !(
            this.name.length > 0 &&
            validEmail(this.email) &&
            emailBlured &&
            checkBox
          )
        "
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "App",
  components: {},
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
    };
  },
  methods: {
    sendEmail: function () {
      emailjs
        .sendForm(
          "service_d0idala",
          "template_w23atba",
          this.$refs.form,
          "dEMCB0smYDXE9HT-6"
        )
        .then(
          (result) => {
            this.$forceUpdate();
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
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

<style scoped>
.button {
  background-color: white;
  color: black;
  padding: 3px 20px;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
