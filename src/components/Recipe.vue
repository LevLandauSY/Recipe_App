<template>
    <div>
     <b-container >
             <b-row align-h="center" class="mt-5">
                 <b-col cols="5">
         
                <h1 class="text-info">{{recipe.name}} </h1>
                 </b-col>
             </b-row>

 <b-row align-h="center" class="mt-5">
                 <b-col cols="5">
                                     <b-img v-bind:src="recipe.imageURL" fluid alt="Responsive image" width="200px" height="200px"></b-img>
                 </b-col>
 </b-row>

  <b-row align-h="center" class="mt-5">
                 <b-col cols="5">
                <p class="text-info">description: {{recipe.description}} </p>
                 </b-col>
  </b-row>

 <b-row align-h="center" class="mt-5">
                 <b-col cols="5">
                    <b-table striped hover :items="recipe.ingredients"></b-table>
                 </b-col>
 </b-row>
    
  
        <div>
          <b-button  variant="danger"  @click="modalShow = !modalShow">
                  <b-icon icon="trash" aria-hidden="true"></b-icon> 
            Detete Recipe</b-button>
            <b-modal v-model="modalShow" @ok="deleteRecipe">Are you sure you want to delete this recipe!</b-modal>
          &nbsp;
           <b-button variant="info" v-bind:to="{name:'edit',params:{id:recipe.id}}">
             
             <b-icon icon="pencil" aria-hidden="true"></b-icon> 

             Edit</b-button>
           &nbsp;
          <b-button  v-bind:to="{name:'Home'}">
            <b-icon icon="back" aria-hidden="true"></b-icon> 

            Back to Home</b-button>
        </div>
        <br>
     </b-container>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
 data() {
      return {
        modalShow: false
      }
    },
computed:{
  ...mapGetters(["recipes"]),
        recipe(){
            let recipe=this.recipes.find(recipe=>recipe.id===this.$route.params.id);
            return recipe? recipe:null;
        }
    },
    methods:{
        deleteRecipe(){
              let recipe=this.recipes.find(recipe=>recipe.id===this.$route.params.id);
              this.$store.commit("deleteRecipe",recipe);
              console.log(this.$store.getters.recipes);
        this.$router.push('/home');
        }
    }
}
</script>
<style scoped>

</style>