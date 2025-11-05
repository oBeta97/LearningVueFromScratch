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
                { name: "Charlie", phone: "555-555-5555" },
                { name: "Charlie" }
            ],
            selectedFriend: null
        };
    },
    methods: {
        friendSelected(friendName) {
            this.selectedFriend = friendName;
        }
    }
}
</script>

<template>
    <section>
        <h2>MyFriends</h2>
        <h4 v-if="selectedFriend !== null"> My favourite friend is: {{ this.selectedFriend }} </h4>
        <ul>
            <li v-for="(friend, index) in friends" :key="index">
                <FriendContact :friend="friend" @friendSelected="friendSelected" />
            </li> 
            <li style="list-style-type: kannada;" v-for="(friend, index) in friends" :key="index">
                <FriendContact :friendName="friend.name" :phone="friend.phone" @friendSelected="friendSelected" />
            </li>
        </ul>
    </section>
</template>
