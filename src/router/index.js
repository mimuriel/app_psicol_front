import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView'
import StudentNew from '../views/StudentNew'
import StudentEdit from '../views/StudentEdit'
import TeacherView from '../views/TeacherView'
import TeacherNew from '../views/TeacherNew';
import SubjectView from '../views/SubjectView'
import SubjectNew from '../views/SubjectNew'
import StudentSubjectView from '../views/StudentSubjectView'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/viewE',
    name: 'viewE',
    component: StudentView
  }
  ,
  {
    path: '/CreateE',
    name: 'CreateE',
    component: StudentNew
  }
  ,
  {
    path: '/EditE:id',
    name: 'EditE',
    component: StudentEdit
  }
  ,
  {
    path: '/viewT',
    name: 'viewT',
    component: TeacherView
  } ,
  {
    path: '/CreateT',
    name: 'CreateT',
    component: TeacherNew
  },
  {
    path: '/viewA',
    name: 'viewA',
    component: SubjectView
  }   ,
  {
    path: '/CreateA',
    name: 'CreateA',
    component: SubjectNew
  }  ,
  {
    path: '/viewSS',
    name: 'viewSS',
    component: StudentSubjectView
  } 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
