import {defineComponent, ref} from "vue";
import {Tabbar, TabbarItem, Toast} from "vant";

export default defineComponent({
    name: "FooterNav",
    setup() {
        const active = ref(0);
        const onChange = (index) => Toast(`标签 ${index}`);

        return () => (
            <Tabbar safeAreaInsetBottom={true} v-model={active.value} onChange={onChange} >
                <TabbarItem icon="home-o" to={"/"} >首页</TabbarItem>
                <TabbarItem icon="friends-o" to={"/profile"}>会员</TabbarItem>
            </Tabbar>
        )
    },
    data() {
        return {
            links: [],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        console.log("FooterNav mounted")
    },
    created() {
        console.log("FooterNav created")
    },
    beforeCreate() {
        console.log("FooterNav before created")
    },
});
