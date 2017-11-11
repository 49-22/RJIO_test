<template>
  <v-app light>
    <!--<v-navigation-drawer
          persistent
          :mini-variant="miniVariant"
          :clipped="clipped"
          v-model="drawer"
          enable-resize-watcher
          app
        >
          <v-list>
            <v-list-tile
              value="true"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-tile-action>
                <v-icon light v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>-->
    <v-toolbar fixed app :clipped-left="clipped">
      <!--<v-btn
            icon
            light
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>

              <v-flex xs12 sm12>
                <v-card>
                  <v-container fluid v-bind="{ [`grid-list-${size}`]: true }" v-for="(post, index) of posts" :key="index">
                    <v-layout row wrap>
                      <v-flex>
                        <v-card color="blue darken-2" flat tile xs4>
                          <v-card-media height="150px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline">{{post.title}}</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-text>
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
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
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
