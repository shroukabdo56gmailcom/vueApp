<template>
  <div class="container">
    <div class="border rounded-3 d-flex justify-content-between m-3 header">
      <img :src="fiveGames[0]?.thumbnail" class="w-75" alt="" srcset="" />
      <div class="me-auto ps-4 pt-3">
        <h3>{{ fiveGames[0]?.title }}</h3>
        <h6>{{ fiveGames[0]?.genre }}</h6>
        <h6>{{ fiveGames[0]?.short_description }}</h6>
        <p class="pb-2">300k downloads!</p>
        <router-link :to="`/Games/${fiveGames[0]?.id}`" class="btn-purple m-0">
          MORE INFO
        </router-link>
      </div>
    </div>
    <recomendedComp></recomendedComp>
    <div class="border shadow rounded-3 p-3 m-3 row">
      <h2 class="col-8">Most Popular</h2>
      <a href="" class="col-4 text-end"> See All > </a>
      <div class="row justify-content-center">
        <div
          class="card m-2 col-lg-2 text-center position-relative"
          v-for="game in secfiveGames"
          :key="game.id"
        >
          <img
            :src="game.thumbnail"
            class="img-fluid rounded-3 h-10"
            alt="..."
          />
          <span class="position-absolute rating rounded-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="#572589"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            4.9</span
          >
          <div class="card-body">
            <p class="card-text">
              {{ game.short_description.slice(0, 80) }}...
            </p>
          </div>
          <router-link :to="`/Games/${game.id}`" class="btn-purple">
            MORE INFO
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recomendedComp from "./recommendedGames.vue";
import {  ref, toRefs,inject } from "vue";
export default {
  name: "HomeComp",
  components: {
    recomendedComp,
  },
  setup(){
    let fiveGames = inject("fiveGames");
    let secfiveGames = inject("secfiveGames");
    return{
      fiveGames,
      secfiveGames
    }
  }
};
</script>

<style scoped>
.header {
  height: 250px;
  overflow: hidden;
}

</style>
