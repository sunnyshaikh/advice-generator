const btn = document.getElementById('btn');

// get advice on click
btn.addEventListener('click', getAdvice)

// get advice function
async function getAdvice() {
  // fetching advices from below API
  const data = await fetch('https://api.adviceslip.com/advice');
  const res = await data.json();

  // populate advice in html elements
  document.getElementById('advice-id').innerText = res.slip.id;
  document.getElementById('advice-text').innerText = res.slip.advice;
}

// get advice at start
getAdvice()