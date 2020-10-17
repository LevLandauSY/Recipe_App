<template>
    <div>
      
  <b-navbar toggleable="lg" type="dark" variant="info"  fixed="top">
    <b-navbar-brand href="">Recipes App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/create">Create</b-nav-item>
      </b-navbar-nav>

  
     
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button variant="primary outline-info" class="mb-2" v-on:click="logout" right>
      <b-icon icon="power" aria-hidden="true"></b-icon> Logout
    </b-button>
        </b-nav-form>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
</template>

<script>


export default {
 methods:{
   logout(){
     localStorage.setItem('isAuthenticated',false);

           this.$router.push('/');
   }
 }
}
</script>
<style lang="scss" scoped>
#nav a.router-link-exact-active{
    color:white
}
</style>