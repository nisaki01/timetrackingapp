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
            <b-alert show variant="success">{{login.time | changeDate }}</b-alert>
          <b-button  class="btn title" type="submit" variant="primary">Login</b-button>
        </b-form>
      </div>
    </div>
  
  </b-jumbotron>
</template>

<script>
const moment = require("moment");
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
        time: new Date()
      },
      show: true
    };
  },
  filters: {
    changeDate() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    },

    methods: {
      onSubmit() {
        if (!this.login.email || !this.login.password) {
          this.seen = true;
          this.alert = "Please fill in all required fields";
        } else {
          let editUser = {
            email: this.login.email,
            password: this.login.password,
            loginDates: {
              startTime: [this.login.time],
              endTime: [this.login.time]
            },
            isActive: this.login.isActive
          };

          this.$http
            .put("http://localhost:3000/", editUser)
            .then(res => {
              this.seen = true;
              this.alert = "User edited";
            })
            .catch(res => {
              console.error(error);
            });
        }
      }
    }
  }
};
</script>
