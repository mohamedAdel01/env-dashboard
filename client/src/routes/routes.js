import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/inbox",
    children: [
      {
        path: "inbox",
        name: "inbox",
        component: Dashboard
      },
      {
        path: "important",
        name: "important",
        component: UserProfile
      },
      {
        path: "import",
        name: "import",
        component: TableList
      },
      {
        path: "export",
        name: "export",
        component: Typography
      },
      {
        path: "saved",
        name: "saved",
        component: Icons
      },
      {
        path: "signs",
        name: "signs",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
