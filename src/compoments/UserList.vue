<template>
    <b-jumbotron class="bg-white container-fluid" id="users" >
        <div class="container col-lg-8">          
          <div class="col-centered">
            <h3 class="title">Users</h3>  
 <table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Vorname</th>
      <th scope="col">Nachname</th>
      <th scope="col">is Active</th>
      <th scope="col">Time</th>
      <th scope="col">User Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in userList" :key="index">
    <td>{{user.first_name}}</td>
    <td>{{user.last_name}}</td>
    <td>{{user.isActive}}</td>
    <td>{{loginDates | changeDate}}</td>
    <td><button type="button" class="btn btn-light" @click="deleteUser(user._id)">Delete</button></td>
    <!-- <td><button type="button" class="btn btn-light" @click="areYouSure()">s</button></td> -->
    </tr>
  
  </tbody>
</table>
            </div>
        </div>
    </b-jumbotron>
</template>
  
<script>    
const moment = require('moment')
  export default {
    
    data() {
      return {
        userList: [],
      }
    },
    filters: {
      changeDate(){
        return moment().startOf('hour');
      }
    },
    methods: {
      deleteUser(id){
        this.$http.delete("http://localhost:3000/" +id)
        .then(res => {
          
 }).catch((error) => {
          console.log(error)
        })
      }
    },
    
    mounted () {
        this.$http.get("http://localhost:3000/")
        .then(res => {
          let data = res.data;
          for (let key in data) {
            this.userList.push(data[key])
          }
        }).catch((error) => {
          console.log(error)
        })
      }
     
      } 
  
</script>

<style>

</style>