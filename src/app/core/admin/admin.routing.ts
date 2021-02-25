import { Routes } from "@angular/router";

import { AnalyticsComponent } from "./analytics/analytics.component";
import { SparePartManagementComponent } from "./spare-part-management/spare-part-management.component";
import { WorkEmergencyComponent } from "./work-emergency/work-emergency.component";
import { MaintenanceBudgetAlocationComponent } from "./maintenance-budget-alocation/maintenance-budget-alocation.component";
import { KpiModuleComponent } from "./kpi-module/kpi-module.component";
import { ForumComponent } from "./forum/forum.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "maintenance-budget-alocation",
        component: MaintenanceBudgetAlocationComponent,
      },
      {
        path: "spare-part-management",
        component: SparePartManagementComponent,
      },
      {
        path: "forum",
        component: ForumComponent,
      },
      {
        path: "work-emergency",
        component: WorkEmergencyComponent,
      },
      
      {
        path: "kpi-module",
        component: KpiModuleComponent,
      },
      {
        path: "analytics",
        component: AnalyticsComponent,
      },
    ],
  },
];
