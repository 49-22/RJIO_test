<template>
    <v-container>
        <v-content>
            <v-layout align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" v-text="postData.title"></h3>
                                <div v-text="postData.body"></div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-content>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'About',
    data() {
        return {
            postData: []
        }
    },
    mounted() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then((resp) => {
            this.postData = resp.data;
            console.log(resp);
        })  
    }
}
</script>

<style>

</style>
