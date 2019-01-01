<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card dir="rtl">
          <template slot="content">
            <span class="md-nav-tabs-title">الوارد :</span>
            <md-tabs md-sync-route class="md-success" md-alignment="left">

              <md-tab id="tab-home" md-label="الجديد اولا" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="المفضل الزملاء" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="الزملاء" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="green">
            <!-- new code -->
              <div class="form-grob row" dir="rtl">
                <div class="chip">
                  <div class="title-bg">مسلسل</div>
                  <div class="title-bg2">123456789</div>
                </div>
              </div>
            <!-- new code -->
          </md-card-header>
          <md-card-content>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // will remove this components...

  // StatsCard,
  // ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  components: {
  // will remove this components...

    // StatsCard,
    // ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.title-bg {
    background: #eee;
    float: right;
    padding: 5px;
    color: #333;
}

.title-bg2 {
    background: #fff;
    float: right;
    padding: 5px;
    color: #333;
}

.form-group {
    padding-bottom: 10px;
    position: relative;
    margin: 8px 0 0;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.chip{
  padding: 5px
}
</style>
