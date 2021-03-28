import {defineComponent} from 'vue';
import {Button} from 'vant';


export default defineComponent({
    name: 'AApp',
    setup() {
        return () => (
            <Button type="primary">btn</Button>
        );
    }
});
