<template>
    <router-link :to="{name: 'home'}" class="is-fixed button is-layered is-primary-gradient is-primary is-medium">
        <font-awesome-icon class="mr-1" icon="arrow-left" /> All Projects
    </router-link>
</template>

<style lang="scss" scoped>
.button.is-fixed {
    z-index: 10;
    right: 1rem;
    bottom: 1rem;
    @media screen and (min-width: $widescreen) {
        top: 1rem;
    }
}
</style>
