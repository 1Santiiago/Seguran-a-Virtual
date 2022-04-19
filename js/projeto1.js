function verificarEntrada(){
    nomeConvidado = document.getElementById('nomeUser').value;
    convidadosDoSan =['Keyla', "Abraao","Lucas", "Kassiane"]
    convidadosDaKeyla = ['Esdras', "Eleusa"]

        if(convidadosDoSan.includes(nomeConvidado)){
            document.getElementById('permi').innerText = 'Voce Pode Entrar'

        }

        else if(convidadosDaKeyla.includes(nomeConvidado)){
            document.getElementById('permi').innerText = 'Voce Pode Entrar'
            
        }
        else{
            document.getElementById('permi').innerText = 'Voce não foi convidado'
        }
}