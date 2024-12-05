document.getElementById('spotlightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data and handle submission logic
    alert('Spotlight post created!');
    // Redirect to feed page or handle post creation
});

const titleInput = document.querySelector('input[type="text"]');
const descriptionInput = document.querySelector('textarea');
const fileInput = document.querySelector('input[type="file"]');
const tagSelect = document.querySelector('.tag-selection select');
const backgroundColorInput = document.getElementById('backgroundColor');
const previewCard = document.getElementById('previewCard');

titleInput.addEventListener('input', updatePreview);
descriptionInput.addEventListener('input', updatePreview);
fileInput.addEventListener('change', updatePreview);
tagSelect.addEventListener('change', updatePreview);
backgroundColorInput.addEventListener('input', updatePreview);

function updatePreview() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const file = fileInput.files[0];
    const tags = Array.from(tagSelect.selectedOptions).map(option => option.text);
    const backgroundColor = backgroundColorInput.value;

    previewCard.querySelector('.post-meta h3').textContent = title || 'Preview Title';
    previewCard.querySelector('.post-description-hover p').textContent = description || 'Preview Description';
    previewCard.style.backgroundColor = backgroundColor;

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewCard.querySelector('.post-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    const tagsContainer = previewCard.querySelector('.post-tags');
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
} 