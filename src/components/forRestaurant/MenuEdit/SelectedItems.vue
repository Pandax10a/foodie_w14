<template>
    <div>
        <h1> Your current Play List:</h1>
        <!-- the conditional is set if the array has an object at 1 higher -->
        <article v-if="this.playlist.length > 0">
        <section v-for="(list,index) in playlist" :key="index" @click="move_to_play(index)">
            <p>{{index+1}}. {{list.title}}</p>
        </section>
        </article>
       
            <p v-else>Pick some songs from above to add to play list</p>
        
        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                playlist: [
                   

                ],
                
            }
        },
        methods: {
            the_playlist(song) {
                song
                this.playlist.push(song)
                console.log(song)
                
            },
            move_to_play(i) {
                this.$root.$emit(`prepping_play`, this.playlist[i])
               
                
            },
   
        },
        mounted () {
            this.$root.$on(`put_into_playlist`, this.the_playlist);
           
        },
        name: 'play-list'
    }
</script>

<style scoped>

</style>