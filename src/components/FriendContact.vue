<template>
    <p>{{ friend.name }} - {{ friend.phone }}</p>
</template>

<script>

export default {
    name : "FriendContact",
    props: ['friend']
}

</script>