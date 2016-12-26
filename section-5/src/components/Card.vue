<template>
      <div class="row">
          <div class="card red-lighten-3 darken-1">
            <div class="row">
                <div class="col s2 valign-wrapper">
                    <div class="valign">
                        <DisplayPicture></DisplayPicture>
                    </div>
                </div>
                <div class="col s10">
                    <div class="card-content">
                        <span v-text="title" class="card-title red-text"></span>
                        <p v-text="content" class="black-text"></p>
                    </div>
                    <div class="card-action">
                        <div class="right-align grey-text">- "{{ name }}"</div>
                    </div>
                </div>
            </div>
          </div>
      </div>
</template>

<script>
import DisplayPicture from './DisplayPicture'
export default {
  components: {
    DisplayPicture
  },
  data () {
    return {
      title: 'Title',
      name: 'Owner',
      content: 'Bla Bla Bla.',
      imageSrc: 'X'
    }
  },
  props: ['name', 'content', 'title', 'imageSrc']
}
</script>