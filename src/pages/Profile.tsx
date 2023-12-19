import {withModifiers} from "vue";

export default defineComponent({
    name: "PageHome",
    setup: function () {
        const count = ref(0);
        const inc = () => {
            count.value++;
        };
        return () => (<>
            <button onClick={withModifiers(inc, ["self"])}>{count.value}</button>
        </>)
    },
});
