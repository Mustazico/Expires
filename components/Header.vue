<template>
    <div class="header">
    <h1 class="title">Expires</h1>
    <div class="links">
        <nuxt-link to="/oppskrifter">Oppskrifter</nuxt-link>
        <nuxt-link to="/varer">Varer</nuxt-link>
        <nuxt-link to="/handlekurv">Handlekurv</nuxt-link>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header {
    background-color: white;
    padding: 2px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgb(62, 62, 62);
}

.title {
    color: rgb(62, 62, 62);
    font-size: 6em;
    margin: 10px;
}

.links{
    display: flex;
    gap: 40px;
    color: rgb(62, 62, 62);
    padding: 0px 80px;
    
}

.links a {
    text-decoration: none;
    color: rgb(85, 120, 131);
    font-weight: bold;
    font-size: 2.5rem;
}
.links a:hover {
    text-decoration: underline;
    color: rgb(117, 166, 181)
}
</style>