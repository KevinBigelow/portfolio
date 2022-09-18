<template>
    <KinesisElement type="depth" :strength="9">
        <a :href="url" :target="target" class="flex--column flex-center-center is-family-sans-serif hollow-card has-text-centered has-text-white">
            <font-awesome-icon icon="external-link" class="has-text-grey is-size-4"/>
            <span class="is-underlined mt-2">{{ title }}</span>
        </a>
    </KinesisElement>
</template>

<script>
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

}
</script>
