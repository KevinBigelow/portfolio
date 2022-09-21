<template>
    <div class="article-grid">
        <h3 class="article-linkout-heading has-text-centered is-size-3 flex--column flex-center-center"><font-awesome-icon :icon="['far', 'file-lines']"/><span>Check out these articles I wrote</span></h3>
        <article-link v-for="article in articles"
                      :key="article.url"
                      :url="article.url"
                      target="_blank"
                      :title="article.title"/>
    </div>
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
        z-index: 1;
        position: relative;
        width: 100%;
        padding: 3rem 0;
        margin: 3rem 0;
        display: grid;
        grid-column-gap: 2rem;
        align-items: center;
        grid-template-columns: 1fr;
        @media screen and (min-width: $tablet) {
            grid-template-areas: "title title title";
            grid-template-rows: 100px 1fr;
            grid-template-columns: 1fr 1fr 1fr;
        }
        &:before {
            content: '';
            background: #11111A;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 2rem;
            left: 2rem;
            border-radius: $border-radius-20;
        }
        .article-linkout-heading {
            margin: -2rem 0 0 0;
            z-index: 2;
            grid-area: title;
        }
    }
</style>

