import {defineComponent, Transition, KeepAlive} from "vue";
import {RouterLink, RouterView} from "vue-router";
import FooterNav from "./components/FooterNav";

export default defineComponent({
    name: "App",
    setup() {
        return () => (
            <>
                <KeepAlive>
                    <RouterView/>
                </KeepAlive>
                <FooterNav/>
            </>
        )
    },
});
