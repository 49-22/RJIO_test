<template>
  <v-app light>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        about: "/about",
        posts: [],
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'All Article posts'
      }
    },
    created () {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log(response)
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
      })
   }

  }
</script>
