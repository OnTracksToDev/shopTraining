<script>
export default {
  name: 'UserMessage',

  data() {
    return {}
  },
  props: {
    userMessageData: {
      type: Object,
      required: false,
      default: function () {
        return null
      }
    }
  }
}
</script>

<template>
  <div v-if="userMessageData" class="p-4">
    <h2 class="display-4">👋 Bonjour {{ userMessageData.firstName }},</h2>
    <p class="lead">Merveilleux de vous connaître ! 🌟</p>
    <p>Vous résidez dans la charmante ville de 🏙 {{ userMessageData.city }}.</p>

    <p class="h5">En ce qui concerne le style de décoration que vous préférez, vous êtes plutôt fan de :</p>
    <ul class="list-group">
      <li v-for="(style, index) in userMessageData.question1" :key="index" class="list-group-item">{{ style }}</li>
    </ul>

    <p class="h5 mt-4">Et du côté des couleurs, vous avez une préférence pour :</p>
    <ul class="list-group">
      <li v-for="(color, index) in userMessageData.question2" :key="index" class="list-group-item">{{ color }}</li>
    </ul>

    <p class="mt-4">Merci de partager vos goûts de décoration avec nous ! 🏡 Nous sommes impatients de vous aider à créer un espace qui reflète parfaitement votre style unique. 🎨</p>
  </div>
</template>
