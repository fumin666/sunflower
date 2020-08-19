<template>
    <button id="sunflower-audio-el" class="s-copy" @click="click"><span v-if="$slots.default"><slot></slot></span></button>
</template>
<script>
    export default {
        name: "s-copy",
        componentName: 's-copy',
        methods: {
            click: function () {
                // 获取到聚焦的元素button
                var currentFocus = document.activeElement;
                // 获取当前的code下的内容
                var parentNode = currentFocus.parentNode;

                var copytext = parentNode.getElementsByTagName('pre')[0].getElementsByTagName('code')[0];
                // console.log(copytext);

                // 创建一个textarea元素
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = 'textarea';
                document.body.appendChild(target);

                target.textContent = copytext.textContent;
                // console.log(target.textContent);
                target.focus();
                target.setSelectionRange(0, target.value.length);

                var succeed;
                try {
                    // execCommand，该方法允许运行命令来操纵可编辑区域的内容
                    succeed = document.execCommand("copy");
                } catch(e) {
                    succeed = false;
                }
                if (currentFocus && typeof currentFocus.focus === "function") {
                    currentFocus.focus();
                }
                // textarea内容
                target.parentNode.removeChild(target);
                target.textContent = "";
                return succeed;
            }
        }
    }
</script>
<style scoped>
    .s-copy {
        float:right;
        display: inline-block;
        line-height: 1;
        white-space: normal;
        text-align: center;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
        box-sizing: border-box;
        padding: 10px 15px;
        margin: 0;
        font-size: 14px;
        border-radius: 4px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .s-copy+.s-copy {
        margin-left: 10px
    }

    .s-copy:focus,.s-copy:hover {
        color: #20a0ff;
        border-color: #20a0ff
    }

    .s-copy:active {
        color: #1d90e6;
        border-color: #1d90e6;
        outline: none
    }

    .s-copy::-moz-focus-inner {
        border: 0
    }
</style>
