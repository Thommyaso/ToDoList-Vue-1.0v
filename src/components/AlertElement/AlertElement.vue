<template>
        <Transition @after-leave="removeAlert">
            <div v-if="showAlert" :class="setWrapperClass">
                <div class="alertWrapper__alertImgContainer">
                    <img class="alertWrapper__alertImg" :src="setSvgImage">
                </div>
                <h3 :class="setHeaderClass">{{message}}</h3>
                <div class="alertWrapper__btnContainer">
                    <ButtonElement
                        :btnClass="setBtnClass"
                        @click="handleDeleteClick"
                    />
                </div>
            </div>
        </Transition>
</template>
<script>
import '@/components/AlertElement/AlertElement.scss';
import infoImg from '@/components/assets/infoImg.svg';
import errorImg from '@/components/assets/errorImg.svg';
import ButtonElement from '@/components/ButtonElement/ButtonElement.vue';

export default {
    data() {
        return {
            showAlert: false,
            infoImg: infoImg,
            errorImg: errorImg,
        };
    },
    props: {
        message: String,
        type: String,
        index: String,
    },
    components: {
        ButtonElement,
    },
    mounted() {
        this.showAlert = true;
        if (import.meta.env.STORYBOOK) {
            return;
        }
        setTimeout(() => {
            this.showAlert = false;
        }, 10000);
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

        setHeaderClass() {
            if (this.showAlert) {
                if (this.type === 'error') {
                    return ['alertWrapper__header', 'alertWrapper__header--error'];
                } else if (this.type === 'info') {
                    return ['alertWrapper__header', 'alertWrapper__header--info'];
                }
            }
            return null;

        },

        setSvgImage() {
            if (this.type === 'error') {
                return this.errorImg;
            } else if (this.type === 'info') {
                return this.infoImg;
            }
            return null;
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
    methods: {
        removeAlert() {
            this.$emit('removeAlertElement');
        },

        handleDeleteClick() {
            this.showAlert = false;
        },
    },
};
</script>
