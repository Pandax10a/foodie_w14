<template>
    <div>
        <!-- i give up on allowing more flexible edits that's allow user input changes, because it would need
        to be uploaded somewhere beyond just cookies. -->
        <!-- this is probably more functional for small foodtruck style entrepreneur that needs to rotate
        daily specials-->
        <h1>Pre set on items that can be rotated into menu</h1>
        <section v-for="(item, index) in menu_items" :key="index">
            
            <h3 @click="selecting_items(index)">{{index + 1}}.  {{item.name}} <br>
                <!-- <img :src="item.image_url"> -->
                {{item.the_disc}} <br> {{item.price}}
            </h3>
            
            

        </section>
    </div>
</template>

<script>
    export default {
        methods: {
            selecting_items(i) {
                this.$root.$emit(`put_into_playlist`, this.songlists[i])
            },
          
        },
        data() {
            return {
                // just have to pretend this data is from api
                menu_items: [
                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                {
                    image_url: "https://i.imgur.com/uFJrlE1.png",
                    name: "Pork Back Ribs /w Cheese",
                    the_disc: "Grilled Korean style Pork Back Rib with melted cheese",
                    price: "$24",
                },
                                {
                    image_url: "https://i.imgur.com/7n6B4e9.png",
                    name: "Grilled Chicken /w Cheese",
                    the_disc: "Savory stir-fried chicken with melted cheese",
                    price: "$22",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                                {
                    image_url: "https://i.imgur.com/KVum81I.png",
                    name: "Pork Back Ribs",
                    the_disc: "Grilled Korean style Pork Back Rib",
                    price: "$23",
                },
                {
                    title: 'Bar Bar Bar',
                    artist: 'Crayon Pop',
                    song_id: 5576117192,
                    image_url: 'https://kpopping.com/documents/7c/5/Crayon-Pop-Bar-Bar-Bar-Concept-Teasers-3-Versions-documents-25.jpeg?v=b8fd6'
                },
                {
                    title: "I Can't Stop Me ",
                    artist: 'TWICE',
                    song_id: 5882688897,
                    image_url: 'http://images6.fanpop.com/image/photos/43600000/I-Can-t-Stop-Me-twice-jyp-ent-43612482-1500-1000.jpg'
                },
                {
                    title: 'Lion Heart',
                    artist: 'SNSD',
                    song_id: 4186615445,
                    image_url: 'https://seoulbeats.com/wp-content/uploads/2015/08/20150825_seoulbeats_snsd_girlsgeneration5-e1440413361127.jpg'
                },
                {
                    title: "As If It's Your Last",
                    artist: 'BLACKPINK',
                    song_id: 2235591632,
                    image_url: 'https://c-fa.cdn.smule.com/rs-s77/arr/5b/9d/cc4bed5a-55e9-46d6-965f-dcec4506b7ae_1024.jpg'
                },
                {
                    title: 'Never Gonna Give You Up',
                    artist: 'Rick Astley',
                    song_id: 6061798175,
                    image_url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
                }],
             
            
            }
        },
        name: 'items-list'
    }
</script>

<style scoped>
img {
    width: 20vw;
    
}
</style>