var cadastro= new Vue({
	el: '#app',
	data: {
		text: '',
		grade1: '',
		grade2: '',
		grade3: '',
		title: 'cadastro',
		list: [],
		grades: [],
		show: 3,
		Students: 0,
		average: 0
	},
	methods: {
		checkList: function () {
			for(var i = 0; i < this.list.length; i++)
			{
				console.log("ola");
				console.log(this.text === this.list[i].text);
				if(this.text === this.list[i].text)
				{
					alert("Aluno já cadastrado!");
					return false;
				}
			}
			return true;
		},
		addStudent: function () {
			if(this.text === '')
			{
				alert("Insira um nome para cadastrar");
				return null;
			}
		 	var c= this.checkList();
		 	if(c)
		 	{
				this.list.push({text: this.text});
				this.text='';
				this.Students= parseInt(this.Students) + 1;
				console.log(this.Students);
				this.show = 2;

			}
		},
		addGrades: function(){
			var begin= (parseInt(this.Students) - 1) * 3;
			if(this.grade1 === '' || this.grade2 === '' || this.grade3 === '')
			{
				alert("Insira todas as notas para cadastrar o aluno");
				return null;
			}
			this.grades[begin]= this.grade1;
			this.grades[begin + 1]= this.grade2;
			this.grades[begin + 2]= this.grade3;
			this.grade1='';
			this.grade2='';
			this.grade3='';



			this.show= 3;
		},
		searchStudent: function(){
			if(this.text === '')
			{
				alert("Insira estudante para procurar");
				return null;
			}
			var i= 0;


			while( (i < this.list.length) && (this.text !== this.list[i].text)  ){
				i++;

			}
			if(i < this.list.length)
			{
				console.log("Aluno achado: " + this.list[i].text);
				this.grade1= (this.grades[ parseInt(this.Students -1) * 3] );
				this.grade2= (this.grades[ (parseInt(this.Students -1) * 3) + 1]);
				this.grade3= (this.grades[ (parseInt(this.Students -1) * 3) + 2]);
				this.getAverage();


			}
			else
			{
				console.log("Aluno não achado");
				alert("Aluno não registrado");
			}


			
			/*this.text= '';

			this.show= 3;
			this.grade1= '';
			this.grade2= '';
			this.grade3= '';*/
		},
		getAverage: function(){
			this.average= ( (parseInt(this.grade1) + parseInt(this.grade2) + parseInt(this.grade3)) / 3 );
			this.show=5;
		},

		check: function(){
			this.show= 3;
			this.grade1= '';
			this.grade2= '';
			this.grade3= '';
			this.text= '';
		},

		main: function()
		{
			this.show= 3;
		}
	}
})

