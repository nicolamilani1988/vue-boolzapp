function init(){
  
    new Vue ({
        el: "#app",

        data:{

            contacts: [
                {
                    name: 'Michael',
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
                    name: 'Dwight',
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
                {
                    name: 'Stanley',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Meredith',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],   
                },      
                
            ],
            
            
            activeChat: {
                name: 'Start',
                avatar: '_3',
                visible: true,
                messages: [],
            }, // var = obj attivo. Lo imposto con un fake perchè mi dava errore in gmail al caricam della foto, riga 66
            newText: '', // messaggio digitato
            userSearch: '', // caratteri searchbar contatti
            startTheme: '', //classe per far sparire la schermata
        },

        methods:{
            getActiveChat: function(index){
                
                this.startTheme = 'hide';
                this.activeChat = this.contacts[index];
                
            },
            addText: function(){
                
                const messages = this.activeChat['messages'];
                const data = new Date().toLocaleString();
                const message = this.newText;
                const newMessage = {
                    date: data,
                    text: message,
                    status: "sent"
                };
                messages.push(newMessage);
                this.newText = '';
                setTimeout(function(){
                   const userText = "ok" ;
                   const userMessage = {
                       date: data,
                       text: userText,
                       status: "received"
                   };
                   messages.push(userMessage);
                },1000);

            },
            showMenu: function(index){
                const messages = this.activeChat['messages'];
                messages[index]['menuDisplay'] = true;
                console.log(messages[index]);
            }, //da modificare ! ! ! 
            
            deleteMsg: function(index){
                const messages = this.activeChat['messages'];
                messages.splice(index,1);
                console.log(index,"ciao");
            }
            

        },

        

    })

}

document.addEventListener('DOMContentLoaded',init);