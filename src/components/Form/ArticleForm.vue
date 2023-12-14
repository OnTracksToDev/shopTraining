<script>
import { mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'

export default {
  name: 'ArticleForm',
  emits: ['addArticleToList', 'updateArticleToList'],
  watch: {
    // Si editMode est à true => activation de l'édition
    // eslint-disable-next-line no-unused-vars
    articleToEdit(newArticleToEdit, oldArticleToEdit) {
      if (this.editMode === true && newArticleToEdit != null) {
        this.reset()
        this.editionMode = true
        this.nom = newArticleToEdit.nom
        this.categorie = newArticleToEdit.categorie
        this.prix = newArticleToEdit.prix
        this.stock = newArticleToEdit.stock
        this.imgUrl = newArticleToEdit.imgUrl
        this.imgAlt = newArticleToEdit.imgAlt
        this.description = newArticleToEdit.description
        this.prioriteDescription = newArticleToEdit.prioriteDescription
      } else {
        this.editionMode = false
      }
    }
  },
  props: {
    editMode: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    articleToEdit: {
      type: Object,
      required: false,
      default: function () {
        return null
      }
    }
  },
  data() {
    return {
      editionMode: this.editMode,
      error: null,
      submitFormValidation: false,
      nom: null,
      categorie: null,
      prix: null,
      stock: null,
      imgUrl: null,
      imgAlt: null,
      description: null,
      prioriteDescription: null
    }
  },
  methods: {
    formSubmit() {
      this.submitFormValidation = true
      let newArticle = this.articleMapper
      if (this.submitFormValidation && this.editionMode === true && this.articleToEdit != null) {
        newArticle.id = this.articleToEdit.id
        this.$emit('updateArticleToList', newArticle)
        this.updateArticleToListAction(newArticle)
        this.reset()
      }
      if (this.submitFormValidation && this.editionMode === false) {
        newArticle.id = Math.floor(Math.random() * Date.now())
        this.$emit('addArticleToList', newArticle)
        this.addArticleToListAction(newArticle)
        this.reset()
      }
    },
    errorHandler(err) {
      this.error = this.error != null ? `${this.error} -- ${err}` : `${err}`
    },
    reset() {
      this. editionMode= null
      this.error = null
      this.submitFormValidation = false
      this.submitFormTest = true
      this.nom = null
      this.categorie = null
      this.prix = null
      this.stock = null
      this.imgUrl = null
      this.imgAlt = null
      this.description = null
      this.prioriteDescription = null
    },
    resetError() {
      this.error = null
    },
    setSubmitFormValidation(val) {
      this.submitFormValidation = val
    },
    ...mapActions(useArticlesStore, {
      addArticleToListAction: 'addArticleToList',
      updateArticleToListAction: 'updateArticleToList'
    })
  },
  computed: {
    articleMapper() {
      let articleMapModel = {}
      this.resetError()
      this.setSubmitFormValidation(true)
      if (this.nom) {
        articleMapModel.nom = this.nom
      } else {
        this.errorHandler('Le Nom est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      if (this.categorie) {
        articleMapModel.categorie = this.categorie
      } else {
        this.errorHandler('La Categorie est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      if (this.prix) {
        articleMapModel.prix = this.prix
      } else {
        this.errorHandler('Le prix est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      if (this.stock) {
        articleMapModel.stock = this.stock
      } else {
        this.errorHandler('Le stock est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      if (this.imgUrl) {
        articleMapModel.imgUrl = this.imgUrl
      } else {
        this.errorHandler('imgUrl est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      if (this.imgAlt) {
        articleMapModel.imgAlt = this.imgAlt
      } else {
        this.errorHandler('imgAlt est Obligatoire !')
        this.setSubmitFormValidation(false)
      }
      articleMapModel.description = this.description
      articleMapModel.prioriteDescription = this.prioriteDescription
      return articleMapModel

    }
  }
}
</script>

<template>
  <h2 class="text-center">Gestion article</h2>

  <section class="container">
    <h2 class="text-center">Article Form {{ editionMode === true ? 'Edition' : 'Nouveau ' }}</h2>
    <div v-if="error" class="alert alert-warning">
      {{ error }}
    </div>
    <form @submit.prevent="formSubmit">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          aria-describedby="nom-help"
          v-model="nom"
          required
        />
        <div id="nom-help" class="form-text">
          Nous ne partagerons jamais votre article avec qulequ'un d'autre, sauf si vous le demandez !
        </div>
      </div>
      <div class="mb-3">
        <label for="categorie" class="form-label">categorie</label>
        <input
          type="text"
          class="form-control"
          id="categorie"
          aria-describedby="categorie-help"
          v-model="categorie"
          required
        />
        <div id="categorie-help" class="form-text">Parlons de la categorie!</div>
      </div>
      <div class="mb-3">
        <label for="prix" class="form-label">prix</label>
        <input
          type="text"
          class="form-control"
          id="prix"
          aria-describedby="prix-help"
          v-model="prix"
          required
        />
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">stock</label>
        <input
          type="text"
          class="form-control"
          id="stock"
          aria-describedby="stock-help"
          v-model="stock"
          required
        />
        <div id="stock-help" class="form-text">On veut le stock !</div>
      </div>
      <div class="mb-3">
        <label for="imgUrl" class="form-label">imgUrl</label>
        <input
          type="text"
          class="form-control"
          id="imgUrl"
          aria-describedby="imgUrl-help"
          v-model="imgUrl"
          required
        />
      </div>
      <div class="mb-3">
        <label for="imgAlt" class="form-label">imgAlt</label>
        <input
          type="text"
          class="form-control"
          id="imgAlt"
          aria-describedby="imgAlt-help"
          v-model="imgAlt"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="description">
        </textarea>
      </div>
      <div class="mb-3">
        <label for="prioriteDescription" class="form-label">prioriteDescription</label>
        <textarea class="form-control" id="prioriteDescription" rows="3" v-model="prioriteDescription">
        </textarea>
      </div>

      <button type="submit" class="btn btn-primary">
        {{ editionMode === true ? 'Update' : 'Valider' }}
      </button>
      <button  @click="reset" class="btn btn-warning">Reset</button>
    </form>
  </section>
</template>
