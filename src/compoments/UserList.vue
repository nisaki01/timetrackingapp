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
      <th scope="col">Begin Zeit</th>
      <th scope="col">User Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in userList" :key="index">
    <td>{{user.first_name}}</td>
    <td>{{user.last_name}}</td>
    <td>{{user.isActive}}</td>
    <td>{{user.loginDates.startTime | changeDate}}</td>
   
    <!-- <td><button type="button" class="btn btn-light" @click="deleteUser(user._id)">Delete</button></td> -->
    <td><button type="button" class="btn btn-light" @click="areYouSure(user._id)">Löschen</button></td>
    <td><router-link v-bind:to="'/user-details/'" ><button type="button" class="btn btn-light" 
    @click="returnID(user._id)">Mehr</button></router-link></td>
    </tr>        
  </tbody>
</table>
            </div>
        </div>
    </b-jumbotron>
</template>
  
<script>
const moment = require("moment");
export default {
  data() {
    return {
      userList: [],
    };
  },
  filters: {
    changeDate() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  methods: {
    returnID(id){
    this.$store.commit("changeUserID", id )
    },

    areYouSure(id) {
      swal({
        title: "Bist du sicher das du das tun möchtest?",
        text:"Gelöschte datei können nicht wiederherstellen",
        icon: "warning",
        buttons: true,
        dangerMode: true
        
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete("http://localhost:3000/" + id)
            .then(res => {

            setTimeout(() => {
              this.$router.push(location.reload());
            }, 2000);

            })
            .catch(error => {
              console.log(error);
            });
          swal("Datei wurde gelöscht", {
            icon: "success"
          });
        } else {

        }
      });
    },
  },

  mounted() {
    this.$http
      .get("http://localhost:3000/")
      .then(res => {
        let data = res.data;
        for (let key in data) {
          this.userList.push(data[key]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>