document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    document.getElementById('home-tab').addEventListener('click', function() {
        fetchUsers();
    });

    document.getElementById('gallery-tab').addEventListener('click', function() {
        fetchPhotos();
    });

    document.getElementById('about-tab').addEventListener('click', function() {
        displayAbout();
    });

    function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                content.innerHTML = `<h2>Users</h2>` +
                    users.map(user => `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <div class="card-info">
                                    <p><strong>Username:</strong> ${user.username}</p>
                                    <p><strong>Email:</strong> ${user.email}</p>
                                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                                    <p><strong>Phone:</strong> ${user.phone}</p>
                                    <p><strong>Website:</strong> ${user.website}</p>
                                    <p><strong>Company:</strong> ${user.company.name} - ${user.company.catchPhrase}</p>
                                </div>
                            </div>
                        </div>
                    `).join('');
            })
            .catch(error => console.error('Error fetching users:', error));
    }

    function fetchPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => {
                content.innerHTML = `<h2>Gallery</h2><div class="row">` +
                    photos.slice(0, 20).map(photo => `
                        <div class="col-md-3">
                            <div class="card mb-3">
                                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${photo.title}</h5>
                                </div>
                            </div>
                        </div>`).join('') +
                    `</div>`;
            })
            .catch(error => console.error('Error fetching photos:', error));
    }

    function displayAbout() {
        content.innerHTML = `
            <h2>About</h2>
            <p>Welcome to My App! This application was designed and developed by Joshua N. Lita, a passionate web developer with a knack for creating user-friendly and visually appealing web applications.</p>
            <p>Our goal is to provide you with a seamless and enjoyable experience while using the app. We are dedicated to ensuring the app remains reliable and efficient for all your needs.</p>
            <p>Your feedback is invaluable to us, so please don't hesitate to reach out with any suggestions or comments. Thank you for choosing My App, and we hope you enjoy using it as much as we enjoyed creating it!</p>
            <p>If you have any question contact me using my email address</p>
            <ul>
                <li><strong>Email:</strong> jlita***@gmail.com</li>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/TSMBJERGS" target="_blank">Joshua Nato Lita</a></li>
            </ul>
            <p>Thank you for visiting and exploring My App. I hope you enjoy the experience!</p>
        `;
    }

    // Load home content by default
    fetchUsers();
});
