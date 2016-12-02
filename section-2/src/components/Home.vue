<template lang="html">
  <div class="row">
    <div class="col-xs-12" v-for="item in items">
      <div class="panel panel-default">
        <div class="panel-heading">
          Caption {{ item }}
        </div>
        <div class="panel-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellendus corporis quasi dolor perferendis eum accusamus porro hic saepe distinctio reprehenderit non reiciendis, sunt error in neque ipsa architecto sapiente.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
</style>
