<template>
<div>
    
     <b-container>
    <b-row align-h="center" class="mt-5"> 
      <b-col cols="5">
        <b-card class="p-3">
          <h3 class="mb-4">Login</h3>
          <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
          <div role="alert" class="alert alert-info" >
          <div class="alert-text">
            Use account <strong>admin@demo.com</strong> and password
            <strong>admin</strong> to continue.
          </div>
        </div>

       <div role="alert" class="alert alert-danger" v-if="invalidUser">
          <div class="alert-text">
           <strong> The login detail is incorrect </strong> 
            
          </div>
        </div>

      <div class="d-flex justify-content-between">
        <div>
          <b-button type="submit" variant="primary">Login</b-button>&nbsp;
           <b-button type="button" v-bind:to="{name:'register'}" variant="info">Register</b-button>&nbsp;
        </div>
      </div>
    </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
export default {
   data(){
   return {
     invalidUser:false,
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
    
    let users = JSON.parse(localStorage.getItem("users") || "[]");
  

    if(users.find(user=>user.email===this.form.email&&user.password===this.form.password)){
        this.invalidUser=false;
        localStorage.setItem('isAuthenticated',true);
        this.$router.push('/home');
     }
     else{
        this.invalidUser=true;
     }
    },
  }
}
</script>