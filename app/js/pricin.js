var monthly = document.getElementById('monthly');
var weekly = document.getElementById('weekly');
var bc = document.getElementById('b-c');
var sc = document.getElementById('s-c');//small-circle in switch
var sev = document.getElementById('sev');
var twe = document.getElementById('twe');
var four = document.getElementById('four');

// ######################
//function to change the billing to weekly
function weeklyPlans(){
    sev.innerHTML = `<h2>$2</h2><span >/week</span>`;
    twe.innerHTML = `<h2>$4</h2><span >/week</span>`;
    four.innerHTML = `<h2>$1.5</h2><span >/week</span>`;
}

// ######################
//function to change the billing to monthly
function monthlyPlans(){
    sev.innerHTML = `<h2>$7</h2><span >/mo</span>`;
    twe.innerHTML = `<h2>$12</h2><span >/mo</span>`;
    four.innerHTML = `<h2>$4</h2><span >/mo</span>`;
}

// #########################
//script for the billing switch || to switch between weekly
// and monthly billings
bc.addEventListener('click', function(){
    if(sc.classList.contains('switch-right')){
        sc.classList.remove('switch-right');
        sc.classList.add('switch-left');
        weekly.classList.add('bold');
        monthly.classList.remove('bold');

        weeklyPlans();
    }  
    else{
        sc.classList.remove('switch-left');
        sc.classList.add('switch-right');
        weekly.classList.remove('bold');
        monthly.classList.add('bold');
        monthlyPlans();
    }
})