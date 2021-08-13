<template>
    <v-bottom-navigation
        v-model="value"
        :background-color="color"
        dark
        shift
        grow
        class="BottomNavigation"
    >
        <v-btn>
            <span>Video</span>

            <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
            <span>Music</span>

            <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
            <span>Book</span>

            <v-icon>mdi-book</v-icon>
        </v-btn>

        <v-btn>
            <span>Image</span>

            <v-icon>mdi-image</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: "BottomNavigation",
    data: () => ({ value: 'recent' }),
    computed:{
        color(){
            switch (this.value){
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'brown'
                case 3: return 'indigo'
                default: return 'blue-grey'
            }
        },
    },
}
</script>

<style scoped lang="scss">
    .BottomNavigation{
        position: absolute;
        bottom: 0;
    }
</style>