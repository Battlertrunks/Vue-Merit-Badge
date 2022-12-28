<template>
  <v-overlay>
    <v-card class="modal" width="95%" color="#FAF6F0" :height="checkout ? '30rem' : null">
      <div>
        <header>
          <slot name="header"></slot>
        </header>
        <main class="main-body">
          <slot></slot>
        </main>
      </div>
    </v-card>
  </v-overlay>
</template>

<script>

export default {
  props: {
    checkout: {
      default: null
    }
  }
}
</script>

<style>
p,
h3,
span {
  color: #333;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
}

.modal .main-body * {
  display: flex;
  flex-direction: column;
}

.modal .main-body p {
  margin: 1rem 0;
}

.modal .item-img {
  border-radius: 0.334rem;
}
</style>
