<template>
    <KinesisContainer class="app-navbar app-navbar-grid" tag="nav" type="depth">
        <h2 class="app-navbar--subtitle has-text-primary grid-title">UI Engineer</h2>
        <h1 class="app-navbar--title title has-text-white grid-name is-marginless"><router-link :to="{name: 'home'}" class="has-text-white">Kevin Bigelow</router-link></h1>
        <div class="grid-actions">
            <KinesisElement type="depth" :strength="9">
                <a :href="baseUrl + 'kevinbigelow_resume_8-18-22.pdf'"
                   target="_blank"
                   class="app-navbar--button button is-layered is-primary-gradient is-primary is-medium is-margin-centered is-block"><font-awesome-icon class="mr-1" :icon="['far', 'file-pdf']" /> Résumé</a>
            </KinesisElement>
        </div>
        <contact-details class="grid-contact"/>
    </KinesisContainer>
</template>

<script>
    import ContactDetails from "./ContactDetails";
    import { KinesisContainer, KinesisElement } from 'vue-kinesis'

    export default {
        data () {
            return {
                baseUrl: process.env.VUE_APP_BASE_URL
            }
        },
        components: {
            KinesisContainer, KinesisElement, ContactDetails
        }
    }
</script>
