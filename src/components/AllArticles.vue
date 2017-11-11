<template>
  <div>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <v-flex xs12 sm8>
                <v-card>
                  <v-container fluid v-for="(post, index) of posts" :key="index">
                    <v-layout row wrap>
                      <v-flex>
                        <v-card color="grey lighten-2" flat tile xs4 class="card1">
                          <router-link :to="aboutRoute(post.id)">
                            <v-card-media>
                              <v-container fill-height fluid>
                                <v-layout fill-height>
                                  <v-flex align-end flexbox>
                                    <span class="headline">{{post.title}}</span>
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card-media>
                          </router-link>
                          <v-card-text color="blue darken-2">
                            {{post.body}}
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
  </div>
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
    methods: {
      aboutRoute: function(id) {
        return "/about/"+id;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card1 {
   transition: all 100ms ease-in-out;
}
.card1:hover {
  transform: translateY(-0.5em);
}
</style>
