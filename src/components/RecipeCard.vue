<template>
    <div>
          <b-col>
      <b-card 
      align="center"
      :title="recipe.name" 
    :img-src="recipe.imageURL" 
    img-alt="recipe-image" 
    img-top tag="article"
    img-width="200px"
    img-height="200px"
    class="mb-2">
        <b-card-text>{{recipe.description}}</b-card-text>
        <div class="btn-group">
        <b-button variant="success" v-b-tooltip.hover title="Add to List" v-on:click="addToShoppingList">
          
           <b-icon icon="cart-check" aria-hidden="true"></b-icon> 

          Add To Shopping</b-button>
         <b-button  v-bind:to="{name:'recipe',params:{id:recipe.id}}" variant="primary" v-b-tooltip.hover title="Details">
                      <b-icon icon="file-earmark-text-fill" aria-hidden="true"></b-icon> 

           Details</b-button>
       </div>
      </b-card>
    </b-col>
     </div>
</template>

<script>
//import {mapGetters} from "vuex";

export default {
  props:["recipe"],

    methods:{

      addToShoppingList(){

        const ingredients= this.recipe.ingredients;
       ingredients.forEach(element => {
         //  this.$store.dispatch("ADD_TO_SHOPPING_LIST",{"name":element.name,"quantity":element.quantity});
           this.$store.commit("ADD_TO_SHOPPING_LIST",{"name":element.name,"quantity":element.quantity});
        });
      }
    }
}
</script>

<style scoped>

</style>