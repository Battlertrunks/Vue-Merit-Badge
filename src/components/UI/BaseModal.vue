<template>
  <v-card class="modal">
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
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

.modal div * {
  display: flex;
  flex-direction: column;
}
</style>
