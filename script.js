let a = -1;

window.onload = () => {
    const bu = document.getElementById('bu');
    const conrg = document.getElementById('congr');
    const cake = document.getElementById('cake');
    const candle_title = document.getElementById('candle_title');
    const blow = document.getElementById('blow');
    const counter = document.getElementById('counter');


    

    blow.addEventListener('click', incr(),  false);
    
    conrg.classList.add('hidden');
    bu.classList.add('move_bu');
    setTimeout(() => {
        bu.innerText = 'бу!';
        setTimeout(next(), 200);
    }, 3500);


    const next = () => {
        bu.classList.add('move_bu_trash');
        bu.classList.add('hidden');
        conrg.style.visibility = 'visible'
        setTimeout(() => {
            conrg.classList.add('congr_deg'); 
            setTimeout(() => {
                cake.style.left = '100px';
                setTimeout(candle(), 1000)
            }, 1500)
        })
    }

    const candle = () => {
        candle_title.style.visibility = 'visible';
        counter.style.visibility = 'visible;'
        blow.style.visibility = 'visible';
    }


}

const incr = () => {
    if(a == 0){
        counter.style.visibility = 'visible';
        counter.innerText = 'Свечей задуто: 1';
    }else{
        if(a == 1){
            counter.innerText = 'Свечей задуто: 2';
        }else if(a > 1){
            counter.innerText = 'Свечей задуто: 19';
            setTimeout(() => {
                const first = document.getElementById('first');
                const second = document.getElementById('second');
                first.style.display = 'none';
                second.style.display = 'block';
            }, 1200)
        }
    }
    a++;
}