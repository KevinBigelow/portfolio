<template>
    <KinesisContainer class="app-navbar app-navbar-grid" tag="nav">
        <h2 class="app-navbar--subtitle has-text-primary grid-title">UI Designer & Developer</h2>
        <h1 class="app-navbar--title title has-text-white grid-name is-marginless">Kevin Bigelow</h1>
        <div class="grid-actions mt-5">
            <transition name="router-anim" enter-active-class="animated bounceIn delay-1s" leave-active-class="animated zoomOut">
                <KinesisElement type="depth" :strength="9">
                    <a :href="baseUrl + 'kevinbigelow_resume_8-18-22.pdf'"
                       target="_blank"
                       class="app-navbar--button button is-layered is-primary-gradient is-primary is-medium is-margin-centered is-block"><font-awesome-icon class="mr-1" :icon="['far', 'file-pdf']" /> Résumé</a>
                </KinesisElement>
            </transition>
        </div>
        <div class="grid-contact has-text-centered">
            <nav class="level ph-1">
                <icon-button class="level-item" icon="linkedin" target="_blank" url="https://www.linkedin.com/in/kevinbigelow/"/>
                <icon-button class="level-item" icon="github" target="_blank" url="https://github.com/KevinBigelow"/>
                <icon-button class="level-item" icon="medium" target="_blank" url="https://medium.com/@kevinbigelow"/>
            </nav>
            <span class="grid-contact bizarro-text has-text-white title is-size-5">moc.wolegibnivek@yeh</span>
        </div>
    </KinesisContainer>
</template>

<script>
    import axios from 'axios'
    import IconButton from "./IconButton";
    import { KinesisContainer, KinesisElement } from 'vue-kinesis'

    export default {
        data () {
            return {
                baseUrl: process.env.VUE_APP_BASE_URL
            }
        },
        methods: {
            downloadItem ({ url, label }) {
                axios.get(url, { responseType: 'blob' })
                    .then(response => {
                        const blob = new Blob([response.data], { type: 'application/pdf' })
                        const link = document.createElement('a')
                        link.href = URL.createObjectURL(blob)
                        link.download = label
                        link.click()
                        URL.revokeObjectURL(link.href)
                    }).catch(window.console.error)
            }
        },
        components: {
            KinesisContainer, KinesisElement, IconButton
        }
    }
</script>
