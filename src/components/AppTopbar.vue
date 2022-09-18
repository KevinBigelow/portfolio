<template>
    <router-link v-if="is_home === 'false'" :to="{name: 'home'}" class="has-text-white is-block sticky-navbar">
        <font-awesome-icon icon="arrow-left" class="icon"/> View all Work
    </router-link>
</template>

<script>
export default {
    data () {
        return {
            is_home: ''
        }
    },
    watch: {
        $route (to) {
            document.title = to.meta.title || 'Portfolio by Kevin Bigelow';
            if (this.$route.name === "home") {
                this.is_home = 'true'
            } else {
                this.is_home = 'false'
            }
        },
        immediate: true
    },
}
</script>

<style lang="scss">
.sticky-navbar {
    font-size: 2rem;
    position: fixed;
    display: block;
    right: 0;
    top: 0;
    width: 100%;
    padding: 1rem 2rem 2rem;
    text-align: right;
    background: linear-gradient(to bottom, rgba(6, 6, 16, .9), rgba(6, 6, 16, 0));
    &:hover {
        .icon {
            margin-right: .125rem;
        }
    }
}
</style>
