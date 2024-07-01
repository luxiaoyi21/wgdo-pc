<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="aintro">{{$t('about.contact')}}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="content-dsc" v-for="contact in contactDatas">
                    <div style="margin-bottom:50px;
                    opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="contact.contentDetails"></div>
                </div>
            </div>

            <div class="enroll">
                <div class="enroll-in">
                    <p class="message">{{ $t('about.welcome') }}</p>
                    <div class="enroll-input">
                        <el-input v-model="input" placeholder="" type="textarea" :autosize="{ minRows: 1.8 }"
                            class="enroll-content">
                        </el-input>

                        <el-button type="success" @click="Send">
                            <img src="@/static/imgs/send.png" alt="">
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Aboutus } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Contact",
    props: ['tabDatas'],
    data() {
        return {
            contactDatas: [...this.tabDatas],
            input: ''
        };
    },
    mounted() {
        this.getContactData()
    },
    methods: {
        getContactData(p = this.$store.state.lang.version) {
            Aboutus({ moduleType: '4', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.contactDatas = res.data.rows
                }
            })
        },
        async Send() {
            if (this.input.trim() !== '') {
                try {
                    const response = await Message({ message: this.input });
                    console.log('服务器响应:', response.data);

                    this.$message({
                        message: '信息发送成功',
                        type: 'success'
                    });

                    this.input = '';
                } catch (error) {
                    console.error('发送信息时出错:', error);

                    this.$message({
                        message: '信息发送失败',
                        type: 'error'
                    });
                }
            } else {
                this.$message({
                    message: '输入内容不能为空',
                    type: 'warning'
                });
            }
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getContactData(), this.$store.state.lang.version)
            }
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.item {
    width: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
}

.content {
    width: 100%;
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.content-in {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.aintro {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 15px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.content-dsc {
    display: flex;
    flex-direction: column;
}

.enroll {
    width: 100%;
    height: 300px;
    opacity: 1;
    background: rgba(62, 73, 56, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.enroll-in {
    width: 65%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.message {
    opacity: 1;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 47.74px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
}

.enroll-input {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}

.el-input {
    width: 86%;

}

:deep(.el-input__inner) {
    white-space: normal;
    word-break: break-word;
    max-width: 100%;
    box-sizing: border-box;
}

.el-button {
    width: 12%;
    height: 50px;
    opacity: 1;
    border-radius: 2px;
    background: rgba(165, 214, 63, 1);
    margin-left: 15px;
}

.el-button img {
    opacity: 1;
    scale: 0.6;
}

.el-input__inner {
    background: rgba(204, 204, 204, 1);
}
</style>
