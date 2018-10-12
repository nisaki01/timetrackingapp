import AddUser from '../compoments/AddUser.vue'
import EditUser from '../compoments/EditUser.vue'
import ShowUser from '../compoments/ShowUser.vue'
import UserList from '../compoments/UserList.vue'
import Home from '../compoments/Home.vue'
import DateNow from '../compoments/DateComp.vue'



export const routes = [
    {   path: '/date-log',
        name: 'DateComp',
        component: DateNow},
     {  path: '',
        name: 'Home',
        component: Home},
      {
        path: '/user-list',
        name: 'UserList',
        component: UserList
      },
      {
        path: '/show-user/:id',
        name: 'ShowUser',
        component: ShowUser
      },
      {
        path: '/add-user',
        name: 'AddUser',
        component: AddUser
      },
      {
        path: '/edit-user/:id',
        name: 'EditUser',
        component: EditUser
      },
    
    ]

