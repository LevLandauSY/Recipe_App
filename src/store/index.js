import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes:[],
    shoppingList:[]
  },
  mutations: {
    SET_RECIPES(state,recipes){
      state.recipes=recipes;
    },
    ADD_TO_SHOPPING_LIST(state,ingredient){

      if(state.shoppingList.findIndex(k=>k.name===ingredient.name)!=-1){
        var i=state.shoppingList.findIndex(k=>k.name===ingredient.name);
        state.shoppingList[i].quantity++;
      }
      else{
      state.shoppingList.push(ingredient);
      }
    },
    
    INCREMENT_INGREDIENT(state,ingredient){
      var i=state.shoppingList.indexOf(ingredient);
      state.shoppingList[i].quantity++;
    },
    DECREMENT_INGREDIENT(state,ingredient){
      var i=state.shoppingList.indexOf(ingredient);
      state.shoppingList[i].quantity--;   
      if(ingredient.quantity <= 0){
        state.shoppingList.splice(i,1);}
        
    },
    deleteRecipe(state,recipe){
      var i=state.recipes.indexOf(recipe);
    state.recipes.splice(i,1);
    },
    updateRecipe(state,recipe){
      Object.assign(state.recipes[recipe.id-1], recipe);
     }
    
  },
  getters:{
    recipes(state){
      return state.recipes;
    },
    shoppingList(state){
      return state.shoppingList;
    }
  },
  actions: {
    async fetchRecipes({commit}){
      const res= await fetch("Recipes.json");
      const val=await res.json();
      commit("SET_RECIPES",val);
    },

  },

  modules: {
  }
})
