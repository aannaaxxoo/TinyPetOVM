(function () {
	'use strict';

	var app = angular.module('petApp', []);
	app.service('petService', PetService);
	app.controller('affPetController', AffPetController);

    /** 
	 * Service de stockage des petitions
	*/
	PetService.$inject = [];
	function PetService (){
		var vm = this;

		vm.listePetitions = [];
		vm.pushPetition = pushPetition;
		vm.claerPetition = claerPetition;

		function pushPetition(petition) {
			console.log('dans pushPetition');
			vm.listePetitions.push(petition);
			console.log(vm.listePetitions);
		}

		function claerPetition(petition) {
			vm.listePetitions.splice(vm.listePetitions.indexOf(petition), 1);
		}

	}

    /** 
	 * Controller de la vue Saisie
	 * @param petService : le service de gestion des pétitions
	*/
	AffPetController.$inject = ['$scope','petService'];
	function AffPetController($scope, petService) {
		// capture de l'attribut this
		var vm = this;
		// objet correspondant à une pétition
		vm.pet = {
			titre:'',
			description : '',
			image:'',
			objectif:'',
            checkCond:'',
			auteur:'', //récupéré par google
            dateCrea: moment().format('L') //date du jour au format JJ/MM/AAAA
		};

        //a récuperer depuis le back
        vm.listePetitions = [
            {titre:'titre3',description : 'description3',image:'image3',objectif:'3',auteur:'moi',dateCrea:'03/03/2022',nbSignature:3},
            {titre:'titre2',description : 'description2',image:'image2',objectif:'2',auteur:'auteur2',dateCrea:'02/02/2022',nbSignature:2},
            {titre:'titre4',description : 'description4',image:'image4',objectif:'4',auteur:'moi',dateCrea:'04/04/2022',nbSignature:4},
            {titre:'titre1',description : 'description1',image:'image1',objectif:'1',auteur:'auteur1',dateCrea:'01/01/2022',nbSignature:1}
            
        ];
    }
}());