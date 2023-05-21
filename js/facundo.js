function animacion(){
    let texto = [
        ["e" , "s" , "t" , "u" , "d", "i", "a", "n", "t", "e", " ", "d", "e", " ", "R", "e", "a", "c", "t"],
        ["F", "r", "o", "n", "t", "E", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", " ","T", "r", "a", "i", "n", "e", "e"],
        ["f", "u", "t", "u", "r", "o", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", " ", "F", "u", "l", "l", " ", "S", "t", "a", "c", "k"]
    ];
        //contador la cantidad de letras que tiene cada nivel del array
        let letraContador = -1;

        //cantidad de niveles que tenga el array
        let nivelArray = 0;

    const containerAnimacion = document.querySelector("div.containerAnimacion");

    function renderTexto(){
        letraContador++;
        containerAnimacion.textContent += texto[nivelArray][letraContador];

        if(letraContador === texto[nivelArray].length -1){
            clearInterval(intervalo);

            setTimeout(()=> {
                intervalo = setInterval(()=> {
                    containerAnimacion.textContent= "";
                    letraContador--;
                    texto[nivelArray].pop();

                    texto[nivelArray].forEach((e)=> {
                        containerAnimacion.textContent += e;
                    })

                    if(letraContador < 0) {
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(renderTexto, 150);

                        if(nivelArray > texto.length - 1){
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        }
                    }
                }, 150)
            },1000)
        }
    };
    let intervalo = setInterval(renderTexto, 150)
}

window.addEventListener("load", animacion)


