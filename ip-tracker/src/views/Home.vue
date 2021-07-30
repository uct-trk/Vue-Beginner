<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!--Search / Result-->
    <div
      class=" z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <!--Search Input-->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIp"
            type="text"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            placeholder="Search for any IP address or leave empty to get tour ip info"
          />
          <i
          @click="getIpInfo"
            class="cursor-pointer bg-black text-white rounded-tr-md rounded-br-md flex items-center px-4 fas fa-chevron-right"
          ></i>
        </div>
      </div>
      <!--IP ınfo-->
      <IPInfo v-if="ipInfo" v-bind:ipInfo="ipInfo"/>
    </div>
    <!--Map-->
    <div id="mapid" class="h-full z-10"></div>
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    IPInfo,
  },
  setup() {
    let mymap;
    const queryIp = ref("");
    const ipInfo = ref(null);

    onMounted(() => {
      mymap = leaflet.map("mapid").setView([ 41.01384,  28.94966], 15);

      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWd1cmNhbjE2IiwiYSI6ImNrcnFzMXViMDA5djUydW1qOXhpa2Z4bnIifQ.d3ZasvJ1QMA9JG7AyuA8lQ",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoidWd1cmNhbjE2IiwiYSI6ImNrcnFzMXViMDA5djUydW1qOXhpa2Z4bnIifQ.d3ZasvJ1QMA9JG7AyuA8lQ",
          }
        )
        .addTo(mymap);
    });

    const getIpInfo = async () => {
      try {
        const data = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=at_bwmryJltqpYjk5FBvlAXAf9mPrX0g&ipAddress=${queryIp.value}`
        );
        const result = data.data;
        ipInfo.value = {
          address: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng
        }
        leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
        mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13);
        console.log(result)
      } catch (err) {
        alert(err.message);
      }
    };
    return {
      queryIp,
      ipInfo,
      getIpInfo
    };
  },
};
</script>
