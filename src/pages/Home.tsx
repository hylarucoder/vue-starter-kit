import {defineComponent, ref, withModifiers} from "vue";
import {useCounter} from "@/store";
import {storeToRefs} from "pinia";
import {Button} from "ant-design-vue";

export default defineComponent({
    setup() {
        const storeCounter = useCounter()
        const {count} = storeToRefs(storeCounter)

        return () => (<>
            {/*<Button type="primary">btn</Button>*/}
            <div class="mt-0 min-h-[600px] w-full min-w-[800px] overflow-hidden pb-0 dark:bg-zinc-800">
                <Button type="primary" onClick={withModifiers(storeCounter.increment, ["self"])}>
                    <span>aa</span>
                    {count.value}
                </Button>
            </div>
        </>)
    },
});
