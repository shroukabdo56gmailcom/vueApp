<template>
  <div class="container">
    <div class="text-center">
      <img
        :src="game.data?.thumbnail"
        alt=""
        class="rounded-3 my-3 w-50"
        srcset=""
      />
    </div>

    <div class="shadow p-3 m-3">
      <div>
        <h4>{{ game.data?.title }}</h4>
        <p>{{ game.data?.genre }}</p>
        <p>300k dowmloads!</p>
        <p>{{ game.data?.short_description }}</p>
        <p>{{ game.data?.publisher }}</p>
        <button class="btn-purple m-0">Read more</button>
      </div>
    </div>
    <recomendedComp></recomendedComp>
  </div>
</template>

<script>
import { reactive, ref, toRefs, inject } from "vue";
import recomendedComp from "./recommendedGames.vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "DetailsComp",
  components: {
    recomendedComp,
  },
  setup() {
    let game = reactive({});
    let gameId = useRoute().params["id"];

    let getGame = () => {
      axios.get(`http://localhost:5580/Games/${gameId}`).then((res) => {
        game.data = res.data;
        console.log(game.data);
      });
    };
    getGame();
    return {
      game,
      getGame,
    };
  },
};
</script>

<style scoped></style>
