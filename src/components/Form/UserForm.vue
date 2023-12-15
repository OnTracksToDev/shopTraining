<script>
export default {
  name: 'UserForm',
  data() {
    return {
      formData: {
        firstName: '',
        city: '',
        email: '',
        message: '',
        question1: [],
        question2: []
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('formSubmitted', this.formData)
      console.log(this.formData)
      this.formData = {
        firstName: '',
        city: '',
        email: '',
        question1: [],
        question2: []
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="mt-1">
    <div class="mb-3">
      <label for="firstName" class="form-label">Prénom</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="formData.firstName"
        required
      />
    </div>

    <div class="mb-3">
      <label for="city" class="form-label">Ville</label>
      <input type="text" class="form-control" id="city" v-model="formData.city" required />
    </div>

    <div class="mb-3">
      <p class="h5">Quel type de décoration préférez-vous ?</p>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="moderne" v-model="formData.question1" value="Moderne" />
        <label class="form-check-label" for="moderne">Moderne</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="classique" v-model="formData.question1" value="Classique" />
        <label class="form-check-label" for="classique">Classique</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="vintage" v-model="formData.question1" value="Vintage" />
        <label class="form-check-label" for="vintage">Vintage</label>
      </div>
    </div>

    <div class="mb-3">
      <p class="h5">Couleur préférée ?</p>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="bleu" v-model="formData.question2" value="Bleu" />
        <label class="form-check-label" for="bleu">Bleu</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="rouge" v-model="formData.question2" value="Rouge" />
        <label class="form-check-label" for="rouge">Rouge</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="vert" v-model="formData.question2" value="Vert" />
        <label class="form-check-label" for="vert">Vert</label>
      </div>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Adresse e-mail</label>
      <input type="email" class="form-control" id="email" v-model="formData.email" required />
    </div>


    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
</template>

<style scoped></style>
