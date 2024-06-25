<template>
    <div class="box">
        <div class="boxItem" v-for="t in logoPicData" :key="t.hpId">
            <!-- <a href=""> -->
            <img :src="'http://www.wgdo.net' + t.cover" alt="">
            <!-- </a> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'logoPic',
        props: ['logoPicData'],
        mounted() {
            // this.$nextTick(() => {
            //     const canvas = document.getElementById('boxItem')
            //     if (canvas) {
            //         const ctx = canvas.getContext('2d');
            //         const img = new Image();
            //         img.crossOrigin = 'anonymous';
            //         img.src = 'http://106.3.97.14:9002' + this.logoPicData[3].cover;
            //         img.onload = function () {
            //             canvas.width = img.width;
            //             canvas.height = img.height;
            //             ctx.drawImage(img, 0, 0);
            //             const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            //             const data = imageData.data;
            //             // 转灰白色
            //             for (let i = 0; i < data.length; i += 4) {
            //                 const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            //                 data[i] = avg;
            //                 data[i + 1] = avg;
            //                 data[i + 2] = avg;
            //             }
            //             ctx.putImageData(imageData, 0, 0);
            //         };
            //     } else {
            //         console.error('Canvas element not found');
            //     }
            // })
        }
    }
</script>

<style scoped>
    .box {
        margin-top: 50px;
        width: 80.2vw;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 229px);
        gap: 15px 0;
    }

    .box .boxItem {
        width: 228.59px;
        height: 76.2px;
        background-size: cover;
        background-position: center;
        filter: grayscale(1);
        opacity: 1;
    }

    .box .boxItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .box .boxItem:hover {
        filter: none;
        opacity: 1;
    }
</style>