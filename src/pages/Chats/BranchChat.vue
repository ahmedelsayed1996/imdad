<template>
    <div class="container headLine fs-5 my-3">المراسلات مع الفروع</div>
    <div class="container">
      <div class="messenger-container">
        <div class="sidebar" :class="{ 'sidebar-hidden': !showSidebar }">
          <div class="sidebar-header">
            <h2>Chat</h2>
            <!-- <button class="toggle-sidebar" @click="showSidebar = !showSidebar">
    <i class="fas" :class="{ 'fa-chevron-left': showSidebar, 'fa-chevron-right': !showSidebar }"></i>
  </button> -->
          </div>
          <div class="chat-list">
            <div
              v-for="(chat, index) in filteredChats"
              :key="index"
              @click="selectChat(index)"
              :class="{'chat-item': true, 'active': index === selectedChatIndex}"
            >
              <div class="chat-avatar">
                <img :src="chat.avatar" alt="Chat Avatar">
              </div>
              <div class="chat-details">
                <div class="chat-name">{{ chat.name }}</div>
                <div class="chat-message">{{ chat.messages[chat.messages.length - 1].content }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-window">
          <div class="chat-header" v-if="selectedChat">
            <div class="chat-avatar">
              <img :src="selectedChat.avatar" alt="Chat Avatar">
            </div>
            <div class="chat-name">{{ selectedChat.name }}</div>
          </div>
          <div class="chat-messages" v-if="selectedChat && selectedChat.messages">
            <div
              v-for="message in selectedChat.messages"
              :key="message.id"
              :class="['message', message.sender === 'You' ? 'message-sent' : 'message-received']"
            >
              <div class="message-content">{{ message.content }}</div>
              <div class="message-time">{{ message.time }}</div>
            </div>
          </div>
          <div class="chat-input">
            <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type your message...">
            <button @click="sendMessage">Send</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BranchChatPage',
    data() {
      return {
        search: '',
        showSidebar: true,
        chats: [
        {
            name: 'Ahmed',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            messages: [
              { sender: 'John', content: 'Hello!', time: '10:00 AM' },
              { sender: 'You', content: 'Hi, how are you?', time: '10:05 AM' },
              { sender: 'John', content: 'I\'m good, thanks!', time: '10:10 AM' }
            ]
          },
          {
            name: 'Essam',
            avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
            messages: [
              { sender: 'John', content: 'Hello!', time: '10:00 AM' },
              { sender: 'You', content: 'Hi, how are you?', time: '10:05 AM' },
              { sender: 'John', content: 'I\'m good, thanks!', time: '10:10 AM' }
            ]
          },
          {
            name: 'Hussien',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
            messages: [
              { sender: 'John', content: 'Hello!', time: '10:00 AM' },
              { sender: 'You', content: 'Hi, how are you?', time: '10:05 AM' },
              { sender: 'John', content: 'I\'m good, thanks!', time: '10:10 AM' }
            ]
          },
          {
            name: 'Mustafa',
            avatar: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
            messages: [
              { sender: 'John', content: 'Hello!', time: '10:00 AM' },
              { sender: 'You', content: 'Hi, how are you?', time: '10:05 AM' },
              { sender: 'John', content: 'I\'m good, thanks!', time: '10:10 AM' }
            ]
          },
        ],
        selectedChatIndex: null,
        newMessage: ''
      };
    },
    computed: {
      selectedChat() {
        return this.selectedChatIndex !== null ? this.chats[this.selectedChatIndex] : null;
      },
      filteredChats() {
        if (this.search) {
          const keyword = this.search.toLowerCase();
          return this.chats.filter(chat => chat.name.toLowerCase().includes(keyword));
        } else {
          return this.chats;
        }
      }
    },
    methods: {
      selectChat(index) {
        this.selectedChatIndex = index;
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          this.selectedChat.messages.push({ sender: 'You', content: this.newMessage, time });
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
  <style>
  /* Global styles */
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Messenger container */
  .messenger-container {
    display: flex;
    height: 100vh;
  }
  
  /* Sidebar */
  .sidebar {
    flex: 0 0 300px;
    background-color: #f5f6f8;
    padding: 20px;
    border-right: 1px solid #dddfe2;
  }
  
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .search-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .search-container input {
    padding: 8px 12px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    outline: none;
  }
  
  .search-container i {
    position: absolute;
    right: 10px;
    color: #999;
    pointer-events: none;
  }
  
  .chat-list {
    overflow-y: auto;
    max-height: calc(100vh - 200px);
  }
  
  .chat-item {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .chat-item:hover {
    background-color: #e1e2e4;
  }
  
  .chat-item.active {
    background-color: #fff;
    border-left: 3px solid #0084ff;
  }
  
  .chat-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .chat-details {
    margin-left: 10px;
  }
  
  .chat-name {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #222;
  }
  
  .chat-message {
    font-size: 12px;
    line-height: 18px;
    color: #999;
  }
  
  /* Chat window */
  .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    background-color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddfe2;
  }
  
  .chat-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .chat-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .chat-name {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #222;
  }
  
  .chat-messages {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    
  }
  .message-content {
    padding: 8px 12px;
    border-radius: 20px;
    color: #020202;
    font-size: 14px;
    line-height: 20px;
    word-break: break-word;
    display: inline-block;
    max-width: 70%;
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
  }
  
  .message-sent {
    background-color: #0084ff;
    align-self: flex-end;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 5px;
  }
  
  .message-received {
    background-color: #f1f0f0;
    align-self: flex-start;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-bottom: 5px;
  }
  
  
  
  .message-time {
    align-self: flex-end;
    color: #999;
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
  }
  
  .chat-input {
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #dddfe2;
  }
  
  .chat-input input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #dddfe2;
    border-radius: 30px;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    outline: none;
  }
  
  .chat-input button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #0084ff;
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .chat-input button:hover {
    background-color: #0071cc;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #dddfe2;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f5f6f8;
  }
  /* .sidebar-hidden {
  transform: translateX(100%);
  transition: transform 0.3s;
} */
@media (max-width: 767px) {
  .messenger-container {
    flex-direction: column;
  }
  
  .sidebar {
    flex: 1;
    border-right: none;
    border-bottom: 1px solid #dddfe2;
  }
  
  .chat-window {
    flex: 1;
    border-top: none;
  }
}


  </style>
  