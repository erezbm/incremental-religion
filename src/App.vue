<template>
  <div id="app">
    top text
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view/>
  </div>
</template>
