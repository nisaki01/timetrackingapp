<template>
 <div>
    <!--Navigation-->
    <b-navbar class="bg-dark fixed-top" toggleable="md" type="dark" variant="info">
  
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
      <b-navbar-brand href=""></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
  
        <b-navbar-nav>
          <!-- <router-link tag="b-nav-item"><a><i class="fas fa-home"></i></a></router-link> -->
          <b-nav-item href="user-list"><i class="fas fa-home"></i></b-nav-item>
          <b-nav-item href="add-user"><i class="fas fa-user-plus"></i></b-nav-item>
          <b-nav-item href="show-user"><i class="fas fa-users"></i></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
    <register-form></register-form>
    <user-list></user-list>

            <b-button class="btn dark"> <i class="fas fa-sign-out-alt"></i> </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> 

  </div>
</template>
