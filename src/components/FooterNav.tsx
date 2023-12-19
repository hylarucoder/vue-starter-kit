import {defineComponent, ref} from "vue";

export default defineComponent({
    setup() {
        const active = ref(0);
        const onChange = (index) => (`标签 ${index}`);

        return () => (
            <div>
                tab
            </div>
        )
    },
    data() {
        return {
            links: [],
        }
    },
    computed: {},
    watch: {},
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
