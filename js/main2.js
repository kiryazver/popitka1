document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 700) {
        backToTop.style.display = "block";
      } 
      else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });



let elastic = document.querySelector('#elastic')

            elastic.addEventListener('input', (ev) => {
                let value = ev.target.value.trim()
                let elasticItems = document.querySelectorAll('.processor')
                let searchRegExp = new RegExp(value, 'gi')

                if (value === '') {
                    elasticItems.forEach((el) => {
                        el.classList.remove('hide')
                    })
                    return
                }

                elasticItems.forEach((el) => {
                    let innerCard = el.querySelector('.txt3');
                    let elementText = innerCard.textContent
                    let isContainsSearchRequest = searchRegExp.test(elementText)
                    if (!isContainsSearchRequest) {
                        el.classList.add('hide')
                    } else {
                        el.classList.remove('hide')
                    }
                })
})




/* let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartItems = document.getElementById('cartItems');

    cartCount.textContent = cart.length;
    totalPriceElement.textContent = totalPrice.toFixed(3); // Форматируем сумму до двух знаков после запятой

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.price.toFixed(3)} руб.`; // Форматируем цену товара
        cartItems.appendChild(itemElement);
    });
}

function toggleCart() {
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
}

// Функция для установки произвольной суммы
function setCustomTotalPrice(customPrice) {
    totalPrice = customPrice;
    updateCart();
} */








    let cart = [];
    let totalPrice = 0;
    
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        totalPrice += productPrice;
        updateCart();
    }
    
    function removeFromCart(index) {
        totalPrice -= cart[index].price; // Уменьшаем общую сумму
        cart.splice(index, 1); // Удаляем товар из корзины
        updateCart();
    }
    
    function updateCart() {
        const cartCount = document.getElementById('cartCount');
        const totalPriceElement = document.getElementById('totalPrice');
        const cartItems = document.getElementById('cartItems');
    
        cartCount.textContent = cart.length;
        totalPriceElement.textContent = totalPrice.toFixed(3); // Форматируем сумму до двух знаков после запятой
    
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ${item.price.toFixed(3)} руб.`; // Форматируем цену товара
    
            // Создаем кнопку удаления
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Удалить';
            removeButton.onclick = () => removeFromCart(index); // Устанавливаем обработчик события
    
            itemElement.appendChild(removeButton); // Добавляем кнопку удаления к элементу товара
            cartItems.appendChild(itemElement);
        });
    }
    
    function toggleCart() {
        const cartDetails = document.getElementById('cartDetails');
        cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
    }
    
    // Функция для установки произвольной суммы
    function setCustomTotalPrice(customPrice) {
        totalPrice = customPrice;
        updateCart();
    }