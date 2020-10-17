<template>
 <div>
    
     <b-container>
    <b-row align-h="center" class="mt-5"> 
      <b-col cols="5">
        <b-card class="p-3">
          <h3 class="mb-4">Register</h3>
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
     
     
      
      

      <div class="d-flex justify-content-between">
        <div>
          <b-button type="submit" variant="primary">Register</b-button>&nbsp;
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
      
      users.push({"email":this.form.email,"password":this.form.password});
      
      console.log(users);
     localStorage.setItem('users', JSON.stringify(users));
      this.$router.push('/login');

    },

  }
}
</script>