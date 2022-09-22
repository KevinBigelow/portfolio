<template>
    <KinesisContainer tag="nav">
        <KinesisElement type="rotate" :strength="5">
            <a :href="url" :target="target" class="flex--column flex-center-center is-family-sans-serif hollow-card has-text-centered is-size-5 has-text-white">
                <font-awesome-icon icon="external-link" class="has-text-grey is-size-4"/>
                <span class="is-underlined mt-2">{{ title }}</span>
            </a>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {

    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        target: {
            type: String,
            default: '_self',
            validate: (value) => {
                return ['_blank', '_self', '_parent', '_top'].includes(value)
            }
        }
    },
    components: {
        KinesisContainer, KinesisElement
    },

}
</script>
