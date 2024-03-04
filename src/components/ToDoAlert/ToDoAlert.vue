<template>
    <Transition @after-leave="removeAlert">
        <div
            v-if="showAlert"
            :class="setWrapperClass"
        >
            <div class="alertWrapper__alertImgContainer">
                <img
                    class="alertWrapper__alertImg"
                    :src="setSvgImage"
                >
            </div>
            <div :class="setMessageContainerClass">
                <h3 class="alertWrapper__header">
                    {{ message.title }}
                </h3>
                <p>{{ message.text }}</p>
            </div>
            <div class="alertWrapper__btnContainer">
                <ToDoButton
                    :btnClass="setBtnClass"
                    @click="handleDeleteClick"
                />
            </div>
        </div>
    </Transition>
</template>
<script>
import '@/components/ToDoAlert/ToDoAlert.scss';
import infoImg from '@/components/assets/infoImg.svg';
import errorImg from '@/components/assets/errorImg.svg';
import ToDoButton from '@/components/ToDoButton/ToDoButton.vue';

export default {
    components: {
        ToDoButton,
    },
    props: {
        message: {
            type: Object,
            default: null,
        },
        type: {
            type: String,
            default: null,
        },
        persistent: Boolean,
    },
    emits: ['removeToDoAlert'],
    data() {
        return {
            showAlert: false,
            infoImg: infoImg,
            errorImg: errorImg,
            timerId: null,
        };
    },
    computed: {
        setWrapperClass() {
            if (this.showAlert) {
                if (this.type === 'error') {
                    return ['alertWrapper', 'alertWrapper--error'];
                } else if (this.type === 'info') {
                    return ['alertWrapper', 'alertWrapper--info'];
                }
            }
            return null;
        },

        setMessageContainerClass() {
            if (this.showAlert) {
                if (this.type === 'error') {
                    return ['alertWrapper__messageContainer', 'alertWrapper__messageContainer--error'];
                } else if (this.type === 'info') {
                    return ['alertWrapper__messageContainer', 'alertWrapper__messageContainer--info'];
                }
            }
            return null;

        },

        setSvgImage() {
            return this.type === 'error' ? this.errorImg : this.type === 'info' ? this.infoImg : null;
        },

        setBtnClass() {
            if (this.type === 'error') {
                return ['btn--alertDelete', 'btn--alertDelete-error'];
            } else if (this.type === 'info') {
                return ['btn--alertDelete', 'btn--alertDelete-info'];
            }
            return null;
        },
    },
    mounted() {
        this.showAlert = true;

        if (!this.persistent) {
            this.timerId = setTimeout(() => {
                this.showAlert = false;
            }, 3000);
        }
    },
    beforeUnmount() {
        clearTimeout(this.timerId);
    },
    methods: {
        removeAlert() {
            this.$emit('removeToDoAlert');
        },

        handleDeleteClick() {
            this.showAlert = false;
        },
    },
};
</script>
