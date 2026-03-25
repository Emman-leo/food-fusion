const recipes = [
    {
        id: '1',
        title: 'Classic Margherita Pizza',
        description: 'A timeless Italian favorite with fresh basil, mozzarella, and tomato sauce on a crispy crust.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000',
        category: 'Dinner',
        prepTime: '20 mins',
        cookTime: '15 mins',
        servings: 2,
        difficulty: 'Medium',
        ingredients: [
            '1 pizza dough ball',
            '1/2 cup tomato sauce',
            '8 oz fresh mozzarella cheese',
            'Fresh basil leaves',
            '2 tbsp olive oil',
            'Salt and pepper'
        ],
        instructions: [
            'Preheat oven to 450°F (230°C).',
            'Roll out the dough on a floured surface.',
            'Spread tomato sauce evenly over the dough.',
            'Add sliced mozzarella and fresh basil.',
            'Drizzle with olive oil and season with salt and pepper.',
            'Bake for 12-15 minutes until the crust is golden and cheese is bubbly.'
        ],
        author: 'Chef Mario'
    },
    {
        id: '2',
        title: 'Avocado Toast with Poached Egg',
        description: 'Creamy avocado on toasted sourdough topped with a perfectly poached egg and chili flakes.',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1000',
        category: 'Breakfast',
        prepTime: '10 mins',
        cookTime: '5 mins',
        servings: 1,
        difficulty: 'Easy',
        ingredients: [
            '2 slices sourdough bread',
            '1 ripe avocado',
            '2 eggs',
            '1 tsp lemon juice',
            'Red pepper flakes',
            'Salt and pepper'
        ],
        instructions: [
            'Toast the sourdough slices until golden brown.',
            'Mash the avocado with lemon juice, salt, and pepper.',
            'Poach the eggs in simmering water for 3-4 minutes.',
            'Spread avocado on toast and top with poached eggs.',
            'Sprinkle with red pepper flakes and serve immediately.'
        ],
        author: 'Sarah Jenkins'
    },
    {
        id: '3',
        title: 'Quinoa Salad with Roasted Veggies',
        description: 'A healthy and colorful salad packed with protein and roasted seasonal vegetables.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
        category: 'Vegetarian',
        prepTime: '15 mins',
        cookTime: '25 mins',
        servings: 4,
        difficulty: 'Easy',
        ingredients: [
            '1 cup quinoa',
            '2 cups water',
            '1 bell pepper, chopped',
            '1 zucchini, sliced',
            '1/2 red onion, sliced',
            '3 tbsp olive oil',
            'Lemon vinaigrette'
        ],
        instructions: [
            'Rinse quinoa and cook in water until fluffy.',
            'Toss vegetables with olive oil and roast at 400°F for 20 minutes.',
            'Mix cooked quinoa with roasted vegetables.',
            'Drizzle with lemon vinaigrette and toss well.',
            'Serve warm or cold.'
        ],
        author: 'Dr. Green'
    },
    {
        id: '4',
        title: 'Berry Blast Smoothie Bowl',
        description: 'A refreshing and nutrient-dense bowl topped with fresh berries, granola, and honey.',
        image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1000',
        category: 'Breakfast',
        prepTime: '5 mins',
        cookTime: '0 mins',
        servings: 1,
        difficulty: 'Easy',
        ingredients: [
            '1 cup frozen mixed berries',
            '1 frozen banana',
            '1/2 cup almond milk',
            'Toppings: granola, chia seeds, fresh blueberries'
        ],
        instructions: [
            'Blend frozen berries, banana, and almond milk until smooth.',
            'Pour into a bowl.',
            'Top with granola, chia seeds, and fresh berries.',
            'Enjoy immediately!'
        ],
        author: 'FitLife'
    },
    {
        id: '5',
        title: 'Honey Garlic Glazed Salmon',
        description: 'Succulent salmon fillets glazed with a sweet and savory honey garlic sauce.',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000',
        category: 'Dinner',
        prepTime: '10 mins',
        cookTime: '12 mins',
        servings: 2,
        difficulty: 'Medium',
        ingredients: [
            '2 salmon fillets',
            '3 tbsp honey',
            '2 tbsp soy sauce',
            '3 cloves garlic, minced',
            '1 tbsp lemon juice',
            '1 tbsp olive oil'
        ],
        instructions: [
            'Whisk honey, soy sauce, garlic, and lemon juice in a small bowl.',
            'Heat olive oil in a pan over medium-high heat.',
            'Sear salmon for 4-5 minutes per side.',
            'Pour the glaze over the salmon and simmer for 2 minutes.',
            'Serve with steamed vegetables or rice.'
        ],
        author: 'Chef Alex'
    },
    {
        id: '6',
        title: 'Decadent Chocolate Lava Cake',
        description: 'Rich chocolate cake with a molten center, served warm with vanilla ice cream.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000',
        category: 'Dessert',
        prepTime: '15 mins',
        cookTime: '12 mins',
        servings: 2,
        difficulty: 'Hard',
        ingredients: [
            '1/2 cup semi-sweet chocolate chips',
            '1/4 cup butter',
            '1/2 cup powdered sugar',
            '1 egg + 1 egg yolk',
            '3 tbsp flour',
            'Vanilla extract'
        ],
        instructions: [
            'Melt chocolate and butter together.',
            'Whisk in powdered sugar, eggs, and vanilla.',
            'Gently fold in flour.',
            'Pour into greased ramekins.',
            'Bake at 425°F for 12-14 minutes.',
            'Let cool for 1 minute before inverting onto a plate.'
        ],
        author: 'Sweet Tooth'
    },
    {
        id: '7',
        title: 'Fluffy Blueberry Pancakes',
        description: 'Light and airy pancakes bursting with fresh blueberries, served with maple syrup.',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=1000',
        category: 'Breakfast',
        prepTime: '10 mins',
        cookTime: '15 mins',
        servings: 4,
        difficulty: 'Easy',
        ingredients: [
            '1.5 cups flour',
            '1 tbsp sugar',
            '1 tsp baking powder',
            '1 cup milk',
            '1 egg',
            '1 cup fresh blueberries',
            'Butter for cooking'
        ],
        instructions: [
            'Whisk dry ingredients in a bowl.',
            'Add milk and egg, and stir until combined.',
            'Gently fold in blueberries.',
            'Cook on a buttered griddle until bubbles form, then flip.',
            'Serve with maple syrup and extra berries.'
        ],
        author: 'Morning Baker'
    },
    {
        id: '8',
        title: 'Classic Caesar Salad',
        description: 'Crisp romaine lettuce tossed in creamy Caesar dressing with crunchy croutons and parmesan.',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1000',
        category: 'Lunch',
        prepTime: '15 mins',
        cookTime: '0 mins',
        servings: 2,
        difficulty: 'Easy',
        ingredients: [
            '1 large head romaine lettuce',
            '1/2 cup Caesar dressing',
            '1/2 cup croutons',
            '1/4 cup shredded parmesan',
            'Lemon wedges',
            'Black pepper'
        ],
        instructions: [
            'Wash and chop the romaine lettuce.',
            'Toss with Caesar dressing until well coated.',
            'Top with croutons and parmesan cheese.',
            'Serve with a squeeze of lemon and fresh black pepper.'
        ],
        author: 'Salad Expert'
    },
    {
        id: '9',
        title: 'Spicy Chicken Banh Mi',
        description: 'A vibrant Vietnamese sandwich with spicy chicken, pickled veggies, and fresh cilantro on a baguette.',
        image: 'https://images.unsplash.com/photo-1509722747041-07411bc442cc?auto=format&fit=crop&q=80&w=1000',
        category: 'Lunch',
        prepTime: '20 mins',
        cookTime: '10 mins',
        servings: 2,
        difficulty: 'Medium',
        ingredients: [
            '1 baguette, halved',
            '1 cup cooked spicy chicken strips',
            'Pickled carrots and daikon',
            'Cucumber slices',
            'Jalapeno peppers',
            'Fresh cilantro',
            'Sriracha mayo'
        ],
        instructions: [
            'Lightly toast the baguette.',
            'Spread Sriracha mayo on both sides.',
            'Layer chicken, pickled veggies, cucumber, and jalapeno.',
            'Garnish generously with cilantro and serve.'
        ],
        author: 'Global Flavors'
    },
    {
        id: '10',
        title: 'Roasted Tomato Basil Soup',
        description: 'Comforting and velvety soup made with fire-roasted tomatoes and fresh garden basil.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000',
        category: 'Lunch',
        prepTime: '10 mins',
        cookTime: '30 mins',
        servings: 4,
        difficulty: 'Easy',
        ingredients: [
            '2 lbs ripe tomatoes',
            '1 onion, chopped',
            '4 cloves garlic',
            '1 cup vegetable broth',
            '1/2 cup fresh basil',
            '2 tbsp olive oil'
        ],
        instructions: [
            'Roast tomatoes, onion, and garlic with olive oil at 400°F for 20 mins.',
            'Transfer to a pot with vegetable broth.',
            'Simmer for 10 minutes then blend until smooth.',
            'Stir in fresh basil and season to taste.'
        ],
        author: 'Mama Kitchen'
    },
    {
        id: '11',
        title: 'Pan-Seared Ribeye Steak',
        description: 'Perfectly seared ribeye steak basted with garlic butter and fresh rosemary.',
        image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=1000',
        category: 'Dinner',
        prepTime: '5 mins',
        cookTime: '10 mins',
        servings: 1,
        difficulty: 'Medium',
        ingredients: [
            '1 lb ribeye steak',
            '2 tbsp butter',
            '3 cloves garlic',
            'Fresh rosemary sprigs',
            'Sea salt and cracked pepper'
        ],
        instructions: [
            'Pat steak dry and season heavily with salt and pepper.',
            'Sear in a hot cast-iron pan for 3-4 mins per side.',
            'Add butter, garlic, and rosemary; baste for 2 more mins.',
            'Rest for 5 minutes before slicing against the grain.'
        ],
        author: 'Steakhouse Pro'
    },
    {
        id: '12',
        title: 'Classic New York Cheesecake',
        description: 'Dense and creamy cheesecake with a buttery graham cracker crust and berry compote.',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1000',
        category: 'Dessert',
        prepTime: '30 mins',
        cookTime: '1 hour',
        servings: 8,
        difficulty: 'Hard',
        ingredients: [
            '2 cups graham cracker crumbs',
            '1/2 cup melted butter',
            '32 oz cream cheese',
            '1 cup sugar',
            '4 eggs',
            '1 cup sour cream'
        ],
        instructions: [
            'Press crumbs and butter into a springform pan; bake for 10 mins.',
            'Beat cream cheese and sugar, then add eggs one by one.',
            'Mix in sour cream and vanilla.',
            'Pour into crust and bake at 325°F for 1 hour.',
            'Chill for at least 6 hours before serving.'
        ],
        author: 'Pastry Chef'
    },
    {
        id: '13',
        title: 'Warm Apple Crisp',
        description: 'Sliced apples baked with a crunchy cinnamon-oat topping, best served with ice cream.',
        image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=1000',
        category: 'Dessert',
        prepTime: '15 mins',
        cookTime: '35 mins',
        servings: 6,
        difficulty: 'Easy',
        ingredients: [
            '6 granny smith apples, sliced',
            '1 cup rolled oats',
            '1 cup brown sugar',
            '1/2 cup flour',
            '1/2 cup cold butter, cubed',
            '2 tsp cinnamon'
        ],
        instructions: [
            'Toss apples with a bit of sugar and cinnamon; place in a baking dish.',
            'Mix oats, brown sugar, flour, and remaining cinnamon.',
            'Cut in butter until crumbly and sprinkle over apples.',
            'Bake at 375°F for 35 minutes until bubbly and golden.'
        ],
        author: 'Ganny Best'
    },
    {
        id: '14',
        title: 'Creamy Mushroom Risotto',
        description: 'Rich and earthy arborio rice cooked slowly with butter, parmesan, and sautéed mushrooms.',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1000',
        category: 'Vegetarian',
        prepTime: '10 mins',
        cookTime: '25 mins',
        servings: 2,
        difficulty: 'Medium',
        ingredients: [
            '1 cup arborio rice',
            '2 cups mixed mushrooms',
            '3 cups warm vegetable stock',
            '1/2 cup parmesan',
            '1/4 cup white wine',
            '2 tbsp butter'
        ],
        instructions: [
            'Sauté mushrooms in butter until golden; set aside.',
            'Toast rice in same pan, add wine and stir until evaporated.',
            'Add stock one ladle at a time, stirring until absorbed.',
            'Fold in mushrooms and parmesan; serve creamy and hot.'
        ],
        author: 'Italian Soul'
    },
    {
        id: '15',
        title: 'Crispy Chickpea Buddha Bowl',
        description: 'A nutrient-dense bowl with roasted chickpeas, fresh greens, quinoa, and tahini dressing.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
        category: 'Vegetarian',
        prepTime: '20 mins',
        cookTime: '20 mins',
        servings: 1,
        difficulty: 'Easy',
        ingredients: [
            '1 cup cooked quinoa',
            '1 cup canned chickpeas, drained',
            '2 cups mixed baby greens',
            '1/2 avocado, sliced',
            'Tahini dressing',
            'Smoked paprika'
        ],
        instructions: [
            'Toss chickpeas with paprika and roast at 400°F for 20 mins.',
            'Assemble bowl with quinoa, greens, and avocado.',
            'Top with crispy chickpeas and drizzle with tahini dressing.',
            'Season with sea salt and serve fresh.'
        ],
        author: 'Bowl Life'
    }
];

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegetarian'];
let selectedCategory = 'All';
let searchQuery = '';

