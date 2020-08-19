<template>
    <audio id="sunflower-audio-el" v-show="show" controls="controls" :src="src" preload="auto"></audio>
</template>
<script>
    const defSrc = 'static/res/msg.mp3';
    const defShow = false;
    export default {
        name: "s-audio",
        data() {
            return {
                show : defShow,
                src : defSrc
            };
        },
        methods: {
            play:function () {
                this.$el.play();
            },
            load:function (newSrc) {
                newSrc = newSrc || defSrc;
                this.$el.src = newSrc;
                this.$el.load();
            },
            showOrHide:function (showFlag){
                showFlag = showFlag || defShow;
                this.show = showFlag;
            }
        }
    };
</script>
<style>
    #sunflower-audio-el {
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 10;
    }
</style>