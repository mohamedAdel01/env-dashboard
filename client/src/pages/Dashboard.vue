<template>
  <div class="content" v-if="subjects">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card dir="rtl">
          <template slot="content">
            <span class="md-nav-tabs-title">الوارد :</span>
            <md-tabs md-sync-route class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="الجديد اولا" md-icon="bug_report">
                <nav-tabs-table :subjects="subjects" v-on:selectSub="selectSub($event)"></nav-tabs-table>
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

      <div v-if="select" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="green">
            <!-- info in the sec table-->
            <div class="form-grob row" dir="rtl" v-for="(val,key) in select.info" :key="key">
              <div class="chip">
                <div class="title-bg">{{key}}</div>
                <div class="title-bg2">{{val}}</div>
              </div>
            </div>
            <!-- info in the sec table-->
          </md-card-header>
          <md-card-content>
            <!-- email content on it -->
            <div class="card-body table-responsive" dir="rtl">
              <div class="outer-w3-agile">
                <hr class="grey-text text-lighten-2">
                <div class="email-content-wrap" v-for="(val,i) in select.emailsOnIt" :key="i">
                  <div class="row">
                    <div class="col-9">
                      <ul class="collection">
                        <li class="collection-item selected d-flex justify-content-between">
                          <!-- <img src="../assets/img/profile.jpg" alt="" class="rounded-circle mr-3"> -->
                          <div class="mid-cn">
                            <span class="email-title">المرسل: &nbsp;&nbsp;{{ val.PFrom }}</span>
                            <br>
                            <small class="text-primary">المرسل اليه: &nbsp;&nbsp;{{ val.PTo }}</small>
                            <br>
                            <small class="text-primary">{{ val.date }}</small>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="col-3 email-actions d-flex justify-content-end">
                      <a href="#" class="mr-4">
                        <i class="material-icons">reply</i>
                      </a>
                      <a href="#">
                        <i class="material-icons">more_vert</i>
                      </a>
                    </div>

                  </div>
                  <div class="email-content">
                      <p>{{ val.content }}</p>
                  </div>
                  <hr>
                </div>
                <div class="email-reply mt-4">
                  <div class="row">
                    <div class="col text-center">
                      <a href="#">
                        <i class="material-icons">reply</i>
                      </a>
                      <small class="d-block text-secondary">Reply</small>
                    </div>
                    <div class="col text-center">
                      <a href="#">
                        <i class="material-icons">reply_all</i>
                      </a>
                      <small class="d-block text-secondary">Reply all</small>
                    </div>
                    <div class="col text-center">
                      <a href="#">
                        <i class="material-icons">fast_forward</i>
                      </a>
                      <small class="d-block text-secondary">Forward</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- email content on it -->
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import SubServices from "../Services/sub-services";

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
      subjects: null,
      select: null
    };
  },
  methods: {
    selectSub(id) {
      this.select = this.subjects.filter(sub => sub.id == id)[0];
      console.log(this.select);
    }
  },
  async mounted() {
    let d = (await SubServices.getSubjects()).data;
    this.subjects = d.subjects;
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

.chip {
  padding: 5px;
}

.chip > div {
  display: inline;
}

.tr {
  cursor: pointer;
}
</style>
