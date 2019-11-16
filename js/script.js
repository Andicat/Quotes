'use strict';

(function () {
  var URL = 'https://api.develnext.org';
  var serverTime = 10000;
  var statusOk = 200;

  var buttonNewQuote = document.querySelector('.quote-new_quote');

  function onClickbuttonNewQuote() {
  	load(function (data) {
    	var offers = data;
    	console.log(data);
	},showError);
  }

  buttonNewQuote.addEventListener('click', onClickbuttonNewQuote);

  
  // загрузка данных с сервера
  function load(onLoad, onError) {
  	/*
  	var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusOk) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = serverTime;
    
    //xhr.open('GET', URL + '/data/v1/quote/subjects');
    xhr.open('GET', 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10');
    xhr.setRequestHeader("x-rapidapi-host", "andruxnet-random-famous-quotes.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "821d69d5f2msh9395eb47e2363bcp13ca19jsne2c94e8e0b4a");
    
    xhr.send();*/
  var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

//xhr.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en");

   xhr.open('GET', 'https://js.dump.academy/keksobooking/data');
//xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//xhr.setRequestHeader("x-rapidapi-host", "kutip.p.rapidapi.com");
//xhr.setRequestHeader("RapidAPI Project", "kutip.p.rapidapi.com");
//xhr.setRequestHeader("x-rapidapi-key", "821d69d5f2msh9395eb47e2363bcp13ca19jsne2c94e8e0b4a");



xhr.send(data);
  }

  // показ ошибки
  function showError(error) {
    var errorModal = document.createElement('div');
    errorModal.style = 'position: absolute; height: auto; width: 500px; left: 50%; top: 50%; padding: 20px; background: #fff; border: 1px solid #333; z-index: 9999; transform: translate(-50%, -50%)';
    errorModal.classList.add('error');
    var errorMessage = document.createElement('h1');
    errorMessage.style = 'color: red; text-shadow: none; font-size: 30px';
    errorMessage.textContent = error;
    errorModal.appendChild(errorMessage);
    document.body.appendChild(errorModal);
  }

  // ошибка :(
  /*function showError() {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorMessage = errorTemplate.cloneNode(true);
    var errorText = errorMessage.querySelector('.error__message');
    var errorCloseButton = errorMessage.querySelector('.error__button');

    errorText.textContent = 'Произошла ошибка';
    mainContainer.appendChild(errorMessage);

    errorCloseButton.addEventListener('click', function () {
      mainContainer.removeChild(errorMessage);
    });

    errorMessage.addEventListener('click', function () {
      mainContainer.removeChild(errorMessage);
    });
  }*/
  
})();

