<template>
    <KinesisContainer class="app-navbar app-navbar-grid" tag="nav">
        <h2 class="app-navbar--subtitle has-text-primary has-text-centered grid-title">UI Designer & Developer</h2>
        <h1 class="app-navbar--title title has-text-centered has-text-white grid-name is-marginless">Kevin Bigelow</h1>
        <div class="grid-actions">
            <transition name="router-anim" enter-active-class="animated bounceIn delay-1s" leave-active-class="animated zoomOut">
                <KinesisElement type="depth" :strength="8" v-if="is_home === 'false'">
                    <router-link :to="{name: 'home'}" class="app-navbar--button button is-layered is-primary-gradient is-primary is-medium is-margin-centered is-block">View all Work</router-link>
                </KinesisElement>
            </transition>
        </div>
        <span class="grid-contact bizarro-text has-text-white">moc.liamg@ngised.wolegibnivek</span>
    </KinesisContainer>
</template>

<script>
    import { KinesisContainer, KinesisElement } from 'vue-kinesis'

    export default {
        data() {
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
        components: {
            KinesisContainer, KinesisElement
        }
    }
</script>
