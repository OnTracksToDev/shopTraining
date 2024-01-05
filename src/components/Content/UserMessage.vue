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
    <p class="lead">Bienvenue dans votre univers de décoration ! ✨</p>
    <p>Nous sommes ravis de vous accueillir dans notre communauté. 🏡</p>

    <p class="h5">En explorant votre style de décoration, nous avons remarqué que vous êtes particulièrement attiré(e) par :</p>
    <ul class="list-group">
      <li v-for="(style, index) in userMessageData.question1" :key="index" class="list-group-item">{{ style }}</li>
    </ul>

    <p class="h5 mt-4">En ce qui concerne les couleurs, votre préférence se tourne vers :</p>
    <ul class="list-group">
      <li v-for="(color, index) in userMessageData.question2" :key="index" class="list-group-item">{{ color }}</li>
    </ul>

    <p class="mt-4">Vos choix de décoration sont uniques et spéciaux, tout comme vous ! 💖 Nous sommes impatients de collaborer avec vous pour transformer votre maison en un espace qui raconte votre histoire personnelle. 🎨</p>
  </div>
</template>
