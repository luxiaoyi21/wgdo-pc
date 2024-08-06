<template>
  <div class="box">
    <div class="header">
      <div class="headerNav">
        <HeaderNav />
      </div>
      <div class="car">
        <el-carousel class="elc">
          <el-carousel-item v-for="item in carouselData" :key="item.hpId">
            <img
              :src="'http://www.wgdo.net' + item.cover"
              @load="checkBrightness($event, index)"
            />
            <div
              class="texts"
              v-if="item.intro"
              :class="{ 'dark-text': isBright[index] }"
            >
              <div class="textOne">
                {{ item.intro.slice(0, 8) }}
                <span class="GreenDesign">{{ item.intro.slice(8, 21) }}</span>
                {{ item.intro.slice(21) }}
              </div>
              <div class="textTwo">{{ item.title }}</div>
              <div class="carouselLink" :class="{ 'white-background': isBright[index] }">
                <a href="#">READ NOW<i class="iconfont icon-youjiantou"></i></a>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="seconds">
      <Second />
    </div>
    <div class="thrid">
      <Third />
    </div>
    <div class="fourth">
      <Fourth />
    </div>
    <div class="five">
      <Five />
    </div>
    <div class="six">
      <Sixth />
    </div>
    <div class="footer">
      <Footers />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getContentList } from "@/api/requests.js";
import HeaderNav from "@/views/Home/Header/HeaderNav.vue";
import Second from "@/views/Home/Second/index.vue";
import Third from "@/views/Home/Third/index.vue";
import Fourth from "@/views/Home/Fourth/index.vue";
import Five from "@/views/Home/Five/index.vue";
import Sixth from "@//views/Home/Sixth/index.vue";
import Footers from "@/views/Home/Footer/index.vue";
import funs, { getTitle } from "@/utils/index.js";

export default {
  name: "HomeS",
  components: { HeaderNav, Second, Third, Fourth, Five, Sixth, Footers },
  data() {
    let carouselData = [];
    return {
      carouselData,
      isBright: [],
    };
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
    this.getHeaderNav();
    if (this.$store.state.lang.version === "1") {
      getTitle("1");
    } else {
      getTitle("143");
    }
  },
  methods: {
    getHeaderNav(p = this.$store.state.lang.version) {
      getContentList({ moduleType: "0", status: "1", version: p }).then((res) => {
        if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
          this.carouselData = res.data.rows;
        }
      });
    },

    checkBrightness(event, index) {
      const img = event.target;
      const canvas = document.createElement("canvas");
      console.log(canvas);
      const context = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);

      const data = context.getImageData(0, 0, canvas.width, canvas.height).data;

      let r = 0,
        g = 0,
        b = 0,
        length = data.length / 4;
      for (let i = 0; i < length; i++) {
        r += data[i * 4];
        g += data[i * 4 + 1];
        b += data[i * 4 + 2];
      }

      const avgColor = {
        r: Math.floor(r / length),
        g: Math.floor(g / length),
        b: Math.floor(b / length),
      };
      const brightness = avgColor.r * 0.299 + avgColor.g * 0.587 + avgColor.b * 0.114;
      this.$set(this.isBright, index, brightness > 186);
    },
  },
  watch: {
    "$store.state.lang.version": {
      handler() {
        funs(this.getHeaderNav(), this.$store.state.lang.version);
      },
    },
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
}

.header {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
}

.headerNav {
  position: absolute;
  z-index: 100;
}

.headerBg {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 685.78px;
  opacity: 1;
  z-index: 99;
}

.car {
  position: relative;
  top: 0;
  left: 0;
}

.elc {
  height: 685.78px;
}

.elc img {
  display: block;
  width: 100vw;
  height: 685.78px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
}

.elc :deep(.el-carousel__button) {
  transform: translate(0, -40px);
  margin: 0 3px;
  left: 704.07px;
  top: 624.82px;
  width: 9.14px;
  height: 9.14px;
  border-radius: 50%;
  background: rgba(255, 225, 255, 1);
}

.elc :deep(.is-active .el-carousel__button) {
  background: rgba(166, 225, 99, 1);
}

.elc :deep(.el-carousel__arrow) {
  display: none;
}

/* text */
.texts {
  position: absolute;
  top: 292px;
  z-index: 109;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.textOne {
  /*height: 26.67px;*/
  text-shadow: 0px 1.52px 3.05px rgba(0, 0, 0, 0.25);
  font-size: 19.81px;
  font-weight: 500;
  letter-spacing: 0.76px;
  line-height: 26.27px;
  color: rgba(166, 225, 99, 1);
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

/*
.GreenDesign {
    color: rgba(166, 225, 99, 1);

}
*/

.textTwo {
  left: 208.02px;
  top: 337.56px;
  width: 100%;
  /*height: 51.05px;*/
  text-shadow: 0px 1.52px 3.05px rgba(0, 0, 0, 0.25);
  font-size: 38.1px;
  font-weight: 700;
  letter-spacing: 0.76px;
  line-height: 50.52px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  text-align: center;
  padding: 0 50px;
}

.carouselLink a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
  width: 202.69px;
  height: 42.67px;
  line-height: 42.67px;
  border-radius: 21.34px;
  border: 1.52px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  /*color: rgba(166, 225, 99, 1);*/
}

.carouselLink.white-background a {
  color: black; /* 背景图明亮时文本颜色变为黑色 */
}

.dark-text {
  color: black; /* 明亮时文本颜色变为黑色 */
}

/* 走马灯height*/
:deep(.el-carousel__container) {
  height: 685.78px;
}

/* seconds */
.seconds {
  min-height: 788.65px;
  background: rgba(62, 73, 56, 1);
}

/* third */
.thrid {
  background: rgba(242, 241, 221, 1);
}

/* fourth */
.fourth {
  background: rgba(62, 73, 56, 1);
}

/* five */
.five {
  background-color: rgba(242, 241, 221, 1);
}

/* six */
.six {
  background: rgba(62, 73, 56, 1);
}

/* footer */
.footer {
  background: rgba(166, 225, 99, 1);
}
</style>
