<template>
  <div id="app">
  <router-view default="{name: 'login'}"></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
  ...mapGetters(["recipes"])
},
beforecreated(){
this.loaduser();

},
mounted(){
this.fetchData();
},

methods:{
 async fetchData(){
  await this.$store.dispatch("fetchRecipes");
 //  console.log(this.$store.getters.recipes);
  },
  loaduser(){
    let users=[{"email":"admin@demo.com","password":"admin"}]
          localStorage.setItem('users', JSON.stringify(users));
         // localStorage.setItem('isAuthenticated',false);

  }
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
