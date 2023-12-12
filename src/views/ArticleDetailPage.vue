<script>
import ArticleDetail from '@/components/Content/ArticleDetail.vue';    

export default {
        name:"ArticleDetailPage",
        components: {
            ArticleDetail
        },
        data() {
            return {
                articleId: this.$route.params.id
            }
        },
    }
</script>

<template>
    <section >
        <section >
            <h2> Detail Page</h2>
            <ArticleDetail
                :articleId="articleId"
            />
        </section>
    </section>
    
</template>