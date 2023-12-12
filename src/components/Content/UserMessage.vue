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
    <h2>Bonjour ✌🏽: {{ userMessageData.firstName }}</h2>
    <p>Cette magnifique ville de 🏙: {{ userMessageData.city }}.</p>
    <p>INFOS METEO (API)🌤</p>

    <p>Animal pref ♥️:</p>
    <ul>
      <li v-for="(animal, index) in userMessageData.question1" :key="index">{{ animal }}</li>
    </ul>

    <p>Color pref 🎨:</p>
    <ul>
      <li v-for="(color, index) in userMessageData.question2" :key="index">{{ color }}</li>
    </ul>
  </div>
</template>
