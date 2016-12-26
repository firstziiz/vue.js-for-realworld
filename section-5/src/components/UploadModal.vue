<template>
  <div id="uploadModal" class="modal">
    <div class="modal-content">
      <h4>Upload Picture</h4>
      <input @change="selectedFile" type="file" ref="file" hidden>
      <div v-show="uploading">
        uploading..
        <div class="progress">
          <div ref="progress" class="determinate" style="width: 0%"></div>
        </div>
      </div>
      <div @click="$refs.file.click()" class="waves-effect waves-green btn green">Select File</vid>
    </div>
    <div class="modal-footer">
      <div @click="close" class="waves-effect waves-red btn red">Close</vid>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { Me } from '../services'
export default {
  data () {
    return {
      uploading: false
    }
  },
  methods: {
    open () {
      $(this.$el).modal('open')
    },
    close () {
      $(this.$el).modal('close')
    },
    selectedFile () {
      const file = this.$refs.file.files[0]
      if (!file) return
      const task = firebase.storage().ref(`files/${Me.getId()}`).put(file)
      task.on(firebase.storage.TaskEvent.STATE_CHANGED, (o) => {
        this.uploading = true
        const percent = (o.bytesTransferred / o.totalBytes) * 100
        $(this.$refs.progress).css('width', '' + percent + '%')
        task.then((snapshot) => {
          this.uploading = false
          this.$emit('success', snapshot.downloadURL)
          this.close()
        })
      })
    }
  },
  created () {
    $(document).ready(function () {
      $('.modal').modal({
        dismissible: false
      })
    })
  }
}
</script>
