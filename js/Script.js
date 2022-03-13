const inpMoney = document.getElementById('inp_for_money');
const btnFilter = document.getElementById('btn_filter');
const resultMoneyPage = document.getElementById('result_money');
const money = [10000, 5000, 2000, 1000, 500, 200, 100];

btnFilter.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = +inpMoney.value;
    if (value) {
        const lastMoney = money[money.length - 2];
        const firstMoney = money[0];
        if (value < lastMoney) {
            alert(`Խնդրում ենք մուտքագրեք ${lastMoney} դրամից ու բարձր`);
        } else if (value > firstMoney) {
            alert(`Մակսիմալ մուտքագրման թիվը ${firstMoney} դրամ`);
        }  else if (value % 100 > 0) {
            alert('Խնդրում ենք գրեք 100 - ին բազմապատիկ թվերը, օրինակ՝ 200, 300, 400, 2200, 5500, 9900');
        } else {
            filterMoney();
        }
    } else {
        alert('Խնդրում ենք լրացրեք մուտքագրամն դաշտը');
    }
})

function filterMoney() {
    resultMoneyPage.innerHTML = '';
    alert('Խնդրում ենք սպսեք մի քանի վարկիան մինչ մենք կվերլուծենք ձեր մուտքագրած տվյալները։');
    document.querySelector('.page_loading').style.display = 'flex';
    setTimeout(async () => {
        let inpVal = +inpMoney.value;
        let full_st = 10;
        let a = full_st, b = full_st, c = full_st,d = full_st,e = full_st, f = full_st, g = full_st;
        while (a >= 0) {
            let final = money[0] * a + money[1] * b + money[2] * c + money[3] * d + money[4] * e + money[5] * f + money[6] * g;
            let str_final_a = a > 0 ? '<span>' + a + ' </span> հատ ' + money[0] + ', ' : '';
            let str_final_b = b > 0 ? '<span>' + b + ' </span> հատ ' + money[1] + ', ' : '';
            let str_final_c = c > 0 ? '<span>' + c + ' </span> հատ ' + money[2] + ', ' : '';
            let str_final_d = d > 0 ? '<span>' + d + ' </span> հատ ' + money[3] + ', ' : '';
            let str_final_e = e > 0 ? '<span>' + e + ' </span> հատ ' + money[4] + ', ' : '';
            let str_final_f = f > 0 ? '<span>' + f + ' </span> հատ ' + money[5] + ', ' : '';
            let str_final_g = g > 0 ? '<span>' + g + ' </span> հատ ' + money[6] + ', ' : '';
            let str_final = str_final_a + str_final_b + str_final_c + str_final_d + str_final_e + str_final_f + str_final_g;
            g--
            if (g === -1) {
                g = full_st;
                f--
            } else if (f === -1) {
                f = full_st;
                e--
            } else if (e === -1) {
                e = full_st;
                d--
            } else if (d === -1) {
                d = full_st;
                c--
            } else if (c === -1) {
                c = full_st;
                b--
            } else if (b === -1) {
                b = full_st;
                a--
            } else if (a === -1) {
                break;
            }
            if (final === inpVal) {
                let htm = document.createElement('p');
                htm.innerHTML = str_final;
                resultMoneyPage.appendChild(htm);
                document.querySelector('.page_loading').style.display = 'none';
            }
        }
    }, 1000)
}