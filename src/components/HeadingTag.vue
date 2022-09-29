<template>
    <component :is="headingTag" class="mb-2 mt-2" :class="`is-size-${level}`">
        <slot/>
    </component>
</template>

<script>
    export default {
        props: {
            level: {
                type: Number,
                required: true,
                validate: (value) => {
                    return [1,2,3,4,5,6].includes(value)
                }
            }
        },
        computed: {
            headingTag() {
                return 'h' + this.level
            }
        }
    }
</script>
