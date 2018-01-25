/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
            <tr>
              <td>${actor.who}</td> 
              <td>${actor.type}</td> 
              <td>${actor.amount} €</td>
            </tr>
      `;
    }).join('');

    const head='<thead class="thead-dark"><tr><th scope="col">Who</th><th scope="col">Type</th><th scope="col">Amount</th></tr></thead>';

    div.innerHTML = '<table class="table text-center" id="resultTable">'+ template + '</table>';
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
