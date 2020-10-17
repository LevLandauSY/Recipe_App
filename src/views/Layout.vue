<template>
     <div class="home">
  <div id="nav">
    <top-header></top-header>
    </div>
    <br>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopHeader from "../views/TopHeader.vue"

export default {
    components:{
    "top-header":TopHeader
    }
}
</script>