"use strict";




// hide all pages
function hideAllPages() {
let pages = document.querySelectorAll(".page");
for (let page of pages) {
page.style.display = "none";
}
}

// show page or tab
function showPage(pageId) {
hideAllPages();
document.querySelector(`#${pageId}`).style.display = "block";
location.href = `#${pageId}`;
setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
let pages = document.querySelectorAll(".tabbar a");
for (let page of pages) {
if (`#${pageId}` === page.getAttribute("href")) {
page.classList.add("active");
} else {
page.classList.remove("active");
}

}
}

// set default page
function setDefaultPage() {
let page = "home";
if (location.hash) {
page = location.hash.slice(1);
}
showPage(page);
}

setDefaultPage();

function showLoader(show) {
let loader = document.querySelector('#loader');
if (show) {
loader.classList.remove("hide");
} else {
loader.classList.add("hide");
}
}


// user crud functionality

// Your web app's Firebase configuration

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAuFXEnggk49gbY4MDrt-XLSOD-CtTsxg8",
authDomain: "learn-coding-24030.firebaseapp.com",
databaseURL: "https://learn-coding-24030.firebaseio.com",
projectId: "learn-coding-24030",
storageBucket: "learn-coding-24030.appspot.com",
messagingSenderId: "87373107923",
appId: "1:87373107923:web:7fe83fa7700353c6423a26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userRef = db.collection("user");

let selectedUserId = "";


// Firebase UI configuration
const uiConfig = {
credentialHelper: firebaseui.auth.CredentialHelper.NONE,
signInOptions: [
firebase.auth.EmailAuthProvider.PROVIDER_ID
],
signInSuccessUrl: '#home',
};

// Init Firebase UI Authentication
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// Listen on authentication state change
firebase.auth().onAuthStateChanged(function(user) {
let tabbar = document.querySelector('#tabbar');
console.log(user);
if (user) { // if user exists and is authenticated
setDefaultPage();
tabbar.classList.remove("hide");
appendUserData(user);
} else { // if user is not logged in
showPage("login");
tabbar.classList.add("hide");
ui.start('#firebaseui-auth-container', uiConfig);
}
showLoader(false);
});

// sign out user
function logout() {
firebase.auth().signOut();
}

function appendUserData(user) {
document.querySelector('#profile').innerHTML += `
<div class="row">
    <div class="small-12 medium-2 large-2 columns">
        <div class="circle">
            <!-- User Profile Image -->
        </div>
        <div class="p-image">
            <i class="fa fa-camera upload-button"></i>
            <input class="file-upload" type="file" accept="image/*" />
        </div>
    </div>
</div>

<div class="card">
    <h2>${user.displayName}</h2>
    <p class="title">Business Academy Aarhus</p>
    <p class="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
    <div style="margin: 24px 0;">
        <a href="#" class="social"><i class="fa fa-dribbble"></i></a>
        <a href="#" class="social"><i class="fa fa-instagram"></i></a>
        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
    </div>
    <div class="app">
        <h3 class="finish-text">Finished Courses</h3>

        <div class="full hide-scroll">

            <ul class="hs">
                <li class="finish-course-image1"></li>
                <li class="finish-course-image2"></li>
                <li class="finish-course-image3"></li>
                <li class="finish-course-image4"></li>
            </ul>

        </div>
        `;
        }
        $(document).ready(function() {


        var readURL = function(input) {
        if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
        }
        }


        $(".file-upload").on('change', function(){
        readURL(this);
        });

        $(".upload-button").on('click', function() {
        $(".file-upload").click();
        });
        });





        function addToActivity(el) {
        let link = el.getAttribute("data-link");
        fetch(link)
        .then(function(response) {
        return response.json();
        })
        .then(function(json) {
        appendProducts(json);

        });

        function appendProducts(product) {

        console.log(product);
        document.querySelector("#activity-bar").innerHTML += `

        <div class="service service-activity">
            <div>
                <img alt="HTML" class="activity-image" src="${getFeaturedImageUrl(product)}">;
            </div>
            <h2>${product.title.rendered}</h2>
            <h3>${product.content.rendered}</h3>
            <a href="#" class="cta" onclick="showPage('course')">Start Course<span class="ti-angle-right"></span></a>
        </div>
        `;
        }

        function getFeaturedImageUrl(post) {
        let imageUrl = "";
        if (post._embedded['wp:featuredmedia']) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        }
        return imageUrl;
        }
        }

        function showSettings (){

        $("#settings").show();

        }
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) { acc[i].addEventListener("click", function() { this.classList.toggle("active"); var panel=this.nextElementSibling; if (panel.style.display==="block" ) { panel.style.display="none" ; } else { panel.style.display="block" ; } }); } var acc=document.getElementsByClassName("accordion2"); var i; for (i=0; i < acc.length; i++) { acc[i].addEventListener("click", function() { this.classList.toggle("active"); var panel=this.nextElementSibling; if (panel.style.display==="block" ) { panel.style.display="none" ; } else { panel.style.display="block" ; } }); } var x=document.getElementById("user-location"); function getLocation() { if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition); } else { x.innerHTML="Geolocation is not supported by this browser." ; } } function showPosition(position) { x.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; }
