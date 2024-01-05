<script>
import UserForm from '@/components/Form/UserForm.vue'
import UserMessage from '@/components/Content/UserMessage.vue'

export default {
  name: 'HelloPage',
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
    <h2 class="text-center pt-5">A propos de vous</h2>
    <div class="col-lg-6">
      <user-form @formSubmitted="handleFormSubmitted"> </user-form>
    </div>
    <div class="col-lg-6 d-flex justify-content-center align-items-center">
      <user-message :userMessageData="userData"> </user-message>
    </div>
  </div>
</template>
