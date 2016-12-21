<template>
  <div>
    <form @submit.prevent="save">
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="name" class="validate">
              <label for="first-name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="description" class="validate">
              <label for="last-name">Description</label>
            </div>
          </div>
          <button hidden></button>
          <div class="right-align">
            <div @click="save" class="waves-effect waves-light btn">Save</div>
            <div @click="$emit('cancel')" class="waves-effect waves-light btn">Cancel</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      name: '',
      description: ''
    }
  },
  created () {
    this.name = this.value.name
    this.description = this.value.description
  },
  watch: {
    value () {
      this.name = this.value.name
      this.description = this.value.description
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description
      })
      this.$emit('saveTrigger', {
        name: this.name,
        description: this.description
      })
    }
  }
}
</script>
