<template>
  <div class="container">
    <form>
        <div class="form-group">
            <label for="name">Nome</label>
            <input v-model="name" type="text" class="form-control" id="name" name="name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
        </div>
        <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea v-model="message" class="form-control" id="message" name="message" rows="3"></textarea>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "contact"
}
</script>

<style>

</style>