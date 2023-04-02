import { createRouter, createWebHistory } from 'vue-router';
import { RoutePaths } from '@/enums/PageNameRouter.ts';

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

const routes = [
  {
    path: RoutePaths.HOME,
    name: 'home',
    component: HomeView,
  },
  {
    path: RoutePaths.LOGIN,
    name: 'login',
    component: LoginView,
  },
  {
    path: RoutePaths.OVERVIEW,
    name: 'overview',
    component: OverviewView,
  },
  {
    path: RoutePaths.DASHBOARD,
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: RoutePaths.ANALYZE,
    name: 'analyze',
    component: AnalyzeView,
  },
  {
    path: RoutePaths.EVENTS,
    name: 'events',
    component: EventsView,
  },
  {
    path: RoutePaths.CHARTS,
    name: 'charts',
    component: ChartsView,
  },
  {
    path: RoutePaths.PAYMENT,
    name: 'payment',
    component: PaymentView,
  },
  {
    path: RoutePaths.VISUAL_LABELING,
    name: 'visual-labeling',
    component: VisualLabelingView,
  },
  {
    path: RoutePaths.LIVE_DATA_FEED,
    name: 'live-data-feed',
    component: LiveDataFeedView,
  },
  {
    path: RoutePaths.UPDATES,
    name: 'updates',
    component: UpdatesView,
  },
  {
    path: RoutePaths.INTEGRATIONS,
    name: 'integrations',
    component: IntegrationsView,
  },
  {
    path: RoutePaths.SUPPORT,
    name: 'support',
    component: SupportView,
  },
  {
    path: RoutePaths.ACCOUNT,
    name: 'account',
    component: AccountView,
  },
  {
    path: RoutePaths.SIGN_OUT,
    name: 'sign-out',
    component: SignOutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
