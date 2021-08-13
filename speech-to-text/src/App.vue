<template>
  <div>
    <Header />
    <div class="app-container">
      <select v-model="selectedVoice">
        <option v-for="voice in voiceList" :key="voice.voiceURI">
          {{ voice.name }}
        </option>
      </select>
      <br />
      <div class="slidercontainer">
        <input
          ref="speed"
          v-model="speed"
          class="slider"
          type="range"
          min="0.5"
          max="3"
        />
        {{ speed }}
      </div>
      <span></span>
      <br />
      <textarea cols="30" rows="10" v-model="textToSpeech"></textarea>
      <div class="previewContainer">
        <span
          :ref="`spoken_word_${i}`"
          v-for="(word, i) in textToSpeech.split(' ')"
          :key="i"
        >
          {{ word }}
        </span>
      </div>
      <br />
      <button @click="speak" class="btn red" type="button">
        <span>Söyle Bakalım Şekerim!</span>
      </button>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  name: "App",
  components: { Header },
  mounted() {
    this.$refs.speed.step = 0.5;
    //console.log("this.$refs", this.$refs.speed);
  },
  created() {
    this.getVoices().then((voices) => {
      this.voiceList = voices;
      this.selectedVoice = "Microsoft Tolga - Turkish (Turkey)";
      //console.log(this.voiceList);
    });
  },
  data() {
    return {
      tts: window.speechSynthesis,
      voiceList: null,
      selectedVoice: null,
      textToSpeech: "Bir ihtimal daha var... O da ölmek mi dersin?",
      speed: 1,
    };
  },
  methods: {
    getVoices() {
      let intervalID;
      return new Promise((resolve) => {
        intervalID = setInterval(() => {
          if (this.tts.getVoices().length > 0) {
            resolve(this.tts.getVoices());
            clearInterval(intervalID);
          }
        }, 10);
      });
    },
    speak() {
      let toSpeak = new SpeechSynthesisUtterance(this.textToSpeech);
      toSpeak.voice =
        this.voiceList.find((v) => v.name == this.selectedVoice) || null;
      toSpeak.rate = this.speed;

      toSpeak.onboundary  = this.onBoundary;
      this.tts.speak(toSpeak);
    },
    onBoundary(event) {
      //console.log(event);
      const spokenWord = event.utterance.text.substr(
        event.charIndex,
        event.charLength
      );
      const wordIndex = this.textToSpeech
        .split(" ")
        .findIndex((w) => w == spokenWord);

      this.$refs[`spoken_word_${wordIndex}`].classList.add("spoken_word");
      //console.log("spoken", spokenWord, wordIndex);
      console.log(this.$refs);
    },
  },
};
</script>

<style></style>
