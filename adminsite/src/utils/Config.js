class Config{
    static customersUrl = "http://127.0.0.1:8000/delicrave/customers/"
    static categoriesUrl = "http://127.0.0.1:8000/delicrave/categories/"
    static flavorsUrl = "http://127.0.0.1:8000/delicrave/flavors/"
    static dessertsUrl = "http://127.0.0.1:8000/delicrave/desserts/"
    static unitsUrl = "http://127.0.0.1:8000/delicrave/units/"
    static ordersUrl = "http://127.0.0.1:8000/delicrave/orders/"
    static flavorcatsUrl = "http://127.0.0.1:8000/delicrave/flavorcats/"
    static wishlistsUrl = "http://127.0.0.1:8000/delicrave/wishlists/"
    static catalogitemsUrl = "http://127.0.0.1:8000/delicrave/catalogitems/"
    static customercartsUrl = "http://127.0.0.1:8000/delicrave/customercarts/"
    static cartitemsUrl = "http://127.0.0.1:8000/delicrave/cartitems/"
    static orderitemsUrl = "http://127.0.0.1:8000/delicrave/orderitems/"
    static loginUrl = "http://127.0.0.1:8000/delicrave/login/"
    static logoutUrl = "http://127.0.0.1:8000/delicrave/logout/"
    
    static sidebarItem = [
        {index:0, title:"Dashboard", url:"/admin/dashboard", icon:"fa-laptop"},
        {index:1, title:"Desserts", url:"/admin/desserts", icon:"fa-ice-cream"},
        {index:2, title:"Orders", url:"/admin/orders", icon:"fa-box"},
        {index:3, title:"Categories", url:"/admin/categories", icon:"fa-list"},
        {index:4, title:"Flavors", url:"/admin/flavors", icon:"fa-eye-dropper"},
    ]
}
export default Config