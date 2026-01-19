// Options data
const options = [
  {
    value: "paris",
    text: "Paris, France",
    icon: "fas fa-landmark",
    description: "The city of lights, famous for the Eiffel Tower, Louvre Museum, and delicious cuisine."
  },
  {
    value: "tokyo",
    text: "Tokyo, Japan",
    icon: "fas fa-torii-gate",
    description: "A vibrant metropolis blending ultramodern and traditional, from neon-lit skyscrapers to historic temples."
  },
  {
    value: "newyork",
    text: "New York, USA",
    icon: "fas fa-building",
    description: "The city that never sleeps, known for Times Square, Central Park, and Broadway shows."
  },
  {
    value: "sydney",
    text: "Sydney, Australia",
    icon: "fas fa-water",
    description: "Famous for its iconic Opera House, beautiful harbour, and stunning beaches."
  },
  {
    value: "dubai",
    text: "Dubai, UAE",
    icon: "fas fa-mosque",
    description: "A city of superlatives with the world's tallest building, largest shopping mall, and artificial islands."
  }
];

// DOM elements
const customSelect = document.getElementById('customSelect');
const selectedValue = document.getElementById('selectedValue');
const dropdownArrow = document.getElementById('dropdownArrow');
const optionsContainer = document.getElementById('optionsContainer');
const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');
const resultDescription = document.getElementById('resultDescription');

// Generate options
options.forEach((option, index) => {
  const optionElement = document.createElement('div');
  optionElement.className = 'option';
  optionElement.dataset.value = option.value;
  optionElement.dataset.index = index;

  optionElement.innerHTML = `
                <div class="option-icon">
                    <i class="${option.icon}"></i>
                </div>
                <div class="option-text">${option.text}</div>
                <div class="selected-indicator">
                    <i class="fas fa-check"></i>
                </div>
            `;

  optionsContainer.appendChild(optionElement);
});

// Variables
let isOpen = false;
let selectedOption = null;

// Toggle dropdown
customSelect.addEventListener('click', (e) => {
  isOpen = !isOpen;

  if (isOpen) {
    customSelect.classList.add('active');
    dropdownArrow.classList.add('rotate');
    optionsContainer.classList.add('show');
  } else {
    closeDropdown();
  }

  e.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  closeDropdown();
});

// Select option
optionsContainer.addEventListener('click', (e) => {
  const optionElement = e.target.closest('.option');

  if (!optionElement) return;

  const value = optionElement.dataset.value;
  const index = optionElement.dataset.index;
  const optionData = options[index];

  // Create ripple animation
  createRippleAnimation(e, optionElement);

  // Update selected option
  updateSelectedOption(value, optionData, optionElement);

  // Close dropdown after selection
  setTimeout(() => {
    closeDropdown();
  }, 300);
});

// Functions
function closeDropdown() {
  isOpen = false;
  customSelect.classList.remove('active');
  dropdownArrow.classList.remove('rotate');
  optionsContainer.classList.remove('show');
}

function createRippleAnimation(e, optionElement) {
  const rect = optionElement.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ripple = document.createElement('div');
  ripple.className = 'selection-animation';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  optionElement.appendChild(ripple);

  // Remove ripple element after animation completes
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

function updateSelectedOption(value, optionData, optionElement) {
  // Remove selected class from all options
  document.querySelectorAll('.option').forEach(opt => {
    opt.classList.remove('selected');
  });

  // Add selected class to clicked option
  optionElement.classList.add('selected');

  // Update selected value display
  selectedValue.textContent = optionData.text;

  // Update result display
  resultValue.textContent = optionData.text;
  resultDescription.textContent = optionData.description;

  // Add fade in animation to result
  result.style.animation = 'none';
  setTimeout(() => {
    result.style.animation = 'fadeIn 0.5s ease';
  }, 10);

  // Store selected option
  selectedOption = value;

  // Log selection to console
  console.log(`Selected: ${optionData.text}`);
}

// Initialize with first option selected
function initialize() {
  const firstOption = document.querySelector('.option');
  const firstOptionData = options[0];

  updateSelectedOption(firstOptionData.value, firstOptionData, firstOption);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initialize);