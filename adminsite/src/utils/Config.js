class Config{
    static dashboardUrl = "/admin/dashboard"

    static sidebarItem = [
        {index:0, title:"Dashboard", url:"/admin/dashboard", icon:"fa-laptop"},
        {index:1, title:"Desserts", url:"/admin/desserts", icon:"fa-ice-cream"},
        {index:2, title:"Orders", url:"/admin/orders", icon:"fa-box"},
        {index:3, title:"Categories", url:"/admin/categories", icon:"fa-list"},
        {index:4, title:"Flavors", url:"/admin/flavors", icon:"fa-eye-dropper"},
        {index:5, title:"Units", url:"/admin/units", icon:"fa-scale-balanced"},
    ]
}
export default Config