const recipeGrid = document.getElementById('recipe-grid');
const categoryContainer = document.getElementById('category-container');
const searchInput = document.getElementById('search-input');
const emptyState = document.getElementById('empty-state');
const heroSection = document.getElementById('hero-section');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const heroBtn = document.getElementById('hero-btn');

function init() {
    renderCategories();
    renderRecipes();

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderRecipes();
        toggleHero();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            const berryBlast = recipes.find(r => r.id === '4');
            if (berryBlast) openModal(berryBlast);
        });
    }

    // Hamburger drawer logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navDrawer = document.getElementById('nav-drawer');
    const drawerOverlay = document.getElementById('nav-drawer-overlay');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        navDrawer.classList.add('is-open');
        navDrawer.setAttribute('aria-hidden', 'false');
        hamburgerBtn.classList.add('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        navDrawer.classList.remove('is-open');
        navDrawer.setAttribute('aria-hidden', 'true');
        hamburgerBtn.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            navDrawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
        });
    }

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

function renderCategories() {
    categoryContainer.innerHTML = '';
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${selectedCategory === category ? 'active' : ''}`;
        btn.textContent = category;
        btn.onclick = () => {
            selectedCategory = category;
            renderCategories();
            renderRecipes();
            toggleHero();
        };
        categoryContainer.appendChild(btn);
    });
}

function toggleHero() {
    if (searchQuery || selectedCategory !== 'All') {
        heroSection.classList.add('hidden');
    } else {
        heroSection.classList.remove('hidden');
    }
}

function renderRecipes() {
    const filtered = recipes.filter(recipe => {
        const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    recipeGrid.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        filtered.forEach((recipe, idx) => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
        <div class="recipe-image-container">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" referrerPolicy="no-referrer">
        </div>
        <div class="recipe-info">
          <div class="recipe-meta">
            <span class="recipe-meta-item opacity">${recipe.category} / ${recipe.difficulty}</span>
            <span class="recipe-meta-item">${recipe.prepTime}</span>
          </div>
          <h3 class="recipe-title">${recipe.title}</h3>
          <div class="recipe-link">
            VIEW INSTRUCTIONS 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
        <div class="recipe-number">${String(idx + 1).padStart(2, '0')}</div>
      `;
            card.onclick = () => openModal(recipe);
            recipeGrid.appendChild(card);
        });
    }
}

