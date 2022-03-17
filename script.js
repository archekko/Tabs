window.addEventListener('DOMContentLoaded', function(){


    'use sctict';

    let tab = document.querySelectorAll('.info-header-tab'), //обертка с табами 
        info = document.querySelector('.info-header'), //табы
        tabContent = document.querySelectorAll('.info-tabcontent'); //блок к контентом

    function hideTabContent(a) { //скрываем все блоки кроме первого (1)
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) { //показывает определенный блок
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});