<template>
    <div class="header">
        <div class="header__logo-container">
            <img src="/src/assets/logo.png" alt="Logo" class="header__logo-container-image">
        </div>
        <nav class="header__navBar">
            <a href="/main/home">HOME</a> |
            <a href="/main/produtos">PRODUTOS</a> |
            <a href="/main/contato">CONTATO</a> |
            <a href="/main/sobre">SOBRE NÓS</a>
        </nav>
    </div>
</template>
<script>

export default {
    name: 'GenericHeader',
    components: {

    }
}
</script>

<style scoped>
@import url(./Header.scss);
</style>