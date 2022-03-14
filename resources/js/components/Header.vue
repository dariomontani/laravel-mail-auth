<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">

               <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
               </li>

               <li class="nav-item" >
                  <router-link class="nav-link" :to="{ name: 'about' }">About me</router-link>
               </li>

               <li class="nav-item" >
                  <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
               </li>

             </ul>
          </div>
      </div>
  </nav>
  </div>
</template>

<script>
export default {
    name:"header",
}
</script>

<style>

</style>