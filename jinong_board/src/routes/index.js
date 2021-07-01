import { createWebHistory, createRouter } from "vue-router";
import List from '../components/List.vue';
import Create from '../components/Create.vue';
import Edit from '../components/Edit.vue';
import Detail from '../components/Detail.vue';
import Error from '../components/Error.vue';

const routes = [
  {
	path: "/board/:id",
	component: Detail,
  },
  {
	path: "/board/create",
	component: Create,
  },
  {
	path: "/board/:id/edit",
	component: Edit,
  },
  {
	path: "/:any(.*)",
	component: Error,
  },
  {
    path: "/",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 