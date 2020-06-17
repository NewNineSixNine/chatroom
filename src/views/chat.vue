<template>
  <div class="chat">
    <div class="chat-list">
      <chat-list :list=list></chat-list>
    </div>
    <div class="chat-content">
      <chat-content></chat-content>
    </div>
    <div class="chat-message"></div>
  </div>
</template>

<script>
import ChatList from '../../src/components/chat-list.vue';
import ChatContent from '../../src/components/chat-content.vue'
export default {
  components: {
    ChatList,
    ChatContent
  },
  data() {
    return {
      list: [
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userOne.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userTwo.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userThree.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userOne.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userOne.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userOne.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        },
        {
          name: 'Donald Jonhnson',
          imgurl:"/static/userOne.png",
          status: "online",
          time: "3h ago",
          xiaoxi: "Analysls of foreign experience, as it is common in your face",
          tiaoshu: 11
        }
      ]
    }
  }
}
</script>

<style scoped>
.chat{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.chat-list{
  width: 32%;
  height: 100%;
}

.chat-content{
  width: 43%;
  height: 100%;
}
.chat-message{
  width: 25%;
  height: 100%;
  background-color: #444 ;
}
</style>
