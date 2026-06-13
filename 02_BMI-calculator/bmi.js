const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const res=document.querySelector('#results')

    if(h==='' || h<0 || isNaN(h)){
        res.innerHTML="Please give a valid height"
    }
    else if(w==='' || w<0 || isNaN(w)){
        res.innerHTML="Please give a valid weight"
    }
    else{
        const bmi=(w/((h*h)/10000)).toFixed(2);
        let cat="";
        if(bmi<18.6){
            cat="Under Weight"
        }
        else if(bmi<=24.9){
            cat="Normal Range"
        }
        else{
            cat="Overweight"
        }
        //show res
        results.innerHTML=`<span>${bmi} - ${cat}</span>`
    }
    
})