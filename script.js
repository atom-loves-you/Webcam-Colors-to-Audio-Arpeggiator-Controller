let spans = document.querySelectorAll('span');
Array.from(spans).forEach(span => {
  span.addEventListener('click', () => {
    document.body.style.backgroundColor = span.style.backgroundColor;
  });
});