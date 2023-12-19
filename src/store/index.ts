import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounter = defineStore("counter", () => {

    const count = ref(0)

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    return {
        count,
        increment,
        decrement,
    }
})


