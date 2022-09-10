<template>
    <div class="level-item has-text-centered">
        <a :href="url" target="_blank" class="is-size-3 icon-button">
            <font-awesome-icon :icon="['fab', icon]" />
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
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
        }
    }
</script>

<style lang="scss">
.icon-button {
    color: $grey-lightest;
    &:hover {
        color: $primary;
    }
}
</style>
