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
                            date: '10/01/2020 15:10:55',
                            text: "You can consider this as my retirement from comedy",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:11:55',
                            text: "In the future, I will no longer use any of these jokes",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:13:55',
                            text: "Does that include 'That's What She Said?'",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:19:55',
                            text: "Yeesh",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: "That's really hard. Do you think you can go all day?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "Well, you always left me satisfied and smiling",
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
                            text: "Question: what kind of bear is best ?",
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: "That's a ridicolous question",
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'False. Black bear.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:37:00',
                            text: 'Bear eat beets.Bear, beets ,Battlestar Galactica.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:40:00',
                            text: "What is going on? What are you doing? Identity theft is not a joke, Nicola",
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:48:00',
                            text: "Millions of families suffer every year",
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
                            text: 'Hi Stanley, congratulations for your Dundy Award!',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 05:20:10',
                            text: "Have you lost your mind??? It's 5 in the morning!!",
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 05:45:22',
                            text: 'Sorry, see you later',
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
                            text: 'Do you want a drink?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "Yes, PLEASE!",
                            status: 'received',
                        }
                    ],   
                }, 
                {
                    name: 'Ryan',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: "I'd like to do another version to bring more color",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "I like it. I like it a lot, you have a real talent about this stuff.",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:55:55',
                            text: "Thanks",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: "I'd love to talk to you about it more. Do you wan to go out to dinner tonight ?",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:45:22',
                            text: "No...um..I'm dating Jim",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:55:22',
                            text: "Ah ah..You're kidding",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 17:05:22',
                            text: "No, we're together actually",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 17:09:22',
                            text: "That's great..awesome",
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Pam',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: "I'd like to do another version to bring more color",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "I like it. I like it a lot, you have a real talent about this stuff.",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:55:55',
                            text: "Thanks",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: "I'd love to talk to you about it more. Do you wan to go out to dinner tonight ?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:45:22',
                            text: "No...um..I'm dating Jim",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:55:22',
                            text: "Ah ah..You're kidding",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 17:05:22',
                            text: "No, we're together actually",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 17:09:22',
                            text: "That's great..awesome",
                            status: 'sent'
                        },
                    ],
                }, 
                {
                    name: 'Jim',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: "Hello, this is Dwight Schrute from Dunder-Mifflin Paper Company.",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:59:00',
                            text: "Oh, that's great because I need paper.",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:30:55',
                            text: "Excellent,then you are in luck because we are having a limited time offer on everything",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:46:00',
                            text: "Wow,this is my lucky day",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:47:55',
                            text: "What is your name?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:49:00',
                            text: "I am Bill Buttlicker",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:51:55',
                            text: "Really?That is your name?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:52:55',
                            text: "How dare you?",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:53:55',
                            text: "My family built this country by the way!!",
                            status: 'received'
                        },
                    ],
                }, 
                // {
                //     name: 'Kelly',
                //     avatar: '_8',
                //     visible: true,
                //     messages: [
                //         {
                //             date: '10/01/2020 15:30:55',
                //             text: "That's really hard. Do you think you can go all day?",
                //             status: 'sent'
                //         },
                //         {
                //             date: '10/01/2020 09:20:00',
                //             text: "I am not done",
                //             status: 'received'
                //         }
                //     ],
                // }, 
                // {
                //     name: 'Oscar',
                //     avatar: '_9',
                //     visible: true,
                //     messages: [
                //         {
                //             date: '10/01/2020 15:30:55',
                //             text: "That's really hard. Do you think you can go all day?",
                //             status: 'sent'
                //         },
                //         {
                //             date: '10/01/2020 21:00:00',
                //             text: "Thank you",
                //             status: 'received'
                //         }
                //     ],
                // },  
                {
                    name: 'Creed',
                    avatar: '_10',
                    visible: true,
                    messages: [
                        {
                            date: '30/01/2020 09:50:00',
                            text: "Bobbity",
                            status: 'received'
                        }
                    ],
                },   
                
            ],
                       
            activeChat: {
                name: '',
                avatar: '_3',
                visible: true,
                messages: [],
            }, // var = obj attivo. Lo imposto con un fake perchè mi dava errore in gmail al caricam della foto, riga 65          
            newText: '', // messaggio digitato
            userSearch: '', // caratteri searchbar contatti
            startTheme: '', //classe per far sparire la schermata         
            isMsgMenuVisible : false, // menu tendina msg visibile/nascosto
            isInfoVisible : false, // info msg visibile/nascosto
            activeMsg : '', //identifico msg del menu tendina
            isAddbarVisible: false, //input per aggiungere contatto visibile/nascosto
            newName: '', // nome da aggiungere con input          
            isMsgBarVisible: false, // ricerca caratteri msg visibile/nascosto
            msgSearch: '', //caratteri digitati da cercare tra i messaggi
            pickedMsg: [], // controllo msg cercati
            isSettingsVisible: false,
            activeIndex: '', // individuo indice dell'activeChat
            isBgLight: true,
        },

        
        methods:{
            getActiveChat: function(index){ // stabilisco la chat attiva e nascondo schermata avvio
                this.startTheme = 'hide';
                this.activeChat = this.contacts[index];
                this.activeIndex = index;
            },

            getDate : function(data){ // elaboro date con formato corretto
                const currentdate = data; 
                let date = ((currentdate.getDate()<10 ? '0':'')+currentdate.getDate()) + "/"
                + (((currentdate.getMonth()+1)<10 ? '0':'')+ (currentdate.getMonth()+1))  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + ((currentdate.getMinutes()<10 ?'0':'')+currentdate.getMinutes()) + ":" + ((currentdate.getSeconds()<10 ?'0':'')+currentdate.getSeconds());
                console.log(date);
                return date;
            },

            getNewMsg: function (text, status){ //elaboro messaggio da inserire nei messages  
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

            addText: function(){ // aggiungo msg e ottengo risposta
                const messages = this.activeChat['messages'];
                const newMsg = this.getNewMsg(this.newText,'sent');               
                if(this.newText.length>0){
                    messages.push(newMsg);
                }

                const msgCheck = this.newText;
                this.newText = '';
                const activeContact = this.activeChat;

                setTimeout( () => {
                    if(msgCheck.length>0){
                        const delayMessages = activeContact['messages'];
                        const newMsgDelay = this.getNewMsg('Ok','received');
                        delayMessages.push(newMsgDelay);
                    }                  
                },1000);              
            },
            
            showMenu: function(elem){ // apro/chiudo menu dropdown
                this.activeMsg = elem;
                this.isMsgMenuVisible = !this.isMsgMenuVisible;            
            },    

            deleteMsg: function(index){ //menu dropdown --> cancella messaggio
                const messages = this.activeChat['messages'];
                messages.splice(index,1);               
            },

            infoMsg: function (){ //menu dropdown --> info messaggio
                this.isMsgMenuVisible = false;
                this.isInfoVisible = true;
            },

            lastMessage: function(elem){ //visualizza ultimo msg
                return elem['messages'][elem['messages'].length-1]['text'];
            },
            
            lastDate: function(elem){ // visulizza ultima data
                return elem['messages'][elem['messages'].length-1]['date'];
            },

            addContact: function(){ //aggiungi contatto alla lista
                if(this.newName.length>0){
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

            pickMsg: function(){ // controllo msg cercati e li evidenzio
                this.pickedMsg = [];
                const messages = this.activeChat['messages'];
                for(let i = 0;i<messages.length;i++){
                    const message = messages[i];
                    if(message['text'].toLowerCase().includes(this.msgSearch.toLowerCase())){
                        this.pickedMsg.push(message['text'].toLowerCase());
                    }
                }                  
            },

            deleteAllMsg:function(){ // rimuovi tutti i msg della chat
                //const activeContact = this.contacts[this.activeIndex];
                // const messages = activeContact['messages'];
                // for(let i = 0;i<messages.length;i++){
                //     const message = messages[i];
                //     messages.splice(i,1,{ 
                //         date: this.getDate(new Date()),
                //         text: 'Messaggio rimosso',
                //         status: message['status'],
                //     })
                // }   
                alert("sei sicuro di voler eliminare i messaggi?");
                const messages = this.activeChat['messages'];
                for (let i = 0;i<messages.length; i++){
                    const message = messages[i];
                     messages.splice(i,1,{ 
                         date: this.getDate(new Date()),
                         text: 'Messaggio rimosso',
                         status: message['status'],
                     })
                }
            },

            deleteContact: function(){ // cancella contatto
                alert("sei sicuro di voler eliminare questo contatto?");
                this.contacts.splice(this.activeIndex,1);
                this.activeChat = this.contacts[0];
            },
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

        // updated(){
        //     let container = this.$el.querySelector('#message-view');
        //     container.scrollTop = container.scrollHeight;
        // }
 
    })

}

document.addEventListener('DOMContentLoaded',init);