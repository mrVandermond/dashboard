import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { RoutePaths } from '@/enums/PageNameRouter';

const HomeView = () => import('../views/HomeView.vue');
const LoginView = () => import('../views/LoginView.vue');
const OverviewView = () => import('../views/OverviewView.vue');
const DashboardView = () => import('../views/DashboardView.vue');
const AnalyzeView = () => import('../views/AnalyzeView.vue');
const EventsView = () => import('../views/EventsView.vue');
const ChartsView = () => import('../views/ChartsView.vue');
const PaymentView = () => import('../views/PaymentView.vue');
const VisualLabelingView = () => import('../views/VisualLabelingView.vue');
const LiveDataFeedView = () => import('../views/LiveDataFeedView.vue');
const UpdatesView = () => import('../views/UpdatesView.vue');
const IntegrationsView = () => import('../views/IntegrationsView.vue');
const SupportView = () => import('../views/SupportView.vue');
const AccountView = () => import('../views/AccountView.vue');
const SignOutView = () => import('../views/SignOutView.vue');
const AddWorkerView = () => import('../views/AddWorkerView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${RoutePaths.HOME}`,
    component: HomeView,
    children: [
      {
        path: RoutePaths.OVERVIEW,
        component: OverviewView,
      },
      {
        path: RoutePaths.DASHBOARD,
        component: DashboardView,
      },
      {
        path: RoutePaths.ANALYZE,
        component: AnalyzeView,
      },
      {
        path: RoutePaths.EVENTS,
        component: EventsView,
      },
      {
        path: RoutePaths.CHARTS,
        component: ChartsView,
      },
      {
        path: RoutePaths.PAYMENT,
        component: PaymentView,
      },
      {
        path: RoutePaths.VISUAL_LABELING,
        component: VisualLabelingView,
      },
      {
        path: RoutePaths.LIVE_DATA_FEED,
        component: LiveDataFeedView,
      },
      {
        path: RoutePaths.UPDATES,
        component: UpdatesView,
      },
      {
        path: RoutePaths.INTEGRATIONS,
        component: IntegrationsView,
      },
      {
        path: RoutePaths.SUPPORT,
        component: SupportView,
      },
      {
        path: RoutePaths.ACCOUNT,
        component: AccountView,
      },
    ],
  },
  {
    path: `/${RoutePaths.LOGIN}`,
    component: LoginView,
  },
  {
    path: `/${RoutePaths.SIGN_OUT}`,
    component: SignOutView,
  },
  {
    path: `/${RoutePaths.ADD_WORKER}`,
    component: AddWorkerView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
