<template>
    <span v-if="friend !== null">{{ friend.name }} - {{ friend.phone }}</span>
    <span v-else>{{ friendName }} - {{ phone }}</span>
    | <button @click="selectFriend">select</button>
</template>

<!-- Utilizzando setup entriamo su vue3 e quindi non dobbiamo esportare nulla -->
<script setup>
    const props = defineProps({
        friend: {
            type: Object,
            required: false,
            default: null
        },
        friendName:{
            type: String,
            required: false,
            default: 'Unknown'
        },
        phone:{
            type: String,
            required: false,
            default: 'N/A',
            validator: function(value){
                const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
                return phoneRegex.test(value);
            }
        }
    });

    // Definizione dei vari "eventi" che il componente può emettere
    const emit = defineEmits(['friendSelected']);

    // Questa è un methods! con vue3 setup non serve più definire i vari componenti
    function selectFriend(){
        // Emissione dell'evento 'friendSelected' con il nome dell'amico selezionato
        emit('friendSelected', props.friend ? props.friend.name : props.friendName);
    }
    
</script>