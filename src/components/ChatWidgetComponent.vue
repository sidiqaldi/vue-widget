<template>

  <div>
    <a href="#" id="chat-widget" class="btn" @click="open=true">Contact me</a>
    <div v-if="open">
        <div>dibukaaa coyyyy</div>
        <a href="#" class="btn" @click="open=false">Close</a>
    </div>
  </div>



</template>

<script>
export default {
  props: {
    facebook: { type: Boolean, default: true },
  },
  data() {
    return {
        open: false
    }
  },
  methods: {
    share ($event) {
      window.alert('Share on ' + $event.target.innerHTML);
    }
  }
}
</script>

<style scoped>
  .btn {
    display: inline-block;
    border: 1px solid #ddd;
    padding: 10px 20px;
    margin-right: 10px;
    text-transform: uppercase;
    color: #999;
    text-decoration: none;
  }

  .btn a:hover {
    color: #333;
    border-color: #888;
  }

  #chat-widget {
    position: fixed;
    bottom: 0;
    right: 5%;
  }

  @media (max-width: 800px) {
      .btn {
      height: 40px;
      background-color: green;
    }
  }

</style>
