<!-- <template>
    <div class="messenger-container">
      <div class="sidebar">
        <div class="sidebar-header">
          <h2>Messenger</h2>
          <input type="text" v-model="search" placeholder="Search">
        </div>
        <div class="chat-list">
          <div v-for="(chat, index) in chats" :key="index" @click="selectChat(index)" :class="{'chat-item': true, 'active': index === selectedChatIndex}">
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
        <div class="chat-header">
          <div class="chat-avatar">
            <img :src="selectedChat.avatar" alt="Chat Avatar">
          </div>
          <div class="chat-name">{{ selectedChat.name }}</div>
        </div>
        <div class="chat-messages">
          <div v-for="(message, index) in selectedChat.messages" :key="index" class="message">
            <div class="message-bubble" :class="{'message-sent': message.sender === 'You', 'message-received': message.sender !== 'You'}">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type your message...">
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerChatsPage',
    data() {
      return {
        search: '',
        chats: [
          {
            name: 'John Doe',
            avatar: 'https://example.com/avatar1.jpg',
            messages: [
              { sender: 'John', content: 'Hello!' },
              { sender: 'You', content: 'Hi, how are you?' },
              { sender: 'John', content: 'I\'m good, thanks!' }
            ]
          },
          // Add more chat objects here...
        ],
        selectedChatIndex: null,
        newMessage: ''
      };
    },
    computed: {
      selectedChat() {
        return this.selectedChatIndex !== null ? this.chats[this.selectedChatIndex] : null;
      }
    },
    methods: {
      selectChat(index) {
        this.selectedChatIndex = index;
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.selectedChat.messages.push({ sender: 'You', content: this.newMessage });
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
  <style>
  .messenger-container {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  .sidebar {
    flex: 0 0 300px;
    background-color: #f5f5f5;
    padding: 20px;
    border-right: 1px solid #ccc;
  }
  
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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
    background-color: #ebebeb;
  }
  
  .chat-item.active {
    background-color: #d4eaf5;
  }
  
  .chat-avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .chat-details {
    margin-left: 10px;
  }
  
  .chat-name {
    font-weight: bold;
  }
  
  .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    background-color: #f5f5f5;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
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
  }
  
  .chat-messages {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .message-bubble {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    max-width: 70%;
  }
  
  .message-sent {
    background-color: #d4eaf5;
    margin-left: auto;
  }
  
  .message-received {
    background-color: #ebebeb;
    margin-right: auto;
  }
  
  .chat-input {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .chat-input input {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .chat-input button {
    margin-left: 10px;
    padding: 5px 10px;
  }
  </style> -->