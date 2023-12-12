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
        message: '',
        question1: [],
        question2: []
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="mt-5">
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
      <p>Animal pref ?</p>
      <label>
        <input type="checkbox" class="form-checkbox" v-model="formData.question1" value="Chien" />
        Chien
      </label>
      <label>
        <input type="checkbox" class="form-checkbox" v-model="formData.question1" value="Chat" />
        Chat
      </label>
    </div>

    <div class="mb-3">
      <p>Couleur pref ?</p>
      <label>
        <input type="checkbox" class="form-checkbox" v-model="formData.question2" value="Bleu" />
        Bleu
      </label>
      <label>
        <input type="checkbox" class="form-checkbox" v-model="formData.question2" value="Rouge" />
        Rouge
      </label>
      <label>
        <input type="checkbox" class="form-checkbox" v-model="formData.question2" value="Vert" />
        Vert
      </label>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Adresse e-mail</label>
      <input type="email" class="form-control" id="email" v-model="formData.email" required />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" v-model="formData.message" required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
</template>

<style scoped></style>
