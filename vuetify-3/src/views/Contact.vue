<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img14.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Contact Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="100"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            :counter="200"
            label="Message"
            required
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            SUBMIT
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            RESET
          </v-btn>
        </v-form>
      </v-container>
    </div>
    <div class="googlemap mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12035.770768457445!2d28.98569147933286!3d41.04838230123749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab708f402e7ab%3A0x81f56e7dbf2437c2!2zTmnFn2FudGHFn8SxLCBUZcWfdmlraXllLCDFnmnFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1626991147751!5m2!1str!2str"
        width="100%"
        height="450"
      ></iframe>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 100) || "Name must be less than 100 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) =>
        (v && v.length <= 200) || "Message must be less than 200 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
