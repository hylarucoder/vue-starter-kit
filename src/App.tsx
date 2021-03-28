import {defineComponent, Transition, KeepAlive} from "vue";
import {RouterLink, RouterView} from "vue-router";
import FooterNav from "./components/FooterNav";

export default defineComponent({
    name: "App",
    setup() {
        return () => (
            <div>
                <Transition name="slide-fade">
                    <KeepAlive>
                        <RouterView/>
                        <FooterNav/>
                    </KeepAlive>
                </Transition>
            </div>
        )
    },
});
