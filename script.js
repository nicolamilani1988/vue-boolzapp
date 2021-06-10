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
                    ],
                
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