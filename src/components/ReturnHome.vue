<template>
    <div class="is-block sticky-navbar" v-if="is_home === 'false'">
        <router-link :to="{name: 'home'}" class="has-text-white">
            <font-awesome-icon icon="arrow-left" class="icon"/> View all Work
        </router-link>
    </div>
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
    height: 2rem;
    position: fixed;
    display: block;
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 2rem 2rem;
    text-align: right;
    background: linear-gradient(to top, rgba(6, 6, 16, .9), rgba(6, 6, 16, 0));
    &:hover {
        .icon {
            margin-right: .125rem;
        }
    }
    @media screen and (min-width: $widescreen) {
        top: 0;
        background: linear-gradient(to bottom, rgba(6, 6, 16, .9), rgba(6, 6, 16, 0));
    }
}
</style>
