<template>
        <Transition @after-leave="removeAlert">
            <div
                v-if="showAlert"
                :class="['alertWrapper', setWrapperClass]"
            >
                <div class="alertWrapper__alertImg">
                    <img style="height: 20px; width: 20px;" :src="setSvgImage">
                </div>
                <h3 :class="['alertWrapper__header', setHeaderClass]">{{message}}</h3>
            </div>
        </Transition>
</template>
<script>
import './AlertElement.scss';
import infoImg from '@/components/assets/infoImg.svg';
import errorImg from '@/components/assets/errorImg.svg';

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
        index: Number,
    },
    mounted() {
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false;
        }, 3000);
    },
    computed: {
        setWrapperClass() {
            if (this.showAlert) {
                if (this.type === 'error') {
                    return 'alertWrapper--error';
                } else if (this.type === 'info') {
                    return 'alertWrapper--info';
                }
            }
            return 'alertWrapper--hidden';
        },

        setHeaderClass() {
            if (this.showAlert) {
                if (this.type === 'error') {
                    return 'alertWrapper__header--error';
                } else if (this.type === 'info') {
                    return 'alertWrapper__header--info';
                }
            }
            return 'alertWrapper__header--hidden';

        },

        setSvgImage() {
            if (this.type === 'error') {
                return this.errorImg;
            } else if (this.type === 'info') {
                return this.infoImg;
            }
            return '';
        },
    },
    methods: {
        removeAlert() {
            this.$emit('removeAlertElement');
        },
    },
};
</script>
