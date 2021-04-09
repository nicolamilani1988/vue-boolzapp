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
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                //aggiungere altri utenti
            ],
            
            names: [],
            userTexts: [],
            otherUserTexts: [],

        },

        methods:{
            getContactText: function(){
                this.userTexts = [];
                this.otherUserTexts = [];
                const messages = this.contacts[0]['messages'];
                for (let i = 0;i<messages.length;i++){
                    const message = messages[i];
                    const text = message['text'];
                    const status = message['status'];
                    if(status == "sent"){
                        this.userTexts.push(text);
                    } else {
                        this.otherUserTexts.push(text);
                    }
                }
                console.log(this.userTexts);
                console.log(this.otherUserTexts);
            }
        },

        

    })

}

document.addEventListener('DOMContentLoaded',init);