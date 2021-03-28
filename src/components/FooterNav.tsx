import {defineComponent} from "vue";
import {Tabbar, TabbarItem} from "vant";

export default defineComponent({
    name: "FooterNav",
    setup() {
        return () => (<Tabbar>
            <TabbarItem icon="home-o" to={"/"}>首页</TabbarItem>
            <TabbarItem icon="orders-o" to={"/profile"}>会员</TabbarItem>
        </Tabbar>);
    },
});
