document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.community-container');
    const userPanel = document.querySelector('.user-details-panel');
    const closeBtn = document.querySelector('.close-panel-btn');
    const postCards = document.querySelectorAll('.post-card');

    // Function to open panel with user details
    function openUserPanel(userData) {
        userPanel.querySelector('.user-profile-avatar').src = userData.avatar;
        userPanel.querySelector('.user-profile-name').textContent = userData.name;
        userPanel.querySelector('.user-profile-role').textContent = userData.role;
        userPanel.querySelector('.user-bio p').textContent = userData.bio;
        
        // Update skills
        const skillsContainer = userPanel.querySelector('.user-skills .post-tags');
        skillsContainer.innerHTML = userData.skills.map(skill => 
            `<span class="tag">${skill}</span>`
        ).join('');

        userPanel.classList.add('active');
        container.classList.add('panel-open');
    }

    // Close panel function
    function closeUserPanel() {
        userPanel.classList.remove('active');
        container.classList.remove('panel-open');
    }

    // Add click handlers to post cards
    postCards.forEach(card => {
        card.addEventListener('click', () => {
            // Example user data - in real app, this would come from your backend
            const userData = {
                avatar: card.querySelector('.user-avatar').src,
                name: card.querySelector('.post-meta h3').textContent,
                role: card.querySelector('.project-role').textContent,
                bio: "Full-stack developer with 5 years of experience in building scalable web applications.",
                skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS']
            };
            openUserPanel(userData);
        });
    });

    // Close panel when clicking close button
    closeBtn.addEventListener('click', closeUserPanel);

    // Close panel when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (userPanel.classList.contains('active') && 
            !userPanel.contains(e.target) && 
            !e.target.closest('.post-card')) {
            closeUserPanel();
        }
    });
}); 