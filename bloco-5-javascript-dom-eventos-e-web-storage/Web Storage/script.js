window.onload = function(){
    let color = document.getElementById('fundo')
     color.addEventListener('change', function(){
        let newColor = color.selectedOptions[0]
        document.body.style.backgroundColor = newColor.value
    })

    
    let textColor = document.getElementsById('textColor')
     textColor.addEventListener('change', function(){
         let newTextColor = textColor.selectedOptions[0]
         document.getElementById('textColor').style.color = newTextColor.value
     })
}