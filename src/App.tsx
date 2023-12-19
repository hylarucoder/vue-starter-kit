import {defineComponent, Transition, KeepAlive} from "vue";
import {RouterLink, RouterView} from "vue-router";
import FooterNav from "@/components/FooterNav";
import {Button} from 'ant-design-vue';


export default defineComponent({
    name: "App",
    setup() {
        return () => (
            <>
                <KeepAlive>
                    <RouterView/>
                </KeepAlive>
                <FooterNav/>
                <Button onClick={() => {
                    alert("niubi")
                }}>bbbb</Button>
            </>
        )
    },
});
