<template>
  <div class="home">
  
    <b-container>
      <b-row>
        <b-col md=8>
            <recipes-list></recipes-list>
        </b-col>
              <b-col md=4>
  <shopping-list></shopping-list>
        </b-col>    
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import RecipesList from "../components/RecipesList.vue";
import ShoppingList from "../components/ShoppingList.vue";

export default {
  name: 'Home',
  components: {
    "recipes-list":RecipesList,
    "shopping-list":ShoppingList
},
}
</script>
