<template>
    <div class="has-text-centered">
        <nav class="social-icons">
            <icon-button icon="linkedin" target="_blank" url="https://www.linkedin.com/in/kevinbigelow/"/>
            <icon-button icon="github" target="_blank" url="https://github.com/KevinBigelow"/>
            <icon-button icon="medium" target="_blank" url="https://medium.com/@kevinbigelow"/>
        </nav>
<!--        <span class="grid-contact bizarro-text has-text-white title is-size-5">moc.wolegibnivek@yeh</span>-->
    </div>
</template>

<script>
    import IconButton from "./IconButton";
    export default {
        components: {
            IconButton
        }
    }
</script>

<style lang="scss" scoped>
    .social-icons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 1.5rem;
        @media screen and (min-width: $tablet) {
            justify-content: flex-end;
        }
        @media screen and (min-width: $widescreen) {
            margin: 1rem 0 0;
            justify-content: space-between;
        }
    }
</style>
