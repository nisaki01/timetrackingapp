<template>
  <b-jumbotron>
   
    <div class="container col-lg-5 ">
        <h3 class="title">Login</h3>
      <div class="col-centered">
        
        <b-form v-if="show" @submit.prevent="onSubmit">

          <b-form-group id="email" label="Email adresse:" label-for="email">
            <b-form-input id="email" type="email" v-model="login.email"  placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="password" label="Passwort:" label-for="password">
            <b-form-input  id="password" type="password" v-model="login.password" placeholder="Password">
            </b-form-input>
          </b-form-group>
            <b-alert show variant="success">{{login.startTime}}</b-alert>
          <b-button  class="btn title" type="submit" variant="primary">Login</b-button>
        </b-form>
      </div>
  
    </div>
  
  </b-jumbotron>
</template>

<script>

  export default {
    data() {
      return {
        login: {
          email: '',
          password: '',
          startTime: new Date()
        },
        show: true
      }
    },

    computed: {

    },
    methods: {

    onSubmit(){

        if(!this.login.email || !this.login.password ){
        this.seen = true  
        this.alert = 'Please fill in all required fields';
        }
        else {
          
        let editUser = {
        email: this.login.email,     
        password: this.login.password,
        startTime: this.login.startTime,
        }

        this.$http.put("http://localhost:3000/", editUser )
        .then((res) => {
        this.seen = true; 
        this.alert = 'User edited'
        }) .catch (res => {
          console.error(error);
          
        })
        
        }
        }

        }
    
      }

</script>
