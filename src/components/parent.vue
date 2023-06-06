<template>
  <div>
    <HeaderComp></HeaderComp>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeComp from "./Home.vue";
import DetailsComp from "./details.vue";
import LoginComp from "./login.vue";
import HeaderComp from "./header.vue";
import axios from "axios";
import { reactive, ref, provide } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "parentComp",
  components: {
    HomeComp,
    DetailsComp,
    LoginComp,
    HeaderComp,
  },
  setup() {
    var secfiveGames = ref([]);
    var fiveGames = ref([]);
    var allGenres = ref([]);
    // let isloggin=false;

    axios.get("http://localhost:5580/Games").then(async(res) => {
      allGenres.value = await res.data.map(obj => obj.genre);
      console.log(allGenres.value.length);
      fiveGames.value = res.data.splice(0, 5);
      secfiveGames.value = res.data.splice(6, 5);
          });

    provide("fiveGames", fiveGames);
    provide("secfiveGames", secfiveGames);
    provide("secfiveGames", secfiveGames);
    provide("allGenres", allGenres);
    // provide("isloggin", isloggin);
    return {
      fiveGames,
      secfiveGames,
      allGenres,
      // isloggin
    };
  },
};
</script>

<style scoped></style>
