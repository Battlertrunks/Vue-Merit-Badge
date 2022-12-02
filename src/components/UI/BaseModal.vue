<template>
  <v-card class="modal" width="90%">
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main class="main-body">
        <slot></slot>
      </main>
    </div>
  </v-card>
</template>

<style>
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

.modal .item-img {
  border-radius: 0.334rem;
}
</style>
