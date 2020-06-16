<template>
    <div class="chat-content-body">
        <div class="chat-content-message">
            <div class="chat-content-user">
                <div class="chat-content-user-img">
                    <img :src="message.imgurl">
                </div>
                <div class="chat-content-user-message">
                    <div class="chat-content-user-name">{{message.name}}</div>
                    <div class="chat-content-user-status">
                        <div class="chat-content-user-online"> {{message.status}}</div>
                        <div class="chat-content-user-time">Last seen {{message.time}}</div>
                    </div>
                </div>
            </div>
            <div class="chat-content-operat">
                <div class="chat-content-operat-right">
                    <el-button class="chat-content-operat-phone el-icon-phone operat-button"></el-button>
                    <el-button class="chat-content-operat-video el-icon-video-camera operat-button"></el-button>
                    <el-button class="chat-content-operat-more el-icon-more operat-button"></el-button>
                </div>
            </div>
        </div>
        <div class="chat-content-info">
            <div class="info" id="info">
                <div class="onceinfo" :class="item.name == 'me' ? 'me' : 'you' " v-for="(item,index) in info" :key="index">
                    <div class="useradmin">
                        <img src="../assets/logo.png" />
                    </div>
                    <div class="userinfo">
                        <span>dfadfadfadsfasdfasdfadsfasdfasdfdsafdasfsdafadsfadfasdfadsfadfsdafaefadfawefasdfaefadfa</span>
                    </div>
                </div>
            </div>
            <div class="inputInfo">
                <el-input placeholder="请输入内容" v-model="input"></el-input>
                <el-button type="primary" icon="el-icon-s-promotion" circle class="infoButton"></el-button>    
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            input: "",
            message: {
                
            },
            info: [
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                },
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                },
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                },
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                },
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                },
                {
                    name:"me",
                    info: "你好"
                },
                {
                    name:"you",
                    info: "你好"
                }
            ]
        }
    },
    mounted(){
        this.message = this.UserStatues;
        this.$nextTick(function(){
            var div = document.getElementById('info');
            div.scrollTop = div.scrollHeight;
        })
    },
    watch: {
        UserStatues: function(val) {
            this.message = val
        }
    },
    computed: {
        ...mapState({
            UserStatus: state => state.UserStatus
        }),
        UserStatues: function() {
            return this.UserStatus
        }
    },

    updated(){
        this.$nextTick(function(){
        var div = document.getElementById('info');
            div.scrollTop = div.scrollHeight;
        })
    }

}
</script>

<style>
    .chat-content-body{
        width: 100%;
        height: 100%;
        background-color: #333;
    }
    .chat-content-message{
        width: 100%;
        height: 100px;
        display: flex;
        flex-flow: row nowrap;
        border-bottom:1px solid rgba(255, 253, 253, 0.4) ;
        padding: 30px 20px;
        box-sizing: border-box;
    }
    .chat-content-user{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
    .chat-content-user-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .chat-content-user-img img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    .chat-content-user-message{
        text-align: left;
        color: #ffffff;
        box-sizing: border-box;
        line-height: 20px;
    }
    .chat-content-user-name{
        font-size: 16px;
        font-weight: 500;
    }
    .chat-content-user-status{
        display: flex;
        flex-flow: row nowrap;
        font-size: 12px;
    }
    .chat-content-user-online{
        color: #d8d5d5;
    }
    .chat-content-user-time{
        margin-left: 15px;
        color: #d8d5d5;
    }
    .chat-content-operat{
        width: 100%;
        height: 100%;
    }
    .chat-content-operat-right{
        display: inline-block;
        margin-left: 70px;
    }
    .operat-button{
        width: 40px;
        height: 40px;
        background-color:transparent;
        border: 0;
        font-size: 25px;
        color: #ffffff;
    }
    .info{
        width: 100%;
        height: 540px;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
    }
    .inputInfo{
        width: 100%;
        height: 60px;
        padding: 10px 30px;
        box-sizing: border-box;
        position: relative;
        background-color: #555;
    }
    .el-input {
        width: 100%;
        border-radius: 25px;

    }
    .el-input input{
        border-radius: 25px;
        padding-right: 60px;
    }
    .infoButton{
        width: 45px;
        height: 45px;
        position: absolute;
        top: 6px;
        right: 30px;
        font-size: 20px;
    }
    .onceinfo{
        display: flex;
        flex-flow: row nowrap;
        margin: 20px 0;
    }
    .me{
        text-align: left;
    }
    .you{
        transform: rotateY(180deg);
      -ms-transform:rotateY(180deg); 
      -moz-transform:rotateY(180deg);
      -webkit-transform:rotateY(180deg);
      -o-transform:rotateY(180deg); 
    }
    .you span{
        display: block;
        text-align: right;
        transform: rotateY(180deg);
      -ms-transform:rotateY(180deg); 
      -moz-transform:rotateY(180deg);
      -webkit-transform:rotateY(180deg);
      -o-transform:rotateY(180deg); 
    }
    .useradmin{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        background: white;
    }
    .useradmin img{
        width: 100%;
        height: 100%;
    }
    .userinfo{
        max-width: 200px;
        min-height: 20px;
        min-width: 50px;
        background: seagreen;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-size: 14px;
        padding: 5px;
        color: white;
        word-break:break-word;
        position: relative;
    }
    .userinfo::before{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: -12px;
        top: 3px;
        border: 6px solid;
        border-color: transparent seagreen transparent transparent;
    }
</style>