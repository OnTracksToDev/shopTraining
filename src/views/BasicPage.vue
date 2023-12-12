<script>
import UserForm from '../Form/UserForm.vue'
import UserMessage from '../Content/UserMessage.vue'

export default {
  name: 'BasicPage',
  components: {
    UserForm,
    UserMessage
  },

  data() {
    return {
      userData: null
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      this.userData = formData
    }
  }
}
</script>

<template>
  <div class="row">
    <h2 class="text-center pt-5">Titre Surprise</h2>
    <div class="col-lg-6">
      <user-form @formSubmitted="handleFormSubmitted"> </user-form>
    </div>
    <div class="col-lg-6 d-flex justify-content-center align-items-center">
      <user-message :userMessageData="userData"> </user-message>
    </div>
  </div>
</template>
