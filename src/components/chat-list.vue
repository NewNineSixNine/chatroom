<template>
    <div class="chat-list-content">
      <div class="chat-search">
        <el-form ref="form" :model="form">
          <el-form-item class="chat-search-from-item">
            <el-input v-model="form.name" class="search-input" prefix-icon="el-icon-search" :clearable="true" placeholder="search" size="mini">
            </el-input>
            <el-button class="search-button" round icon="el-icon-s-promotion" circle type="primary" size="mini"></el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="chat-message">
        <div class="chat-message-list" v-for="(item,index) in list" :key="index" @click="chitchat(item)">
          <div class="chat-message-top">
            <div class="chat-message-top-name">
              <div class="chat-message-top-img">
                <img v-bind:src="item.imgurl">
              </div>
              <div class="chat-message-top-information">
                <p class="username">{{item.name}}</p>
                <p class="ol">{{item.status}}</p>
              </div>
            </div>
            <div class="chat-message-top-time">
              {{item.time}}
            </div>
          </div>
          <div class="chat-message-bottom">
            <div class="chat-message-bottom-information">
              {{item.xiaoxi}}
            </div>
            <div class="chat-message-bottom-bages">{{item.tiaoshu}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
      list: {
          type: Array,
          deault: ''
      }
  },
  data() {
      return {
          form : {}
      }
  },
  methods: {
      chitchat(e) {
          this.$store.commit("Value",e)
        //   console.log(this.$store.store.UserStatus)
      }
  },
}
</script>

<style>
.chat-list-content{
  width:100%;
  height:100%;
  background-color: #222;
  padding: 0 20px;
  box-sizing: border-box;
}
.chat-search{
  width: 100%;
  padding-top:15px;
}
.chat-search .chat-search-from-item{
  width: 100%;
  height: 100%;
}
.chat-search .search-input{
  width: 255px;
  margin-right: 30px;
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
  border-radius: 50%;
}
.chat-message{
  width: 100%;
  height: calc(100% - 120px);
  overflow: auto;
}
.chat-message-list{
  width: 100%;
  height: 120px;
  background-color: #555;
  padding: 20px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 20px;
}
.chat-message-top{
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
}
.chat-message-top-name{
  width: 170px;
  color: #fff;
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.chat-message-top-information{

}
.chat-message-top-information .name{
  font-size: 12px;
  font-weight: 800;
}
.chat-message-top-information .ol{
  font-size: 12px;
  color: lightgray;
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
  height: 100%;
  object-fit:cover;
}

.chat-message-top-time{
  color: lightgray;
  font-size: 12px;
}
.chat-message-bottom{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 10px;
}
.chat-message-bottom-information{
  width: 210px;
  font-size: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  line-height: 40px;
  /* padding-left: 20px; */
  /* box-sizing: border-box; */
}
.chat-message-bottom-bages{
  width: 30px;
  height: 30px;
  background: #040;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  margin-top: 5px;
  box-shadow: 0px 0px 20px 10px rgba(1, 60, 1, 0.4);
}
</style>>