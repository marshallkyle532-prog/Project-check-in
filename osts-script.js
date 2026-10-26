const moodInput = document.querySelector('#mood-input');
const moodButton = document.querySelector('#mood-button');
const moodFeedback = document.querySelector('#mood-feedback');

moodButton.addEventListener('click', () => {
  const mood = moodInput.value.trim().toLowerCase();

  if (!mood) {
    moodFeedback.textContent = 'Give me a mood first — I can’t match a soundtrack without one.';
    moodFeedback.classList.remove('success');
    moodFeedback.classList.add('warning');
    return;
  }

  if (mood.includes('bold') || mood.includes('energetic') || mood.includes('confident')) {
    moodFeedback.textContent = 'I’d go with Persona 5 Royal — it feels bold, stylish, and ready to hype you up.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('dreamy') || mood.includes('cozy') || mood.includes('calm')) {
    moodFeedback.textContent = 'Deltarune is the move here — soft, dreamy, and perfect for a cozy reset.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('hopeful') || mood.includes('happy') || mood.includes('uplifted')) {
    moodFeedback.textContent = 'Undertale fits that mood really well — warm, hopeful, and full of heart.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else if (mood.includes('night') || mood.includes('reflective') || mood.includes('sad')) {
    moodFeedback.textContent = 'Persona 3 Reload feels right for that one — moody, reflective, and perfect for late-night thinking.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  } else {
    moodFeedback.textContent = 'I’m leaning toward Persona 5 Royal — it’s a safe bet and a great all-round soundtrack pick.';
    moodFeedback.classList.remove('warning');
    moodFeedback.classList.add('success');
  }
});
