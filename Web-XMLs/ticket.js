function myfunction(){
    categoria=document.getElementById("Categoria")
    switch(categoria){
        case 1 :
            perc=0.8
            break
        case 2 :
            perc=0.5
            break
        case 3 :
            perc=0.15
            break
        default:
            perc=1
            break
        }
    cantidad=document.getElementById("Cantidad")
    monto=cantidad*(200*perc)
    return monto

}