const button = document.getElementById('fetch-todos')

button.addEventListener('click', async () => {
  const results = await fetch(
    'http://localhost:5000/item'
  );
  const jsonResult = await results.json()
  console.log(jsonResult)
})