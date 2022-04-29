function criaCalculadora () {

    return {
        display: document.querySelector('.display'),




        inicia () {
            this.display.focus();
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaApaga();
        },

        pressionaEnter () {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        pressionaApaga () {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 8) {
                    this.apagaUm();
                }
                
            });
        },

        realizaConta () {
            let conta = this.display.value;
            try {
                conta = eval(conta);


                if(conta === '' || Number.isNaN(conta) || typeof conta != 'number') {
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Inválida');
                return;
            }
        },

        clearDisplay () {
            this.display.value = '';
        },

        apagaUm () {
            this.display.value = this.display.value.slice(0, -1);
        },

        
        cliqueBotoes () {
            document.addEventListener('click', function (e) {
                el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }.bind(this));
        },
       
        btnParaDisplay (valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();