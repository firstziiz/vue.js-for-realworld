<template>
  <div>
    <div class="row">
      <div class="col s12">
        <div class="collection">
          <div class="collection-item">
            <textarea v-model.trim="input"></textarea>
            <div @click="post" class="waves-effect waves-light btn blue">Post</div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="twit in twits" class="collection">
      <div class="collection-item">
        <div class="row">
          <div class="col s2">
            <img :src="findUserPhoto(twit.owner)" alt="" class="circle responsive-img">
          </div>
          <div class="col 10">
            {{ findUserName(twit.owner) }} <br>
            {{ twit.content }} <br>
            {{ twit.timestamp | fromNow }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Twit, User } from '../services'
export default {
  data () {
    return {
      input: '',
      twits: [],
      users: []
    }
  },
  methods: {
    post () {
      if (!this.input) return
      Twit.post(this.input)
        .then(() => {
          this.input = ''
        })
    },
    findUserName (id) {
      const x = this.users.find((it) => {
        return it.$id === id
      })
      return x ? x.name : ''
    },
    findUserPhoto (id) {
      const x = this.users.find((it) => {
        return it.$id === id
      })
      return x ? x.photo : ''
    }
  },
  created () {
    Twit.list((list) => {
      this.twits = list
    })
    User.list((list) => {
      this.users = list
    })
  }
}
</script>
