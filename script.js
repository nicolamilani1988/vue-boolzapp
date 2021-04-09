function init(){
  
    new Vue ({
        el: "#app",

        data:{

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                //aggiungere altri utenti
            ],

            texts: []

        },

        methods:{
            getContactText: function(){
                for(let i=0;i<this.contacts.length;i++){
                    const contact = this.contacts[i];
                    const messages = contact['messages'];
                    const text = messages[0]['text'];
                    console.log(text);
                }
            }
        },

        mounted(){
            const messages = this.contacts[0]['messages'];
            for (let i = 0;i<messages.length;i++){
                const message = messages[i];
                const text = message['text'];
                this.texts.push(text);
            }
            console.log(this.texts);
        }

    })

}

document.addEventListener('DOMContentLoaded',init);