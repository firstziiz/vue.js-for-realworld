<template>
  <div>
    <form @submit.prevent="save">
      <label for="uploadPicture">Photo</label>
      <div class="row">
        <div class="col s4 offset-s4">
          <img v-if="photo" :src="photo" class="circle responsive-img">
        </div>
      </div>
      <div @click="openUpload" id="uploadPicture" name="uploadPicture" class="waves-effect waves-light btn">Upload Photo</div>
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
      <upload-modal ref="upload" @success="uploaded"></upload-modal>
    </form>
  </div>
</template>

<script>
import UploadModal from './UploadModal'
export default {
  components: {
    UploadModal
  },
  props: ['value'],
  data () {
    return {
      name: '',
      description: '',
      photo: ''
    }
  },
  created () {
    this.name = this.value.name
    this.description = this.value.description
    this.photo = this.value.photo
  },
  watch: {
    value () {
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description,
        photo: this.photo
      })
      this.$emit('saveTrigger', {
        name: this.name,
        description: this.description
      })
    },
    openUpload () {
      this.$refs.upload.open()
    },
    uploaded (url) {
      this.photo = url
    }
  }
}
</script>
