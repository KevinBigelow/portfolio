<template>
    <router-link :to="{name: 'home'}" class="sticky-navbar button is-layered is-primary-gradient is-primary is-medium">
        <font-awesome-icon class="mr-1" icon="arrow-left" /> All Projects
    </router-link>
</template>

<style lang="scss">
.sticky-navbar.button.is-layered {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    @media screen and (min-width: $widescreen) {
        top: 1rem;
    }
}
</style>
