<template>
    <b-jumbotron class="bg-white container-fluid" id="users" >
        <div class="container col-lg-5">
          <h3 class="title">Users</h3>
            <div class="col-centered">
 <table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in userList" :key="user">
    <td>{{user.first_name}}</td>
    <td>{{user.last_name}}</td>
    <td><button type="button" class="btn btn-light" @click="deleteUser()">Delete</button></td>
    </tr>
  
  </tbody>
</table>
            </div>
        </div>
    </b-jumbotron>
</template>
  
<script>    

  export default {

    data() {

      return {
        userList: [],


      }

    },
    methods: {
      deleteUser(){
        alert();
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