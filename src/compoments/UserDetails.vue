<template>
    <b-jumbotron class="bg-white container-fluid" id="users" >
        <div class="container col-lg-8">          
          <div class="col-centered">
            <h3 class="title" v-for="(user, index) in userList" :key="index" >{{user.first_name}}</h3>  
 <table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Begin</th>
      <th scope="col">End</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in userList" :key="index">
    <td>{{user.loginDates.startTime | changeDate}}</td>
    <td>{{user.loginDates.endTime | changeDate}}</td>
    </tr>        
  </tbody>
</table>
            </div>
        </div>
    </b-jumbotron>
</template>
  
<script>
import { mapGetters } from "vuex";
const moment = require("moment");
export default {
  data() {
    return {
      userList: []
    };
  },
  filters: {
    changeDate() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    }
  },

  methods: {
    areYouSure(id) {
      swal({
        title: "Bist du sicher das du das tun möchtest?",
        text: "Gelöschte datei können nicht wiederherstellen",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete("http://localhost:3000/" + id)
            .then(res => {
              this.$router.push({ path: "/user-list" });
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
    deleteUser(id) {
      console.log(id);
      this.$http
        .delete("http://localhost:3000/" + id)
        .then(res => {})
        .catch(error => {
          console.log(error);
        });
    }
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