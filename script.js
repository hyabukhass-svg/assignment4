document.addEventListener('DOMContentLoaded', function() {
    const dishes = document.querySelectorAll('.dish-card');
    dishes.forEach(dish => {
    const price = dish.getAttribute('data-price'); 
    const priceTag = document.createElement('p');
    priceTag.textContent = `$${price}`; 
    priceTag.classList.add('dish-price'); 
    dish.appendChild(priceTag);

    const favButton = document.createElement('button');
        favButton.textContent = 'Add to Favorites';
        favButton.classList.add('fav-btn');
        dish.appendChild(favButton);
    });
});


let total = 0;

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fav-btn')) {
        const dishCard = event.target.closest('.dish-card');
        const dishName = dishCard.querySelector('h3').textContent;
        const dishPrice = parseFloat(dishCard.getAttribute('data-price'));

        const favoritesSection = document.getElementById('favorites');
        const existingItem = favoritesSection.querySelector(`[data-name="${dishName}"]`);

        if (existingItem) {
            
            favoritesSection.removeChild(existingItem);
            total -= dishPrice;
            dishCard.classList.remove('highlight');
            event.target.textContent = "Add to Favorites";
        } else {
            
            const favItem = document.createElement('div');
            favItem.classList.add('fav-item');
            favItem.setAttribute('data-name', dishName);
            favItem.textContent = `${dishName} - $${dishPrice}`;
            favoritesSection.appendChild(favItem);

            total += dishPrice;
            dishCard.classList.add('highlight');
            event.target.textContent = "Remove from Favorites";
        }

        
        document.getElementById('total-price').textContent = total.toFixed(2);
    }
});
