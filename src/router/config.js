import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import AddUser from '../views/user-manage/UserAdd.vue'
import UserList from '../views/user-manage/UserList.vue'
import AddNews from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import AddProduct from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import NotFound from '../views/notfound/NotFound.vue'
const routes = [
  {
    path:'/index',
    component:Home
  },
  {
    path:'/center',
    component:Center
  },
  {
    path:'/  ',
    component:AddUser
  },
  {
    path:'/usermanage/userlist',
    component:UserList
  },
  {
    path:'/newsmanage/addnews', 
    component:AddNews
  },
  {
    path:'/newsmanage/newslist',
    component:NewsList
  },
  {
    path:'/productmanage/addproduct',
    component:AddProduct
  },
  {
    path:'/productmanage/productlist',
    component:ProductList
  },
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
  } 
]
export default routes
