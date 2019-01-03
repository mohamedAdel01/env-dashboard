<template>
  <div v-if="subjects">
    <md-table v-model="subjects">
      <md-table-row slot="md-table-row" slot-scope="{ item }" class="tr">
        <h4 @click="onSelect(item.id)">{{ item.name }}</h4>
        <p>{{ item.discription }}</p>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  props: ['subjects'],
  data() {
    return {
      selected: []
    };
  },
  methods: {
    onSelect(id) {
      this.$emit('selectSub', id)
    },
    dd() {
      console.log('dddd')
    }
  }
};
</script>

<style scoped>
h4{
  font-size: 23px;
  
}

h4:hover{
  text-decoration: underline;
  color: green
}

p{
  font-size: 15px;
}
</style>

