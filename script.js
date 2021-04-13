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
            newName: '', // nome da aggiungere con input
            msgSearch: '', //cerco tra i messaggi
            isMsgBarVisible: false,
            pickedMsg: [],
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
            
            showMenu: function(elem){

                this.activeMsg = elem;
                this.isVisible = !this.isVisible;
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
                
            },
            showMsgSearchbar: function(){
                this.isMsgBarVisible = !this.isMsgBarVisible;
                return this.isMsgBarVisible;
            },
            pickMsg: function(){
                this.pickedMsg = [];
                const messages = this.activeChat['messages'];
                for(let i = 0;i<messages.length;i++){
                    const message = messages[i];
                    if(message['text'].toLowerCase().includes(this.msgSearch.toLowerCase())){
                        this.pickedMsg.push(message['text'].toLowerCase());
                    }
                    console.log(this.pickedMsg);
                }   
                
                
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