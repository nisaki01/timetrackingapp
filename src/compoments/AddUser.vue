<template>
  <b-jumbotron>
   
    <div class="container col-lg-5 mt-5">
        <h3 class="title">Add User</h3>
      <div class="col-centered">
        
        <b-form v-if="show" @submit.prevent="onSubmit">

          <b-form-group id="email" label="Email adresse:" label-for="email">
            <b-form-input id="email" type="email" v-model="adduser.email"  placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="first_name" label="Vorname:" label-for="first_name">
            <b-form-input id="first_name" type="text" v-model="adduser.first_name"  placeholder="Vorname">
            </b-form-input>
          </b-form-group>
  
          <b-form-group id="last_name" label="Nachname:" label-for="last_name">
            <b-form-input id="last_name" type="text" v-model="adduser.last_name"  placeholder="Nachname">
            </b-form-input>
          </b-form-group>
  
          <b-form-group id="password" label="Passwort:" label-for="password">
            <b-form-input  id="password" type="password" v-model="adduser.password" placeholder="Password">
            </b-form-input>
          </b-form-group>
             
             

          <b-alert show v-if="seen" variant="success">{{alert}}</b-alert>

          <b-alert show variant="success">{{adduser.startTime | changeDate}}</b-alert>
     
          <b-button class="btn title" type="submit" variant="primary">Add</b-button>
         
       
        </b-form>
      </div>
  
    </div>

  </b-jumbotron>
</template>

<script>
const moment = require('moment')
  export default {
    data() {
      return {
    adduser: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        time: new Date().getTime(),
        isActive: false
          
        },
        show: true,
        alert: '',
        seen: false,
        
      }
    },

    filters: {
      changeDate(){
        return moment().format('MMMM Do YYYY, h:mm:ss a')
      }
    },

    methods: {
          onSubmit(){

      if(!this.adduser.first_name || !this.adduser.last_name || !this.adduser.email || !this.adduser.password  ){
      this.seen = true  
      this.alert = 'Please fill in all required fields';
      }
      else {
        var gthis = this;
      let newUser = {
      first_name: this.adduser.first_name,
      last_name: this.adduser.last_name,
      email: this.adduser.email,
      password: this.adduser.password,
      loginDates:{
        startTime : [gthis.time]
      },
      isActive: gthis.adduser.isActive,
      }

      this.$http.post("http://localhost:3000/", newUser)
      .then(res => {
      this.seen = true;
      this.alert = 'User Added'
      }) .catch (res => {
        console.log(res)
        this.seen = true;
        this.alert = 'Error'
      })
      
      }
      }
      }
    }

</script>
