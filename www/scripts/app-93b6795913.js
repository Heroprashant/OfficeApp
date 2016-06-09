!function(){"use strict";angular.module("Pocapp",["ionic","Pocapp.core","Pocapp.appload","Pocapp.dashboard","Pocapp.userprofile","Pocapp.projectdetail","Pocapp.newsdetail"])}(),function(){"use strict";angular.module("Pocapp.appload",[])}(),function(){"use strict";angular.module("Pocapp.core",["Pocapp.core.models","Pocapp.core.services","Pocapp.core.layout","Pocapp.core.features"])}(),function(){"use strict";angular.module("Pocapp.dashboard",[])}(),function(){"use strict";angular.module("Pocapp.newsdetail",[])}(),function(){"use strict";angular.module("Pocapp.projectdetail",[])}(),function(){"use strict";angular.module("Pocapp.userprofile",[])}(),function(){"use strict";angular.module("Pocapp.core.features",["feature.imagezoomgallery"])}(),function(){"use strict";angular.module("Pocapp.core.models",[])}(),function(){"use strict";angular.module("Pocapp.core.services",["service.securestorage","service.dataservice"])}(),function(){"use strict";angular.module("Pocapp.core.layout",[])}(),function(){"use strict";angular.module("feature.imagezoomgallery",[])}(),function(){"use strict";angular.module("service.dataservice",[])}(),function(){"use strict";angular.module("service.securestorage",[])}(),function(){"use strict";angular.module("Pocapp.appload").constant("APPLOADCONSTANTS",{ROUTE:{STATE:"appload",URL:"/appload",TEMPLATEURL:"appload/appload.html",CONTROLLER:"ApploadCtrl",CONTROLLERAS:"appload"}})}(),function(){"use strict";angular.module("Pocapp.core").constant("CORECONSTANTS",{DEFAULT_URL:"appload"})}(),function(){"use strict";angular.module("service.dataservice").constant("DATASERVICECONSTANTS",{BASE_URL:"http://10.31.16.249:3000"})}(),function(){"use strict";angular.module("service.securestorage").constant("APPSTORAGECONSTANTS",{GENERAL:{SERVICENAME:"nl.niekheezemans.kodi"},IOS:{},ANDROID:{},BROWSER:{}})}(),function(){"use strict";angular.module("Pocapp.appload").config(function(){})}(),function(){"use strict";angular.module("Pocapp.core").config(function(){})}(),function(){"use strict";angular.module("Pocapp.dashboard").config(function(){})}(),function(){"use strict";angular.module("Pocapp.newsdetail").config(function(){})}(),function(){"use strict";angular.module("Pocapp.projectdetail").config(function(){})}(),function(){"use strict";angular.module("Pocapp.userprofile").config(function(){})}(),function(){"use strict";angular.module("Pocapp.core.layout").config(function(){})}(),function(){"use strict";function e(e,n){e.ready(function(){console.log("Ionic Ready on Run!"),n.cordova&&n.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),n.StatusBar&&n.StatusBar.styleLightContent()})}angular.module("Pocapp.appload").run(e),e.$inject=["$ionicPlatform","$window"]}(),function(){"use strict";function e(e,n,t){function o(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/contacts",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function a(o,a){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/"+o+"?q="+a,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}function i(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/contacts?employeeId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}function r(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/projects",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function c(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/projects?projectId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}function l(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/news",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function s(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/news?newsId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}var d,u={getAllContacts:o,getSearchResult:a,getByEmployeeId:i,getAllProjects:r,getByProjectId:c,getAllNews:l,getByNewsId:s};return u}angular.module("service.dataservice").factory("dataservice",e),e.$inject=["$q","$http","DATASERVICECONSTANTS"]}(),function(){"use strict";function e(e,n,t){function o(n,o,a){switch(c=e.defer(),a){case"iOS":case"Android":l=new Keychain,l.setForKey(function(e){c.resolve(e)},function(e){console.log("KC Set Error: ",e),c.reject(e)},n,t.GENERAL.SERVICENAME,o);break;default:c.resolve(localStorage.setItem(n,o))}return c.promise}function a(n,o){switch(c=e.defer(),o){case"iOS":case"Android":l=new Keychain,l.getForKey(function(e){c.resolve(e)},function(e){c.reject(e)},n,t.GENERAL.SERVICENAME);break;default:localStorage.getItem(n)?c.resolve(localStorage.getItem(n)):c.reject()}return c.promise}function i(n,o){switch(c=e.defer(),o){case"iOS":case"Android":l=new Keychain,l.removeForKey(function(e){c.resolve(e)},function(e){c.reject(e)},n,t.GENERAL.SERVICENAME);break;default:localStorage.getItem(n)?c.resolve(localStorage.removeItem(n)):c.reject()}return c.promise}function r(e){var n=JSON.stringify(e);return n=n.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\/]/g,"\\/").replace(/[\b]/g,"\\b").replace(/[\f]/g,"\\f").replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t")}var c,l,s={setItem:o,getItem:a,removeItem:i,escapeObj:r};return s}angular.module("service.securestorage").factory("securestorage",e),e.$inject=["$q","$window","APPSTORAGECONSTANTS"]}(),function(){"use strict";function e(e,n,t,o){function a(){e.ready(function(){return n.cordova?(console.log("cordova check => device"),t.go("Pocapp.dashboard")):(console.log("cordova check => browser"),t.go("Pocapp.dashboard")),i})}var i=this;a()}angular.module("Pocapp.appload").controller("ApploadCtrl",e),e.$inject=["$ionicPlatform","$window","$state","APPLOADCONSTANTS"]}(),function(){"use strict";function e(e,n){function t(){return o.getSearchResult=function(){""!=o.searchQuery?"contacts"==o.subject&&(n.show({template:"Loading..."}),e.getSearchResult(o.subject,o.searchQuery).then(function(e){o.contacts=e.data},function(e){console.log(e)})["finally"](function(){n.hide()})):o.contacts=null},o.changeSubject=function(e){switch(o.searchQuery="",e){case"contacts":break;case"projects":o.getAllProjects();break;case"news":o.getAllNews()}o.subject=e},o.getAllProjects=function(){n.show({template:"Loading..."}),e.getAllProjects().then(function(e){o.projects=e.data},function(e){console.log(e)})["finally"](function(){n.hide()})},o.getAllNews=function(){n.show({template:"Loading..."}),e.getAllNews().then(function(e){o.news=e.data},function(e){console.log(e)})["finally"](function(){n.hide()})},o}var o=this;o.subject="contacts",t()}angular.module("Pocapp.dashboard").controller("DashboardCtrl",e),e.$inject=["dataservice","$ionicLoading"]}(),function(){"use strict";function e(e,n,t,o,a,i,r){function c(){return e.getByNewsId(t.nId).then(function(e){l.data=e.data[0],console.log(e)},function(e){console.log(e)}),l}var l=this;l.allImages=[{src:"images/slider/slider_one.jpeg"},{src:"images/slider/slider_two.png"},{src:"images/slider/slider_three.jpg"}],c()}angular.module("Pocapp.newsdetail").controller("NewsdetailCtrl",e),e.$inject=["dataservice","$scope","$stateParams","$ionicBackdrop","$ionicModal","$ionicSlideBoxDelegate","$ionicScrollDelegate"]}(),function(){"use strict";function e(e,n,t,o,a,i,r){function c(){return e.getByProjectId(t.pId).then(function(e){l.data=e.data[0],console.log(e)},function(e){console.log(e)}),l.changeSubject=function(e){switch(e){case"project":break;case"team":break;case"links":}l.subject=e},l.showImages=function(e){l.activeSlide=e,l.showModal("template/template-gallery-zoomview.html")},l.showModal=function(e){a.fromTemplateUrl(e,{scope:n}).then(function(e){l.modal=e,l.modal.show()})},l.closeModal=function(){l.modal.hide(),l.modal.remove()},l.updateSlideStatus=function(e){var n=r.$getByHandle("scrollHandle"+e).getScrollPosition().zoom;n==l.zoomMin?i.enableSlide(!0):i.enableSlide(!1)},l}var l=this;l.subject="project",l.allImages=[{src:"images/slider/slider_one.jpeg"},{src:"images/slider/slider_two.png"},{src:"images/slider/slider_three.jpg"}],l.zoomMin=1,c()}angular.module("Pocapp.projectdetail").controller("ProjectdetailCtrl",e),e.$inject=["dataservice","$scope","$stateParams","$ionicBackdrop","$ionicModal","$ionicSlideBoxDelegate","$ionicScrollDelegate"]}(),function(){"use strict";function e(e,n,t,o,a){function i(){return e.ready(function(){n.cordova&&(r.deviceinfo=device.platform),t.getByEmployeeId(o.empId).then(function(e){r.data=e.data[0],console.log(e)},function(e){console.log(e)}),r.storeContact=function(){if(n.cordova){var e={displayName:"Murat Aydin"};navigator.contacts.create(e),navigator.contacts.save(function(e){console.log("Success: ",e)},function(e){console.log("Success: ",e)})}else alert("Kan niet omdat je jezelf in de browser bevind!")}}),r}var r=this;r.deviceinfo="Browser",i()}angular.module("Pocapp.userprofile").controller("UserprofileCtrl",e),e.$inject=["$ionicPlatform","$window","dataservice","$stateParams","$ionicPopup"]}(),function(){"use strict";function e(){function e(){return n}var n=this;e()}angular.module("Pocapp.core.layout").controller("LayoutCtrl",e),e.$inject=[]}(),function(){"use strict";function e(e,n,t){return{restrict:"EA",template:"",templateUrl:"common/features/imagezoomgallery/imagezoomgallery.html",replace:!0,controllerAs:"izg",scope:{galleryId:"=",images:"="},link:function(e,n,t){console.log(e,n,t)},controller:["$scope",function(o){o.imagezoomid=o.galleryId,o.zoomMin=1,o.allImages=o.images,o.showImages=function(e){o.activeSlide=e,o.showModal("common/features/imagezoomgallery/imagezoomgallery-lightbox.html")},o.showModal=function(n){e.fromTemplateUrl(n,{scope:o}).then(function(e){o.modal=e,o.modal.show()})},o.closeModal=function(){o.modal.hide(),o.modal.remove()},o.updateSlideStatus=function(e){var a=n.$getByHandle("scrollHandle"+e).getScrollPosition().zoom;a==o.zoomMin?t.enableSlide(!0):t.enableSlide(!1)}}]}}angular.module("feature.imagezoomgallery").directive("imageZoomGallery",e),e.$inject=["$ionicModal","$ionicScrollDelegate","$ionicSlideBoxDelegate"]}(),function(){"use strict";function e(e,n){e.state(n.ROUTE.STATE,{url:n.ROUTE.URL,templateUrl:n.ROUTE.TEMPLATEURL,controller:n.ROUTE.CONTROLLER,controllerAs:n.ROUTE.CONTROLLERAS})}angular.module("Pocapp.appload").config(e),e.$inject=["$stateProvider","APPLOADCONSTANTS"]}(),function(){"use strict";function e(e,n){e.otherwise(n.DEFAULT_URL)}angular.module("Pocapp.core").config(e),e.$inject=["$urlRouterProvider","CORECONSTANTS"]}(),function(){"use strict";function e(e){e.state("Pocapp.dashboard",{url:"dashboard",views:{appContent:{templateUrl:"dashboard/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard"}}})}angular.module("Pocapp.dashboard").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.newsdetail",{url:"newsdetail/:nId",views:{appContent:{templateUrl:"newsdetail/newsdetail.html",controller:"NewsdetailCtrl",controllerAs:"newsdetail"}}})}angular.module("Pocapp.newsdetail").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.projectdetail",{url:"projectdetail/:pId",views:{appContent:{templateUrl:"projectdetail/projectdetail.html",controller:"ProjectdetailCtrl",controllerAs:"projectdetail"}}})}angular.module("Pocapp.projectdetail").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.userprofile",{url:"userprofile/:empId",views:{appContent:{templateUrl:"userprofile/userprofile.html",controller:"UserprofileCtrl",controllerAs:"userprofile"}}})}angular.module("Pocapp.userprofile").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp",{url:"/","abstract":!0,templateUrl:"core/layout/layout.html",controller:"LayoutCtrl",controllerAs:"layout"})}angular.module("Pocapp.core.layout").config(e),e.$inject=["$stateProvider"]}(),angular.module("Pocapp").run(["$templateCache",function(e){e.put("appload/appload.html",'<!-- A Parent View that will be shown after the Splashscreen and Before the Dashboard / Home page -->\n<ion-view view-title="Appload">\n  <ion-content>\n    <h1>Loading...</h1>\n  </ion-content>\n</ion-view>\n'),e.put("dashboard/dashboard.html",'<ion-view view-title="Dashboard" ng-class="{\'background-contacts\' : dashboard.subject == \'contacts\', \'background-projects\' : dashboard.subject == \'projects\', \'background-news\' : dashboard.subject == \'news\'}">\r\n	<ion-content>\r\n		<div class="list list-inset">\r\n			<label class="item item-input">\r\n				<i class="icon ion-search placeholder-icon"></i>\r\n				<input type="text" placeholder="Search" ng-model="dashboard.searchQuery" ng-keyup="dashboard.getSearchResult()">\r\n      		</label>\r\n		</div>\r\n\r\n		<div class="row">\r\n			<div class="col col-33 text-center" ng-class="dashboard.subject == \'contacts\' ? \'active-subject\' : \'\'" ng-click="dashboard.changeSubject(\'contacts\')"><span>Contacts</span></div>\r\n			<div class="col col-33 text-center" ng-class="dashboard.subject == \'projects\' ? \'active-subject\' : \'\'" ng-click="dashboard.changeSubject(\'projects\')">Projects</div>\r\n			<div class="col col-33 text-center" ng-class="dashboard.subject == \'news\' ? \'active-subject\' : \'\'" ng-click="dashboard.changeSubject(\'news\')">News</div>\r\n		</div>\r\n\r\n		<div ng-show="dashboard.subject == \'contacts\'">\r\n			<div class="list">\r\n				<div class="item item-avatar" ng-repeat="contact in dashboard.contacts" ui-sref="Pocapp.userprofile({empId: contact.employeeId})">\r\n					<img src="{{contact.profilephoto}}">\r\n					<h2>{{contact.firstname + " " + contact.lastname}}</h2>\r\n					<p>{{contact.role}}</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div ng-show="dashboard.subject == \'projects\'">\r\n			<div class="list">\r\n				<div class="item item-thumbnail-left" ng-repeat="project in dashboard.projects | filter: dashboard.searchQuery" ui-sref="Pocapp.projectdetail({pId: project.projectId})">\r\n					<img src="{{project.projectMainPhoto}}">\r\n					<h2>{{project.title}}</h2>\r\n					<p>{{project.year + \', \' + project.unit + \' \' + project.team}}</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div ng-show="dashboard.subject == \'news\'">\r\n			<div class="list">\r\n				<div class="item item-thumbnail-left" ng-repeat="news in dashboard.news | filter: dashboard.searchQuery" ui-sref="Pocapp.newsdetail({nId: news.newsId})">\r\n					<img src="{{news.newsMainPhoto}}">\r\n					<h2>{{news.title}}</h2>\r\n					<p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n	</ion-content>\r\n</ion-view>\r\n'),e.put("newsdetail/newsdetail.html",'<ion-view view-title="News">\r\n    <ion-content>\r\n        <!--{{projectdetail.data}}-->\r\n\r\n        <div class="list card">\r\n\r\n            <div class="item">\r\n                <img src="{{projectdetail.data.projectMainPhoto}}">\r\n                <h2>{{newsdetail.data.title}}</h2>\r\n                <p>{{newsdetail.data.author + \', \' + newsdetail.data.createDate + \', \' + newsdetail.data.year}}</p>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        <image-zoom-gallery images="newsdetail.allImages"></image-zoom-gallery>\r\n\r\n    </ion-content>\r\n</ion-view>\r\n'),e.put("projectdetail/projectdetail.html",'<ion-view view-title="Project Detail">\r\n    <ion-content>\r\n\r\n        <div class="list card">\r\n\r\n            <div class="item">\r\n                <h2>{{projectdetail.data.title}}</h2>\r\n                <p>{{projectdetail.data.year + \', \' + projectdetail.data.unit + \' \' + projectdetail.data.team}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <image-zoom-gallery galleryId="projectDetail" images="projectdetail.allImages"></image-zoom-gallery>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col col-33 text-center" ng-class="projectdetail.subject == \'project\' ? \'active-subject\' : \'\'" ng-click="projectdetail.changeSubject(\'project\')">Project</div>\r\n            <div class="col col-33 text-center" ng-class="projectdetail.subject == \'team\' ? \'active-subject\' : \'\'" ng-click="projectdetail.changeSubject(\'team\')">Team</div>\r\n            <div class="col col-33 text-center" ng-class="projectdetail.subject == \'links\' ? \'active-subject\' : \'\'" ng-click="projectdetail.changeSubject(\'links\')">Links</div>\r\n        </div>\r\n\r\n    </ion-content>\r\n</ion-view>'),e.put("userprofile/userprofile.html",'<ion-view view-title="User Profile">\n	<ion-content>\n		<div class="list">\n			<div class="item item-avatar">\n				<img src="{{userprofile.data.profilephoto}}">\n				<h2>{{userprofile.data.firstname + " " + userprofile.data.lastname}}</h2>\n				<p>{{userprofile.data.role}}</p>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-calendar"></i> {{userprofile.data.dateOfBirth}}\n				<span class="item-note">\n					Birthdate\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-flag"></i> {{userprofile.data.nationality}}\n				<span class="item-note">\n					Nationality\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-iphone"></i> {{userprofile.data.mobileNumber}}\n				<span class="item-note">\n					Mobile number\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-android-call"></i> {{userprofile.data.phoneNumber}}\n				<span class="item-note">\n					Phone number\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-email"></i> {{userprofile.data.email}}\n				<span class="item-note">\n					Email\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-location"></i> {{userprofile.data.company}}\n				<span class="item-note">\n					Company\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-home"></i> {{userprofile.data.department}}\n				<span class="item-note">\n					Department\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-android-expand"></i> {{userprofile.data.unit}}\n				<span class="item-note">\n					Unit\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-ios-people"></i> {{userprofile.data.team}}\n				<span class="item-note">\n					Team\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-person"></i> {{userprofile.data.manager}}\n				<span class="item-note">\n					Manager\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-person"></i> {{userprofile.deviceinfo}}\n				<span class="item-note">\n					Device platform\n				</span>\n			</div>\n			<button ng-click="userprofile.storeContact()">Voeg contact toe</button>\n		</div>\n	</ion-content>\n</ion-view>'),e.put("core/layout/layout.html",'<ion-side-menus enable-menu-with-back-views="false">\r\n  <ion-side-menu-content>\r\n    <ion-nav-bar class="bar-positive">\r\n      <ion-nav-back-button></ion-nav-back-button>\r\n      <ion-nav-buttons side="left">\r\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <!-- Parent Nav View, child views are loaded in the appContent view -->\r\n    <!-- To remove the Side Menu, remove all the code on this page expect for <ion-nav-view name="appContent"></ion-nav-view> -->\r\n    <ion-nav-view name="appContent"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side="left">\r\n    <ion-list>\r\n      <ion-item menu-close ui-sref="Pocapp.dashboard">\r\n        Dashboard\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n'),e.put("common/features/imagezoomgallery/imagezoomgallery-lightbox.html",'<div class="modal image-modal transparent" on-swipe-down="closeModal()">\r\n    <div class="bar bar-clear">\r\n        <div class="h1 title"></div>\r\n        <button class="button button-clear button-positive" ng-click="closeModal()">\r\n            <i class="icon ion-close-circled"></i>\r\n        </button>\r\n    </div>\r\n    <ion-slide-box on-slide-changed="slideChanged(index)" active-slide="activeSlide">\r\n        <ion-slide ng-repeat="image in allImages">\r\n\r\n            <ion-scroll direction="xy" scrollbar-x="false" scrollbar-y="false" zooming="true" min-zoom="{{zoomMin}}" style="width: 100%; height: 100%"\r\n                delegate-handle="scrollHandle{{$index}}" on-scroll="updateSlideStatus(activeSlide)" on-release="updateSlideStatus(activeSlide)">\r\n\r\n                <div class="image" style="background-image: url( {{image.src}} )"></div>\r\n\r\n            </ion-scroll>\r\n        </ion-slide>\r\n    </ion-slide-box>\r\n</div>'),e.put("common/features/imagezoomgallery/imagezoomgallery.html",'<div id="imagezoomid">\r\n    <a class="item item-list-detail">\r\n        <ion-scroll direction="x">\r\n            <img ng-repeat="image in allImages" ng-src="{{image.src}}" ng-click="showImages($index)" class="image-list-thumb" />\r\n        </ion-scroll>\r\n    </a>\r\n</div>')}]);