<template>
    <KinesisContainer class="container article-grid">
        <article-link v-for="article in articles"
                      class="is-flex-grow-1"
                      :key="article.url"
                      :url="article.url"
                      target="_blank"
                      :title="article.title"/>
    </KinesisContainer>
</template>

<script>
import ArticleLink from './ArticleLink'

export default {
    data () {
        return {
            articles: [
                {
                    title: 'Build a checkbox component with Vue 3, Font Awesome, & Tailwind CSS',
                    url: 'https://medium.com/swlh/build-a-checkbox-component-with-vue3-font-awesome-tailwind-css-99d176094b3d'
                },
                {
                    title: 'Build a multi-select checkbox component with Vue 3, Tailwind CSS, and Font Awesome',
                    url: 'https://kevinbigelow.medium.com/create-multiple-custom-checkboxes-bound-to-the-same-array-using-vue-3-and-the-composition-api-cbcdfe6216b7'
                },
                {
                    title: 'Implementing a basic eCommerce cart with and without Vuex',
                    url: 'https://kevinbigelow.medium.com/implementing-a-basic-e-commerce-cart-with-and-without-vuex-79a68a612157'
                }
            ]
        }
    },
    components: {
        'article-link': ArticleLink
    }
}
</script>

<style lang="scss">
    .article-grid {
        width: 100%;
        margin: 5rem 0;
        padding: 1rem 3rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
        @media screen and (min-width: $tablet) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>

