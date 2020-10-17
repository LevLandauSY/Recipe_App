<template>
        <b-container >
         
			<h2>Shopping List</h2>
      <b-row>
        <b-col>
        <b-button v-b-modal.modal-prevent-closing>
          
        <b-icon icon="pencil-square" aria-hidden="true"></b-icon> 

          Add Ingredient </b-button>
      <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Enter Ingredient Name and Quantity"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
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
      </form>
    </b-modal>
        </b-col>
      </b-row>
  <b-row align-h="center" class="mt-5">
      <b-col>

			<div v-if="shoppingList.length===0" class="empty-cart">
				No items in the cart.
			</div>
      <div v-else>
        <b-list-group>
				<b-list-group-item v-for="item in shoppingList" :key="item.name" class="cart-item">
					<div>
            <p>{{item.name}} {{item.quantity}}</p>
          <div class="btn-group">
           <b-button variant="primary" v-on:click="inc(item)">+</b-button>                            
					<b-button variant="danger" v-on:click="dec(item)" >-</b-button>
          </div>
          </div>
				</b-list-group-item>
      </b-list-group>	
        </div> 

 </b-col>
</b-row>
        </b-container>
    
</template>
<script>
import {mapGetters} from "vuex";

export default {
    computed:{
  ...mapGetters(["shoppingList"])
},
 data() {
      return {
        name: '',
        quantity:1,
        nameState: null,
        quantityState:null,
      }
      },
methods:{
        inc:function(item){
          this.$store.commit("INCREMENT_INGREDIENT",item);
        },
        dec:function(item){
      this.$store.commit("DECREMENT_INGREDIENT",item);
        },

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
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
       this.shoppingList.push({"name":this.name,"quantity":this.quantity});
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
}
}
</script>

<style scoped>

</style>