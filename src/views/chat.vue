<template>
  <div class="chat">
    <div class="chat-list">
      <div class="chat-search">
        <el-form ref="form" :model="form">
          <el-form-item class="chat-search-from-item">
            <el-input v-model="form.name" class="search-input" prefix-icon="el-icon-search" :clearable="true" placeholder="search" size="mini">
            </el-input>
            <el-button class="search-button" round icon="el-icon-s-promotion" circle type="primary" size="mini"></el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="chat-message-list">
        <div class="chat-message-top">
          <div class="chat-message-top-img">
            <img src="../assets/logo.png">
          </div>
          <div class="chat-message-top-name">
            <p class="username">Donald Jonhnson</p>
            <p class="ol">online</p>
          </div>
          <div class="chat-message-top-time">
            3h ago
          </div>
        </div>
      </div>
    </div>
    <div class="chat-content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style>
.chat{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.chat-list{
  width: 500px;
  height: 100%;
  background-color: #222;
  padding: 0 20px;
  box-sizing: border-box;
}
.chat-search{
  width: 100%;
  height: 80px;
  margin-top: 15px;
}
.chat-search .chat-search-from-item{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.chat-search .search-input{
  width: 260px;
  margin-right: 10px;
}
.chat-search .search-input input{
  margin: 0;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #666;
  color: white;
}
.chat-search .search-button{
  width: 30px;
  height: 30px;
}

.chat-message-list{
  width: 100%;
  height: 100px;
  background-color: #555;
  padding: 20px 10px;
  box-sizing: border-box;
}
.chat-message-top{
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.chat-message-top-img{
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius:50%;
  overflow: hidden;
}
.chat-message-top-img img{
  width: 100%;
}
.chat-message-top-name{
  color: #fff;
  text-align: left;
  margin-left: -10px;
}
.chat-message-top-name .name{
  font-size: 12px;
  font-weight: 800;
}
.chat-message-top-name .ol{
  font-size: 12px;
  color: lightgray;
}
.chat-message-top-time{
  color: lightgray;
  font-size: 12px;
}

.chat-content{
  width: 100%;
  height: 100%;
  background-color: #333;
}
</style>
