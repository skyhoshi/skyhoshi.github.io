import { sidebar } from "./sidebar/sidebar";
window.onload = () => {
    var application = new sidebar();
    application.init();
    console.log("application initialized")
};


declare global{
    interface JQuery{
        mCustomScrollbar(arg:any): JQuery;
    }
}