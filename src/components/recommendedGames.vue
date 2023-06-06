<template>
  <div>
    <div class="border shadow rounded-3 p-3 m-3 row">
      <h2 class="col-8">Most Recommended</h2>
      <a href="" class="col-4 text-end"> See All > </a>
      <div class="row justify-content-center">
        <div
          class="card m-2 col-lg-2 text-center position-relative"
          v-for="game in fiveGames"
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
            4.8</span
          >
          <div class="card-body">
            <p class="card-text">
              {{ game.short_description.slice(0, 50) }}...
            </p>
          </div>
          <router-link :to="`/Games/${game.id}`" class="btn-purple"
            >MORE INFO</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, provide,inject } from "vue";
export default {
  name: "recomendedComp",
  setup() {
    let fiveGames = inject("fiveGames");   
    return { fiveGames };
  },
};
</script>

<style scoped></style>
