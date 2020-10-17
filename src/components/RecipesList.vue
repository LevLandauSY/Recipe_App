<template>
    <div>
        <b-container align-v="center">
  <b-row>
     <b-card-group deck>
  <recipe-card v-for="recipe in recipes" v-bind:key="recipe.id"
  v-bind:recipe="recipe" ></recipe-card>
   </b-card-group>
  </b-row>
</b-container>
    </div>

</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
import {mapGetters} from "vuex";
export default {
    components: {
    "recipe-card":RecipeCard
},
computed:{
  ...mapGetters(["recipes"])
},

}
</script>

<style scoped>

</style>