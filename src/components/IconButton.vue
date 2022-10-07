<template>
    <KinesisContainer class="has-text-centered icon-wrap">
        <KinesisElement type="depth">
            <a :href="url" target="_blank" class="icon-button">
                <font-awesome-icon :icon="['fab', icon]" class="icon"/>
            </a>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
    import { KinesisContainer, KinesisElement } from 'vue-kinesis'

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
        },
        components: {
            KinesisContainer, KinesisElement
        }
    }
</script>

<style lang="scss">
.icon-wrap {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-button {
    color: $grey-lightest;
    transition: color .25s;
    &:hover {
        color: $white;
    }
    .icon {
        width: 2rem;
        height: 2rem;
    }
}
</style>
