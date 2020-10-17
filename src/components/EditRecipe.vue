<template>

<b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p-3">

 <h3 class="mb-4">Edit Recipe</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label=" Recipe Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="recipe.name"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>

    <b-form-group
        id="input-group-2"
        label="description:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="recipe.description"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label=" Image Url:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="recipe.imageURL"
          required
          placeholder="Enter Image Url"
        ></b-form-input>
      </b-form-group>


<b-button v-b-modal.modal-prevent-closing>Ingredient </b-button>
          <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Enter Ingredient Name and Quantity"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form  ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
         <b-form-group
          :state="quantityState"
          label="Quantity"
          label-for="Quantity"
          invalid-feedback="Quantity is required"
        >
          <b-form-input
            id="qantity-input"
            v-model="quantity"
            :state="quantityState"
            required
          ></b-form-input>
        </b-form-group>
        <b-button @click.stop.prevent="addIngredient" >Add</b-button>


 <b-list-group>
				<b-list-group-item v-for="item in recipe.ingredients" :key="item.name">
					<div>
            {{item.name}} {{item.quantity}}
           <b-button variant="primary" @click.stop.prevent="inc(item)">+</b-button>                            
					<b-button variant="danger" @click.stop.prevent="dec(item)" >-</b-button>
          </div>
				</b-list-group-item>
      </b-list-group>	



      </form>
    </b-modal>



&nbsp;


      <b-button type="submit" variant="primary">Submit</b-button>
   </b-form>

        </b-card>
      </b-col>
    </b-row>
</b-container> 
</template>

<script>
import {mapGetters} from "vuex";

export default {
       data() {
      return {
     
     show: true,
      name: '',
        quantity:1,
        nameState: null,
        quantityState:null
      }
    },

    computed:{
  ...mapGetters(["recipes"]),
    recipe(){
            let recipe=this.recipes.find(recipe=>recipe.id===this.$route.params.id);
           return recipe? recipe:null;
        }
    },
     methods: {
      onSubmit(evt) {
        evt.preventDefault()
       this.$store.commit("updateRecipe",this.recipe);

      this.$router.push('/home');
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.recipe.name = ''
        this.recipe.description = ''
        this.recipe.imageURL =''
        this.recipe.ingredients = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

///

  inc(item){
        item.quantity++;
        },

    dec(item){
        item.quantity--;
	if(item.quantity <= 0){
		var i=this.recipe.ingredients.indexOf(item);
		this.recipe.ingredients.splice(i,1);
    }
    },


///
  checkFormValidity() {
        const valid = this.$refs.form.checkValidity()

      if(!this.name){this.nameState = valid}
        if(!this.quantity){this.quantityState = valid}
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
addIngredient(){
  if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
       this.recipe.ingredients.push({"name":this.name,"quantity":this.quantity});
        // Hide the modal manually
},



      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
 
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }

    }
}
</script>

<style scoped>

</style>