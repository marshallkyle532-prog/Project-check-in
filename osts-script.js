const moodInput = document.querySelector('#mood-input');
const moodButton = document.querySelector('#mood-button');
const moodFeedback = document.querySelector('#mood-feedback');

moodButton.addEventListener('click', () => {
  const mood = moodInput.value.trim().toLowerCase();

  if (!mood) {
    moodFeedback.textContent = 'Type a mood first so we can match you to a soundtrack.';
    moodFeedback.classList.remove('success');
    moodFeedback.classList.add('warning');
    return;
  }

  if (mood.includes('bold') || mood.includes('energetic') || mood.includes('confident')) {
    moodFeedback.textContent = 'Recommended: Persona 5 Royal — perfect for a bold, stylish boost.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('dreamy') || mood.includes('cozy') || mood.includes('calm')) {
    moodFeedback.textContent = 'Recommended: Deltarune — dreamy and comforting for a calm night.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('hopeful') || mood.includes('happy') || mood.includes('uplifted')) {
    moodFeedback.textContent = 'Recommended: Undertale — uplifting and full of heart.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('night') || mood.includes('reflective') || mood.includes('sad')) {
    moodFeedback.textContent = 'Recommended: Persona 3 Reload — moody and reflective for late-night vibes.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else {
    moodFeedback.textContent = 'Recommended: Persona 5 Royal — a great all-around pick for almost any mood.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  }
});
