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
                            text: 'Questo JavaScript non è una passeggiata',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "A dire il vero, credo sia abbastanza duro",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: "That's what she said",
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
                            text: 'Domanda: quale tipo di orso è il migliore?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Questa è una domanda ridicola..',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'FALSO! Il black bear è il migliore.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:37:00',
                            text: 'Bear.Beets.Battlestar Galactica.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:40:00',
                            text: "Che cosa stai facendo? Non farlo! Il furto d'identità non è un gioco, Nicola!",
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:48:00',
                            text: "Milioni di persone ne soffrono ogni anno",
                            status: 'received'
                        },

                    ],
                },
                {
                    name: 'Stanley',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 05:10:40',
                            text: 'Ciao Stanley, come stai ?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 05:20:10',
                            text: 'Sono le 5 del mattino! Have you lost your mind???',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 05:45:22',
                            text: 'Ah scusa!',
                            status: 'sent'
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
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "'Bene, se c'è da alcolizzarsi io ci sono",
                            status: 'received',
                        }
                    ],   
                },      
                
            ],
            
            
            activeChat: {
                name: '',
                avatar: '_3',
                visible: true,
                messages: [],
            }, // var = obj attivo. Lo imposto con un fake perchè mi dava errore in gmail al caricam della foto, riga 66
            
            newText: '', // messaggio digitato
            userSearch: '', // caratteri searchbar contatti
            startTheme: '', //classe per far sparire la schermata
            activeMsg : '', //identifico msg del menu tendina
            isVisible : false, // menu tendina visibile
            isInfoVisible : false, // info msg visibile
            isAddbarVisible: false, //input per aggiungere contatto
            newName: '',
        },

        methods:{
            getActiveChat: function(index){
                
                this.startTheme = 'hide';
                this.activeChat = this.contacts[index];
                console.log(this.activeChat['messages'][0]['date'])
                
            },
            getDate : function(data){
                const currentdate = data; 
                let date = currentdate.getDate() + "/"
                + (((currentdate.getMonth()+1)<10 ? '0':'')+ (currentdate.getMonth()+1))  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + ((currentdate.getMinutes()<10 ?'0':'')+currentdate.getMinutes()) + ":" + ((currentdate.getSeconds()<10 ?'0':'')+currentdate.getSeconds());
                return date;
            },
            getNewMsg: function (text, status){
                
                const currentDate = new Date();
                const msgData = this.getDate(currentDate);
                const message = text;
                const newMessage = {
                    date: msgData,
                    text: message,
                    status: status
                };
                return newMessage;
            },
            addText: function(){
                const messages = this.activeChat['messages'];
                const newMsg = this.getNewMsg(this.newText,'sent');
                
                messages.push(newMsg);
                this.newText = '';

                const activeContact = this.activeChat;

                setTimeout( () => {
                    const delayMessages = activeContact['messages'];
                    const newMsgDelay = this.getNewMsg('Ok','received');
                    delayMessages.push(newMsgDelay);
                },1000);
               
            },
            
            showMenu: function(elem){

                this.activeMsg = elem;
                this.isVisible = true;
                console.log(this.isVisible); 
                
            },              
            deleteMsg: function(index){
                const messages = this.activeChat['messages'];
                messages.splice(index,1);
                
            },
            infoMsg: function (index){
                this.isVisible = false;
                this.isInfoVisible = true;
            },
            lastMessage: function(elem){
                return elem['messages'][elem['messages'].length-1]['text'];
            },
            lastDate: function(elem){
                return elem['messages'][elem['messages'].length-1]['date'];
            },
            showSearchBar: function(){
                this.isAddbarVisible = !this.isAddbarVisible;
                return this.isAddbarVisible;
            },
            addContact: function(){
                const newContact = {
                    name: this.newName,
                    avatar: '_anonym',
                    visible: true,
                    messages: [{
                        date: this.getDate(new Date()),
                        text: 'Ciao, sono nuovo su Whatsapp',
                        status: 'received',
                    }],
                };
                
                this.contacts.push(newContact);
                this.newName = '';
                
            }

        },

        filters: {
            dateFormat: function(val){
                dayjs.extend(window.dayjs_plugin_customParseFormat);
              
                const dateString  = dayjs(val, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
                return dateString;
            },
            dayFormat: function(val){
                dayjs.extend(window.dayjs_plugin_customParseFormat);
              
                const dateString  = dayjs(val, "DD/MM/YYYY HH:mm:ss").format('D MMMM');
                return dateString;
            },
        },

        updated(){
            let container = this.$el.querySelector('#message-view');
            container.scrollTop = container.scrollHeight;
        }

        

    })

}

document.addEventListener('DOMContentLoaded',init);