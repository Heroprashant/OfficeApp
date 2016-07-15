!function(){"use strict";angular.module("Pocapp",["ionic","Pocapp.core","Pocapp.appload","Pocapp.dashboard","Pocapp.userprofile","Pocapp.projectdetail","Pocapp.newsdetail"])}(),function(){"use strict";angular.module("Pocapp.appload",[])}(),function(){"use strict";angular.module("Pocapp.core",["Pocapp.core.models","Pocapp.core.services","Pocapp.core.layout","Pocapp.core.features"])}(),function(){"use strict";angular.module("Pocapp.dashboard",[])}(),function(){"use strict";angular.module("Pocapp.newsdetail",[])}(),function(){"use strict";angular.module("Pocapp.projectdetail",[])}(),function(){"use strict";angular.module("Pocapp.userprofile",[])}(),function(){"use strict";angular.module("Pocapp.core.layout",[])}(),function(){"use strict";angular.module("Pocapp.core.features",["feature.imagezoomgallery"])}(),function(){"use strict";angular.module("Pocapp.core.models",[])}(),function(){"use strict";angular.module("Pocapp.core.services",["service.securestorage","service.dataservice"])}(),function(){"use strict";angular.module("feature.imagezoomgallery",[])}(),function(){"use strict";angular.module("service.dataservice",[])}(),function(){"use strict";angular.module("service.securestorage",[])}(),function(){"use strict";angular.module("Pocapp.appload").constant("APPLOADCONSTANTS",{ROUTE:{STATE:"appload",URL:"/appload",TEMPLATEURL:"appload/appload.html",CONTROLLER:"ApploadCtrl",CONTROLLERAS:"appload"}})}(),function(){"use strict";angular.module("Pocapp.core").constant("CORECONSTANTS",{DEFAULT_URL:"appload"})}(),function(){"use strict";angular.module("service.dataservice").constant("DATASERVICECONSTANTS",{BASE_URL:"http://10.31.16.185:3000"})}(),function(){"use strict";angular.module("service.securestorage").constant("APPSTORAGECONSTANTS",{GENERAL:{SERVICENAME:"nl.niekheezemans.kodi"},IOS:{},ANDROID:{},BROWSER:{}})}(),function(){"use strict";angular.module("Pocapp.appload").config(function(){})}(),function(){"use strict";angular.module("Pocapp.core").config(function(){})}(),function(){"use strict";angular.module("Pocapp.dashboard").config(function(){})}(),function(){"use strict";angular.module("Pocapp.newsdetail").config(function(){})}(),function(){"use strict";angular.module("Pocapp.projectdetail").config(function(){})}(),function(){"use strict";angular.module("Pocapp.userprofile").config(function(){})}(),function(){"use strict";angular.module("Pocapp.core.layout").config(function(){})}(),function(){"use strict";function e(e,n){e.ready(function(){console.log("Ionic Ready on Run!"),n.cordova&&n.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),n.StatusBar&&n.StatusBar.styleLightContent()})}angular.module("Pocapp.appload").run(e),e.$inject=["$ionicPlatform","$window"]}(),function(){"use strict";function e(e,n,t){function o(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/contacts",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function a(o,a){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/"+o+"?q="+a,timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function i(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/contacts?employeeId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}function c(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/projects",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function s(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/projects?projectId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}function l(){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/news",timeout:5e3}).then(function(e){d.resolve(e)},function(e){d.reject(e)}),d.promise}function r(o){return d=e.defer(),n({method:"GET",url:t.BASE_URL+"/news?newsId="+o,timeout:5e3}).then(function(e){console.log(e),d.resolve(e)},function(e){d.reject(e)}),d.promise}var d,u={getAllContacts:o,getSearchResult:a,getByEmployeeId:i,getAllProjects:c,getByProjectId:s,getAllNews:l,getByNewsId:r};return u}angular.module("service.dataservice").factory("dataservice",e),e.$inject=["$q","$http","DATASERVICECONSTANTS"]}(),function(){"use strict";function e(e,n,t){function o(n,o,a){switch(s=e.defer(),a){case"iOS":case"Android":l=new Keychain,l.setForKey(function(e){s.resolve(e)},function(e){console.log("KC Set Error: ",e),s.reject(e)},n,t.GENERAL.SERVICENAME,o);break;default:s.resolve(localStorage.setItem(n,o))}return s.promise}function a(n,o){switch(s=e.defer(),o){case"iOS":case"Android":l=new Keychain,l.getForKey(function(e){s.resolve(e)},function(e){s.reject(e)},n,t.GENERAL.SERVICENAME);break;default:localStorage.getItem(n)?s.resolve(localStorage.getItem(n)):s.reject()}return s.promise}function i(n,o){switch(s=e.defer(),o){case"iOS":case"Android":l=new Keychain,l.removeForKey(function(e){s.resolve(e)},function(e){s.reject(e)},n,t.GENERAL.SERVICENAME);break;default:localStorage.getItem(n)?s.resolve(localStorage.removeItem(n)):s.reject()}return s.promise}function c(e){var n=JSON.stringify(e);return n=n.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\/]/g,"\\/").replace(/[\b]/g,"\\b").replace(/[\f]/g,"\\f").replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t")}var s,l,r={setItem:o,getItem:a,removeItem:i,escapeObj:c};return r}angular.module("service.securestorage").factory("securestorage",e),e.$inject=["$q","$window","APPSTORAGECONSTANTS"]}(),function(){"use strict";function e(e,n,t,o){function a(){e.ready(function(){return n.cordova?(console.log("cordova check => device"),t.go("Pocapp.dashboard")):(console.log("cordova check => browser"),t.go("Pocapp.dashboard")),i})}var i=this;a()}angular.module("Pocapp.appload").controller("ApploadCtrl",e),e.$inject=["$ionicPlatform","$window","$state","APPLOADCONSTANTS"]}(),function(){"use strict";function e(e,n,t,o,a,i){function c(){return n.popover=a.fromTemplateUrl("dashboard/skype-contact.html",{scope:n}).then(function(e){n.popover=e,console.log(n.popover)}),s.openPopover=function(e){n.popover.show(e)},s.closePopover=function(){n.popover.hide()},n.$on("$destroy",function(){n.popover.remove()}),n.$on("popover.hidden",function(){}),n.$on("popover.removed",function(){}),s.getSearchResult=function(){""!==s.searchQuery?"contacts"===s.subject&&(o.show({template:"Loading..."}),e.getSearchResult(s.subject,s.searchQuery).then(function(e){s.contacts=e.data;var n=0;angular.forEach(e.data,function(){u=[],e.data[n].email&&""!==e.data[n].email&&u.push({type:"email",value:e.data[n].email}),e.data[n].linkedIn&&""!==e.data[n].linkedIn&&u.push({type:"linkedIn",value:e.data[n].linkedIn}),e.data[n].skype&&""!==e.data[n].skype&&u.push({type:"skype",value:e.data[n].skype}),e.data[n].mobileNumber&&""!==e.data[n].mobileNumber&&u.push({type:"mobileNumber",value:e.data[n].mobileNumber}),u.push({type:"storeContact",value:e.data[n].employeeId}),s.contacts[n].channels=u,n++})},function(e){console.log(e)})["finally"](function(){o.hide()})):s.contacts=null},s.changeSubject=function(e){switch(s.searchQuery="",e){case"contacts":break;case"projects":s.getAllProjects();break;case"news":s.getAllNews()}s.subject=e},s.contactMenuToggle=function(e){function n(e){r=0,l=e,angular.element(document.querySelector("#contact_togglemenu_"+e)).addClass("toggleMenu"),angular.element(document.querySelector("#contact_"+e)).addClass("contactQuickMenu"),angular.element(document.querySelector("#contact-icon-container_"+e)).css({"z-index":"9998"}),i(function(){angular.element(document.querySelector("#contact_"+e)).addClass("contactQuickMenuActive")},25),angular.forEach(s.contacts[e].channels,function(n,t){r+=100,i(function(){angular.element(document.querySelector("#animation_"+e+"_"+t)).addClass("contact-icon-transition")},r)})}function t(e){l=!1,d=0,angular.forEach(s.contacts[e].channels,function(n,t){angular.element(document.querySelector("#contact_"+e)).removeClass("contactQuickMenuActive");var o=s.contacts[e].channels.length-1-t;d+=80,i(function(){angular.element(document.querySelector("#animation_"+e+"_"+o)).removeClass("contact-icon-transition")},d)}),i(function(){angular.element(document.querySelector("#contact_"+e)).removeClass("contactQuickMenu"),angular.element(document.querySelector("#contact_togglemenu_"+e)).removeClass("toggleMenu"),angular.element(document.querySelector("#contact-icon-container_"+e)).css({"z-index":"-9998"})},d+200)}s.disabeld=!0,i(function(){s.disabeld=!1},500),l===!1?n(e):l===e?t(e):l!==e&&(t(l),n(e))},s.getAllProjects=function(){o.show({template:"Loading..."}),e.getAllProjects().then(function(e){s.projects=e.data},function(e){console.log(e)})["finally"](function(){o.hide()})},s.getAllNews=function(){o.show({template:"Loading..."}),e.getAllNews().then(function(e){s.news=e.data},function(e){console.log(e)})["finally"](function(){o.hide()})},s.sendMail=function(e){t.open("mailto:"+e+"?subject=subject&body=test","_self")},s.callPerson=function(e){t.open("tel:"+e,"_self")},s.linkedIn=function(e){t.open(e,"_blank")},s.skype=function(e,n,t){var o=JSON.parse(e);s.skypeChannels=o,s.openPopover(t)},s.storeContact=function(e){alert("Store Contact: "+e)},s.openSkype=function(e){e.includes("@ciber.com")?t.open("sip:kenneth.timmermans@ciber.com","_self"):t.open("skype:echo123?call&video=true","_self")},s}var s=this,l=!1,r=0,d=0;s.subject="contacts",s.opening=!1,s.closing=!1;var u=[];c()}angular.module("Pocapp.dashboard").controller("DashboardCtrl",e),e.$inject=["dataservice","$scope","$window","$ionicLoading","$ionicPopover","$timeout","$interval"]}(),function(){"use strict";function e(e,n,t,o,a,i,c){function s(){return e.getByNewsId(t.nId).then(function(e){l.data=e.data[0],console.log(e)},function(e){console.log(e)}),l}var l=this;l.allImages=[{src:"images/slider/slider_one.jpeg"},{src:"images/slider/slider_two.png"},{src:"images/slider/slider_three.jpg"}],s()}angular.module("Pocapp.newsdetail").controller("NewsdetailCtrl",e),e.$inject=["dataservice","$scope","$stateParams","$ionicBackdrop","$ionicModal","$ionicSlideBoxDelegate","$ionicScrollDelegate"]}(),function(){"use strict";function e(e,n,t,o,a,i,c){function s(){return e.getByProjectId(t.pId).then(function(e){l.data=e.data[0],console.log(e)},function(e){console.log(e)}),l.changeSubject=function(e){switch(e){case"project":break;case"team":break;case"links":}l.subject=e},l.showImages=function(e){l.activeSlide=e,l.showModal("template/template-gallery-zoomview.html")},l.showModal=function(e){a.fromTemplateUrl(e,{scope:n}).then(function(e){l.modal=e,l.modal.show()})},l.closeModal=function(){l.modal.hide(),l.modal.remove()},l.updateSlideStatus=function(e){var n=c.$getByHandle("scrollHandle"+e).getScrollPosition().zoom;n===l.zoomMin?i.enableSlide(!0):i.enableSlide(!1)},l.projectDetailRefresh=function(){e.getByProjectId(t.pId).then(function(e){l.data=e.data[0],console.log(e)},function(e){console.log(e)})["finally"](function(){n.$broadcast("scroll.refreshComplete")})},l}var l=this;l.subject="project",l.allImages=[{src:"images/slider/slider_one.jpeg"},{src:"images/slider/slider_two.png"},{src:"images/slider/slider_three.jpg"}],l.zoomMin=1,s()}angular.module("Pocapp.projectdetail").controller("ProjectdetailCtrl",e),e.$inject=["dataservice","$scope","$stateParams","$ionicBackdrop","$ionicModal","$ionicSlideBoxDelegate","$ionicScrollDelegate"]}(),function(){"use strict";function e(e,n,t,o,a){function i(){return c.convertImgToDataURLviaCanvas=function(e,n,t){var o=new Image;o.crossOrigin="Anonymous",o.onload=function(){var e,o=document.createElement("CANVAS"),a=o.getContext("2d");o.height=this.height,o.width=this.width,a.drawImage(this,0,0),e=o.toDataURL(t),n(e),o=null},o.src=e},e.ready(function(){n.cordova&&(c.deviceinfo=device.platform),t.getByEmployeeId(o.empId).then(function(e){c.data=e.data[0],console.log(c.data.profilephoto),c.convertImgToDataURLviaCanvas(c.data.profilephoto,function(e){s=e})},function(e){console.log(e)}),c.storeContact=function(){if(n.cordova){console.log("Running!");var e=navigator.contacts.create();e.displayName=c.data.firstname+" "+c.data.lastname;var t=new ContactName;t.givenName=c.data.firstname,t.familyName=c.data.lastname,e.name=t,e.nickname="";var o=[];o[0]=new ContactField("work",c.data.phoneNumber,!1),o[1]=new ContactField("mobile",c.data.mobileNumber,!0),e.phoneNumbers=o;var a=[];a[0]=new ContactField("email",c.data.email,!1),e.emails=a;var i=[];i[0]=new ContactAddress("","","","","","","",""),e.addresses=i;var l=[];l[0]=new ContactField("ims","",!1),e.ims=l;var r=[];r[0]=new ContactOrganization("","",c.data.company,c.data.department,c.data.unit+" - "+c.data.team),e.organizations=r;var d=new Date;e.birthday=d.getDate(),e.note="Ciber contact";var u=[];u[0]=new ContactField("base64",s,!1),e.photos=u,e.save(function(e){console.log("Success: ",e)},function(e){console.log("Error: ",e)})}else console.log("Kan niet omdat je jezelf in de browser bevind!")}}),c}var c=this;c.deviceinfo="Browser";var s="";i()}angular.module("Pocapp.userprofile").controller("UserprofileCtrl",e),e.$inject=["$ionicPlatform","$window","dataservice","$stateParams","$ionicPopup"]}(),function(){"use strict";function e(){function e(){return n}var n=this;e()}angular.module("Pocapp.core.layout").controller("LayoutCtrl",e),e.$inject=[]}(),function(){"use strict";function e(e,n,t){return{restrict:"EA",template:"",templateUrl:"common/features/imagezoomgallery/imagezoomgallery.html",replace:!0,controllerAs:"izg",scope:{galleryId:"=",images:"="},link:function(e,n,t){console.log(e,n,t)},controller:["$scope",function(o){o.imagezoomid=o.galleryId,o.zoomMin=1,o.allImages=o.images,o.showImages=function(e){o.activeSlide=e,o.showModal("common/features/imagezoomgallery/imagezoomgallery-lightbox.html")},o.showModal=function(n){e.fromTemplateUrl(n,{scope:o}).then(function(e){o.modal=e,o.modal.show()})},o.closeModal=function(){o.modal.hide(),o.modal.remove()},o.updateSlideStatus=function(e){var a=n.$getByHandle("scrollHandle"+e).getScrollPosition().zoom;a===o.zoomMin?t.enableSlide(!0):t.enableSlide(!1)}}]}}angular.module("feature.imagezoomgallery").directive("imageZoomGallery",e),e.$inject=["$ionicModal","$ionicScrollDelegate","$ionicSlideBoxDelegate"]}(),function(){"use strict";function e(e,n){e.state(n.ROUTE.STATE,{url:n.ROUTE.URL,templateUrl:n.ROUTE.TEMPLATEURL,controller:n.ROUTE.CONTROLLER,controllerAs:n.ROUTE.CONTROLLERAS})}angular.module("Pocapp.appload").config(e),e.$inject=["$stateProvider","APPLOADCONSTANTS"]}(),function(){"use strict";function e(e,n){e.otherwise(n.DEFAULT_URL)}angular.module("Pocapp.core").config(e),e.$inject=["$urlRouterProvider","CORECONSTANTS"]}(),function(){"use strict";function e(e){e.state("Pocapp.dashboard",{url:"dashboard",views:{appContent:{templateUrl:"dashboard/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard"}}})}angular.module("Pocapp.dashboard").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.newsdetail",{url:"newsdetail/:nId",views:{appContent:{templateUrl:"newsdetail/newsdetail.html",controller:"NewsdetailCtrl",controllerAs:"newsdetail"}}})}angular.module("Pocapp.newsdetail").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.projectdetail",{url:"projectdetail/:pId",views:{appContent:{templateUrl:"projectdetail/projectdetail.html",controller:"ProjectdetailCtrl",controllerAs:"projectdetail"}}})}angular.module("Pocapp.projectdetail").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp.userprofile",{url:"userprofile/:empId",views:{appContent:{templateUrl:"userprofile/userprofile.html",controller:"UserprofileCtrl",controllerAs:"userprofile"}}})}angular.module("Pocapp.userprofile").config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e){e.state("Pocapp",{url:"/","abstract":!0,templateUrl:"core/layout/layout.html",controller:"LayoutCtrl",controllerAs:"layout"})}angular.module("Pocapp.core.layout").config(e),e.$inject=["$stateProvider"]}(),angular.module("Pocapp").run(["$templateCache",function(e){e.put("appload/appload.html",'<!-- A Parent View that will be shown after the Splashscreen and Before the Dashboard / Home page -->\n<ion-view view-title="Appload">\n  <ion-content>\n    <h1>Loading...</h1>\n  </ion-content>\n</ion-view>\n'),e.put("dashboard/dashboard.html",'<ion-view view-title="" ng-class="{\'mainstyle-contacts\' : dashboard.subject == \'contacts\', \'mainstyle-projects\' : dashboard.subject == \'projects\', \'mainstyle-news\' : dashboard.subject == \'news\'}">\n	<img class="img-main-logo" src="images/ciber.png">\n	<ion-content scroll="false">\n		<div class="list list-inset search-bar">\n			<label class="item item-input">\n				<i class="icon ion-search placeholder-icon"></i>\n				<input type="text" placeholder="Search" ng-model="dashboard.searchQuery" ng-keyup="dashboard.getSearchResult()">\n      		</label>\n		</div>\n\n		<div class="row tab-bar-custom">\n			<div class="col col-33 text-center custom-tab-bar-item" ng-class="dashboard.subject == \'contacts\' ? \'active-subject\' : \'inactive-subject\'"\n				ng-click="dashboard.changeSubject(\'contacts\')"><span>Contacts</span></div>\n			<div class="col col-33 text-center custom-tab-bar-item" ng-class="dashboard.subject == \'projects\' ? \'active-subject\' : \'inactive-subject\'"\n				ng-click="dashboard.changeSubject(\'projects\')"><span>Projects</span></div>\n			<div class="col col-33 text-center custom-tab-bar-item" ng-class="dashboard.subject == \'news\' ? \'active-subject\' : \'inactive-subject\'"\n				ng-click="dashboard.changeSubject(\'news\')"><span>News</span></div>\n		</div>\n\n		<ion-scroll class="scroll-style" zooming="false" direction="y">\n			<!-- Contacts -->\n			<div ng-show="dashboard.subject == \'contacts\'">\n				<div ng-hide="dashboard.contacts.length >= \'0\'">\n					<div class="search-bar-contact">\n						<h2>Find your collegue</h2>\n						<label class="item item-input search-bar">\n						<i class="icon ion-search placeholder-icon"></i>\n						<input type="text" placeholder="Search" ng-model="dashboard.searchQuery" ng-keyup="dashboard.getSearchResult()">\n					</label>\n					</div>\n				</div>\n				<div class="list">\n					<div class="item item-avatar custom-item-contacts" ng-repeat="(contactIndex, contact) in dashboard.contacts">\n						<img class="img-profile-photo" src="{{contact.profilephoto}}" ng-click="!dashboard.disabeld && dashboard.contactMenuToggle( contactIndex )">\n						<div id="contact_togglemenu_{{contactIndex}}">\n							<div id="contact_{{contactIndex}}">\n								<div id="contact-icon-container_{{contactIndex}}" class="contact-icon-container">\n									<div ng-show="channel.value.length > \'0\' || channel.value.length != \'\'" ng-repeat="(channelIndex, channel) in contact.channels" id="animation_{{contactIndex}}_{{$index}}" class="contact-icons contact-icon-bg-{{channel.type}}">\n										<!-- Email -->\n										<div ng-show="channel.type == \'email\'" ng-click="dashboard.sendMail( \'{{channel.value}}\' )" style="width: 100%; height: 100%;"></div>\n										<!-- Telephone -->\n										<div ng-show="channel.type == \'mobileNumber\'" ng-click="dashboard.callPerson( \'{{channel.value}}\' )" style="width: 100%; height: 100%;"></div>\n										<!-- LinkedIn -->\n										<div ng-show="channel.type == \'linkedIn\'" ng-click="dashboard.linkedIn( \'{{channel.value}}\' )" style="width: 100%; height: 100%;"></div>\n										<!-- Skype -->\n										<div ng-show="channel.type == \'skype\'" ng-click="dashboard.skype( \'{{channel.value}}\', \'\', $event )" style="width: 100%; height: 100%;"></div>\n										<!-- storeContact -->\n										<div ng-show="channel.type == \'storeContact\'" ng-click="dashboard.storeContact( \'{{channel.value}}\' )" style="width: 100%; height: 100%;"></div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div ui-sref="Pocapp.userprofile({empId: contact.employeeId})">\n							<h2>{{contact.firstname + " " + contact.lastname}}</h2>\n							<p>{{contact.role}}</p>\n						</div>\n					</div>\n				</div>\n			</div>\n\n			<!-- Projects -->\n			<div ng-show="dashboard.subject == \'projects\'">\n				<div class="list">\n					<div class="item item-thumbnail-left custom-item-projects" ng-repeat="project in dashboard.projects | filter: dashboard.searchQuery"\n						ui-sref="Pocapp.projectdetail({pId: project.projectId})">\n						<img src="{{project.projectMainPhoto}}">\n						<h2>{{project.title}}</h2>\n						<p>{{project.year + \', \' + project.unit + \' \' + project.team}}</p>\n					</div>\n				</div>\n			</div>\n\n			<!-- News -->\n			<div ng-show="dashboard.subject == \'news\'">\n				<!--<div class="list">\n				<div class="item item-thumbnail-left custom-item-news" ng-repeat="news in dashboard.news | filter: dashboard.searchQuery" ui-sref="Pocapp.newsdetail({nId: news.newsId})">\n					<img src="{{news.newsMainPhoto}}">\n					<h2>{{news.title}}</h2>\n					<p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\n				</div>\n			</div>-->\n				<div ng-repeat="news in dashboard.news | filter: dashboard.searchQuery" ui-sref="Pocapp.newsdetail({nId: news.newsId})">\n					<div class="card">\n						<div class="item item-text-wrap custom-item-news">\n							<h2>{{news.title}}</h2>\n							<p>{{news.author + \', \' + news.createDate + \', \' + news.year}}</p>\n							<br/>\n							<p>{{news.description_short}}</p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</ion-scroll>\n\n	</ion-content>\n</ion-view>\n'),e.put("dashboard/skype-contact.html",'<ion-popover-view class="custom-popover" style="background: red !important; height: auto !important;">\n        <div class="list">\n            <div class="item item-avatar" ng-repeat="skype in dashboard.skypeChannels" ng-click="dashboard.openSkype(skype.name)">\n                <img ng-src="{{skype.type == \'skype\' ? \'images/skype-logo.png\' : \'images/skype-for-business-logo.png\'}}">\n                <h2>{{skype.name}}</h2>\n                <p>{{skype.type == \'skype\' ? \'Skype\' : \'Skype for Business\'}}</p>\n            </div>\n        </div>\n</ion-popover-view>\n'),e.put("newsdetail/newsdetail.html",'<ion-view class="mainstyle-news" view-title="News">\n    <ion-nav-title>{{newsdetail.data.title}}</ion-nav-title>\n    <ion-content>\n\n        <image-zoom-gallery images="newsdetail.allImages"></image-zoom-gallery>\n\n        <div class="row">\n            <div class="col">\n                <h2>{{newsdetail.data.title}}</h2>\n                <p>{{newsdetail.data.author + \', \' + newsdetail.data.createDate + \', \' + newsdetail.data.year}}</p>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col">\n                <p>{{newsdetail.data.description_long}}</p>\n            </div>\n        </div>\n\n    </ion-content>\n</ion-view>'),e.put("projectdetail/projectdetail.html",'<ion-view>\n<ion-view class="mainstyle-projects" data-cache="false">\n    <ion-nav-title>{{projectdetail.data.title}}</ion-nav-title>\n    <ion-content>\n        <ion-refresher pulling-text="Pull to refresh..." on-refresh="projectdetail.projectDetailRefresh()">\n        </ion-refresher>\n\n        <div>\n            <image-zoom-gallery galleryId="projectDetail" images="projectdetail.allImages"></image-zoom-gallery>\n        </div>\n\n        <div class="row tab-bar-custom">\n            <div class="col col-33 text-center custom-tab-bar-item" ng-class="projectdetail.subject == \'project\' ? \'active-subject\' : \'inactive-subject\'"\n                ng-click="projectdetail.changeSubject(\'project\')"><span>Project<span></div>\n            <div class="col col-33 text-center custom-tab-bar-item" ng-class="projectdetail.subject == \'team\' ? \'active-subject\' : \'inactive-subject\'"\n                ng-click="projectdetail.changeSubject(\'team\')"><span>Team</span></div>\n            <div class="col col-33 text-center custom-tab-bar-item" ng-class="projectdetail.subject == \'links\' ? \'active-subject\' : \'inactive-subject\'"\n                ng-click="projectdetail.changeSubject(\'links\')"><span>Links</span></div>\n        </div>\n\n    </ion-content>\n</ion-view>\n'),e.put("userprofile/userprofile.html",'<ion-view view-title="User Profile" class="background-contacts-details">\n	<ion-content>\n		<div class="list">\n			<div class="item item-avatar">\n				<img id="profilephoto" src="{{userprofile.data.profilephoto}}">\n				<h2>{{userprofile.data.firstname + " " + userprofile.data.lastname}}</h2>\n				<p>{{userprofile.data.role}}</p>\n			</div>\n\n			<div class="item item-icon-left">\n				<i class="icon ion-calendar"></i> {{userprofile.data.dateOfBirth}}\n				<span class="item-note">\n					Birthdate\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-flag"></i> {{userprofile.data.nationality}}\n				<span class="item-note">\n					Nationality\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-iphone"></i> {{userprofile.data.mobileNumber}}\n				<span class="item-note">\n					Mobile number\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-android-call"></i> {{userprofile.data.phoneNumber}}\n				<span class="item-note">\n					Phone number\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-email"></i> {{userprofile.data.email}}\n				<span class="item-note">\n					Email\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-location"></i> {{userprofile.data.company}}\n				<span class="item-note">\n					Company\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-home"></i> {{userprofile.data.department}}\n				<span class="item-note">\n					Department\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-android-expand"></i> {{userprofile.data.unit}}\n				<span class="item-note">\n					Unit\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-ios-people"></i> {{userprofile.data.team}}\n				<span class="item-note">\n					Team\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-person"></i> {{userprofile.data.manager}}\n				<span class="item-note">\n					Manager\n				</span>\n			</div>\n			<div class="item item-icon-left">\n				<i class="icon ion-person"></i> {{userprofile.deviceinfo}}\n				<span class="item-note">\n					Device platform\n				</span>\n			</div>\n			<button ng-click="userprofile.storeContact()">Voeg contact toe</button>\n		</div>\n	</ion-content>\n</ion-view>\n'),e.put("core/layout/layout.html",'<ion-side-menus enable-menu-with-back-views="false">\n  <ion-side-menu-content>\n    <ion-nav-bar class="bar-positive">\n      <ion-nav-back-button></ion-nav-back-button>\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <!-- Parent Nav View, child views are loaded in the appContent view -->\n    <!-- To remove the Side Menu, remove all the code on this page expect for <ion-nav-view name="appContent"></ion-nav-view> -->\n    <ion-nav-view name="appContent"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side="left">\n    <ion-list>\n      <ion-item menu-close ui-sref="Pocapp.dashboard">\n        Dashboard\n      </ion-item>\n    </ion-list>\n  </ion-side-menu>\n</ion-side-menus>\n'),e.put("common/features/imagezoomgallery/imagezoomgallery-lightbox.html",'<div class="modal image-modal transparent" on-swipe-down="closeModal()">\n    <div class="bar bar-clear">\n        <div class="h1 title"></div>\n        <button class="button button-clear button-positive" ng-click="closeModal()">\n            <i class="icon ion-close-circled"></i>\n        </button>\n    </div>\n    <ion-slide-box on-slide-changed="slideChanged(index)" active-slide="activeSlide">\n        <ion-slide ng-repeat="image in allImages">\n\n            <ion-scroll direction="xy" scrollbar-x="false" scrollbar-y="false" zooming="true" min-zoom="{{zoomMin}}" style="width: 100%; height: 100%"\n                delegate-handle="scrollHandle{{$index}}" on-scroll="updateSlideStatus(activeSlide)" on-release="updateSlideStatus(activeSlide)">\n\n                <div class="image" style="background-image: url( {{image.src}} )"></div>\n\n            </ion-scroll>\n        </ion-slide>\n    </ion-slide-box>\n</div>'),e.put("common/features/imagezoomgallery/imagezoomgallery.html",'<div id="imagezoomid">\n    <a class="item item-list-detail custom-item-slider">\n        <ion-scroll direction="x">\n            <img ng-repeat="image in allImages" ng-src="{{image.src}}" ng-click="showImages($index)" class="image-list-thumb" />\n        </ion-scroll>\n    </a>\n</div>')}]);