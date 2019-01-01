<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar >
      <mobile-menu slot="content"></mobile-menu>
      <div>
        <div v-for="(val,i) in list" :key="i">
          <sidebar-link :to="val.route">
            <md-icon>{{ val.icon }}</md-icon>
            <p>{{ val.name }}</p>
          </sidebar-link>
        </div>
      </div>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import ListServices from "../../Services/list-services"

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data(){
    return{
      list: null
    }
  },
  async created() {
    let d = (await ListServices.getListItems()).data
    this.list = d.items
  }
};
</script>