function openModal(recipe) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="mb-12">
      <span class="modal-tag">// ${recipe.category}</span>
      <h2 class="modal-title">${recipe.title}</h2>
      <div class="modal-stats">
        <div class="stat-item">
          <span class="stat-label">Time</span>
          <span class="stat-value">${recipe.prepTime}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Serves</span>
          <span class="stat-value">${recipe.servings}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Level</span>
          <span class="stat-value">${recipe.difficulty}</span>
        </div>
      </div>
      <p class="modal-desc">"${recipe.description}"</p>
    </div>

    <div class="modal-grid">
      <section>
        <h3 class="modal-section-title">Ingredients</h3>
        <ul class="ingredients-list">
          ${recipe.ingredients.map(ing => `
            <li class="ingredient-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ingredient-icon"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              ${ing}
            </li>
          `).join('')}
        </ul>
      </section>

      <section>
        <h3 class="modal-section-title">Method</h3>
        <div class="instructions-list">
          ${recipe.instructions.map((step, idx) => `
            <div class="instruction-step">
              <span class="step-number">${idx + 1}.</span>
              <p class="step-text">${step}</p>
            </div>
          `).join('')}
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <span class="author-tag">Recipe by ${recipe.author}</span>
    </div>
  `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

init();

// ===== AI CHAT WIDGET =====
const chatToggleBtn = document.getElementById('chat-toggle-btn');

if (chatToggleBtn) {
  const chatHistory = [
    {
      role: 'system',
      content: `You are Culina AI, a friendly cooking assistant for the Culina recipe platform. 
  You help users with recipe suggestions, cooking tips, ingredient substitutions, and general food questions. 
  Keep responses concise and practical. You have knowledge of all the recipes on the platform: 
  Margherita Pizza, Avocado Toast, Quinoa Salad, Berry Blast Smoothie Bowl, Honey Garlic Salmon, 
  Chocolate Lava Cake, Blueberry Pancakes, Caesar Salad, Spicy Chicken Banh Mi, Roasted Tomato Soup, 
  Ribeye Steak, New York Cheesecake, Apple Crisp, Mushroom Risotto, and Crispy Chickpea Buddha Bowl.`
    }
  ];

  const chatBox = document.getElementById('chat-box');
  const chatIconOpen = document.getElementById('chat-icon-open');
  const chatIconClose = document.getElementById('chat-icon-close');
  const chatMessagesEl = document.getElementById('chat-messages');
  const chatInputEl = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');

  chatToggleBtn.addEventListener('click', () => {
    const isOpen = chatBox.classList.toggle('open');
    chatIconOpen.style.display = isOpen ? 'none' : 'block';
    chatIconClose.style.display = isOpen ? 'block' : 'none';
  });

  chatSendBtn.addEventListener('click', handleSend);
  chatInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  function sendChip(text) {
    const chips = document.getElementById('chat-chips');
    if (chips) chips.remove();
    handleSend(text);
  }

  // expose sendChip globally so inline onclick handlers can call it
  window.sendChip = sendChip;

  function handleSend(prefill) {
    const message = typeof prefill === 'string' ? prefill : chatInputEl.value.trim();
    if (!message) return;
    chatInputEl.value = '';

    appendMessage('user', message);
    const thinking = appendMessage('thinking', '...... thinking');

    chatHistory.push({ role: 'user', content: message });

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory })
    })
      .then(async (res) => {
        // If the backend returns HTML (common on deployment errors),
        // `res.json()` will throw ("Unexpected token '<'").
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) return res.json();
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed with status ${res.status}`);
      })
      .then(data => {
        thinking.remove();
        const reply = data?.choices?.[0]?.message?.content || data?.error || 'Sorry, I could not get a response.';
        chatHistory.push({ role: 'assistant', content: reply });
        appendMessage('assistant', reply);
      })
      .catch((err) => {
        thinking.remove();
        appendMessage('assistant', err?.message || 'Something went wrong. Please try again.');
      });
  }

  function appendMessage(role, text) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${role}`;
    const p = document.createElement('p');
    // Avoid HTML injection from model output; preserve formatting via CSS (`white-space: pre-wrap`).
    p.textContent = text;
    msg.appendChild(p);
    chatMessagesEl.appendChild(msg);
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    return msg;
  }
}
