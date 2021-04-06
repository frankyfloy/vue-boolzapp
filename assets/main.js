var app = new Vue({
    el: '#root',
    data: {
        notifications: false,
        chatActiveObj: "",
        IndexHoverMessage: null,

        userLastAccess: moment().locale('it').calendar().toLowerCase(),
        // change icon search
        inputActive: null,
        // value search profile
        inputSearchUser: "",

        // input message
        textSend: "",
        contactsFiltered : [],
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
			{
				name: 'Samuele',
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
				name: 'Luisa',
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
						status: 'received'
					}
				],
			},
		]
	},

    // usare computed per didattica
	// computed:{
    //
	// },

    mounted: function() {
       this.contactsFiltered = this.contacts.slice();
    },

    methods: {
        chatActive: function (obj){
            this.chatActiveObj = obj;
            console.log(this.inputActive);
        },

        sendMessage: function (){
            var tmpObj = this.chatActiveObj;
            if (this.textSend.length) {

                this.chatActiveObj.messages.push({
                    date: moment().format('L, h:mm:ss'),
                    text: this.textSend,
                    status: 'sent',
                }),
                console.log(this.chatActiveObj.messages);
            }

            // Funzione timeout con self
			let self = this;

			// Funzione timeout
			setTimeout(function () {
				let obj =
				{
					date: moment().format('L, h:mm:ss'),
					text: "ok",
					status: 'received'
				}
				self.chatActiveObj.messages.push(obj)
			},3000)
            this.textSend = "";
        },


        // Attivare le notifiche desktop
        showNotification: function(){
            this.notifications = true;

            Swal.fire({
                title: 'Notifiche attivate',
                // text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
        },



        searchValue: function(){
            if (this.inputSearchUser === "") {
                this.contactsFiltered = this.contacts.slice();
            }
            else {
                this.contactsFiltered = this.contacts.filter((element) => {
                    return element.name.toUpperCase().includes(this.inputSearchUser.toUpperCase())
                })
            }
        },

        prova: function(){
            console.log("-----------");
            this.inputActive = true;
            console.log(this.inputActive);
            console.log("-----------");

        },
    }
});
