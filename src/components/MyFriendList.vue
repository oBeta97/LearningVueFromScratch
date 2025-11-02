<script>
import FriendContact from "./FriendContact.vue";

export default {
    name : "MyFriendList",
    components: {
        FriendContact
    },
    data() {
        return {
            friends: [
                { name: "Alice", phone: "123-456-7890" },
                { name: "Bob", phone: "987-654-3210" },
                { name: "Charlie", phone: "555-555-5555" }
            ]
        };
    }
}
</script>

<template>
    <section>
        <h2>MyFriends</h2>
        <ul>
            <li v-for="(friend, index) in friends" :key="index">
                <FriendContact :friend="friend" />
            </li>
        </ul>
    </section>
</template>
