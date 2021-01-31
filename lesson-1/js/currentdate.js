document.getElementById('currentdate').textContent = document.lastModified
document.getElementById('year').textContent = new Date(document.lastModified).getFullYear();