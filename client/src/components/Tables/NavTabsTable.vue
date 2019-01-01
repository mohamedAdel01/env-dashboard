<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <h4>اسم الموضوع</h4>
        <p>{{ item.name }}</p>
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
  data() {
    return {
      selected: [],
      users: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?"
        },
        {
          name:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
