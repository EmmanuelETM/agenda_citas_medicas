<!-- tI1bGBQ3 -->
<script>
    import {onMount} from 'svelte';
    import Talk from 'talkjs';

    /**
     * @type {HTMLElement | null}
     */
    let chatboxEl;


    onMount(async () => {
        await Talk.ready;

        // After `await Talk.ready`
        const currentUser = new Talk.User({
            id: '1',
            name: 'Henry Mill',
            email: 'henrymill@example.com',
            photoUrl: 'henry.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
        });

        const otherUser = new Talk.User({
            id: '2',
            name: 'Jessica Wells',
            email: 'jessicawells@example.com',
            photoUrl: 'jessica.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
        });

        const session = new Talk.Session({
            appId: 'tI1bGBQ3',
            me: currentUser,
        });

        
        // After `Talk.ready` and creating users
        const conversationID = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationID);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        // After creating the conversation
        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        // After chatbox.select
        chatbox.mount(chatboxEl);

    });
   
</script>

<div class="col-start-1 col-end-5">
        <div bind:this={chatboxEl} class="row-start-3 row-end-8" />
</div>
