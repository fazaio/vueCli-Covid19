<template>
    <div id="app">
        <div class="container">
            <h2><i class="icon-chart icons tred"></i> COVID-19</h2>
            <router-link class="button" to="/">Lokal</router-link> 
            <router-link class="button" to="/globe">Global</router-link> 
            <router-link class="button" to="/about">About</router-link>
        <router-view />
        </div>
    </div>
</template>

<style>
  @import './assets/css/fazaio.css';
  @import './assets/css/style.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css';
  .mt1{
    margin-top: 100px;
  }
</style>
