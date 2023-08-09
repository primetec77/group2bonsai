<template>
    <div>
       <a :href="link" :class="['btn', 'btn-' + color ,'shadow', 'mb-3', 'text-center']">{{ msg }}</a>
    </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    msg: String,
    link: String,
    color: String
  }
}
</script>

<style>

</style>
